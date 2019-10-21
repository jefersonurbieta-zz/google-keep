FROM nginx:1.15.10

RUN echo 'deb http://deb.debian.org/debian stretch-backports main' >> /etc/apt/sources.list.d/sources.list \
    && apt-get update \
    && apt-get -y install \
               cron \
               tzdata \
               certbot \
               python-certbot-nginx \
               ca-certificates \
               openssl -t stretch-backports

ENV TZ=America/Sao_Paulo
RUN echo $TZ > /etc/timezone \
    && dpkg-reconfigure -f noninteractive tzdata \
    && date

COPY dist /usr/share/nginx/html
COPY nginx/server.template /etc/nginx/conf.d/
COPY nginx/entrypoint.sh /usr/local/bin/
RUN chmod a+x /usr/local/bin/entrypoint.sh

COPY nginx/crontab /tmp/crontab-certbot
RUN (crontab -l; cat /tmp/crontab-certbot) | crontab -

VOLUME /etc/letsencrypt

ENTRYPOINT ["entrypoint.sh"]
