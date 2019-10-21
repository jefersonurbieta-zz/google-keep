#!/bin/bash

function start {
    if ! [[ -d "/etc/letsencrypt/live/${PROXY_DOMAIN}" ]]; then
        startNginxInBackground
        createSslCertificate
        createSslDhparam
        createSslNginxConf
        stopNginx
        startNginxInForeground
    else
        createSslNginxConf
        startNginxInForeground
    fi
}

function createSslCertificate {
    echo "Creating SSL certificate with certbot"
    certbot --nginx -n --agree-tos --email $PROXY_EMAIL -d $PROXY_DOMAIN
}

function createSslDhparam {
    echo "Converting certificate to dhparm format used by nginx"
    openssl dhparam -out /etc/ssl/certs/dhparam.pem 2048
}

function createSslNginxConf {
    echo "Creating nginx configuration file (ssl.conf)"
    envsubst '${PROXY_DOMAIN} ${PROXY_PASS}' < /etc/nginx/conf.d/server.template > /etc/nginx/conf.d/server.conf
    printFile /etc/nginx/conf.d/server.conf
}

function printFile {
    echo "Created content: "
    echo ""
    cat $1
    echo ""
}

function startNginxInBackground {
    echo "Starting nginx in background"
    nginx -g 'daemon on;'
}

function startNginxInForeground {
    echo "Starting nginx in foreground"
    nginx -g 'daemon off;'
}

function stopNginx {
    echo "Stop nginx"
    nginx -s stop
    sleep 5
}

start
