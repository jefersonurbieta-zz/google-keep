import mongoose from 'mongoose'

module.exports.id = 'EMAIL-TEMPLATES'

module.exports.up = function (done) {
    this.log('Running the script ' + module.exports.id)

    const Template = mongoose.model('Template')

    const data = [
        {
            name: 'REGISTER_EMAIL',
            subject: 'Confirmação de email',
            content: '<!DOCTYPE html> <html> <head> <meta charset="UTF-8"/> <title>REGISTER_EMAIL</title> <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"> <style> body { margin: 0; padding: 0; } </style> </head> <body> <div style="font: 14px/20px Helvetica,Arial,sans-serif;margin: 0;padding: 20px 0;text-align: left;background-color: #f8f8f7;"> <table border="0" cellpadding="10" cellspacing="0" style="background-color:#f8f8f7;width:100%;height:100%"> <tbody> <tr> <td align="center" valign="top"> <table border="0" cellpadding="0" cellspacing="0" style="border-radius:6px;background-color:#ffffff;width:600px; max-width: 600px;"> <tbody> <tr> <td align="center" valign="top"> <table border="0" cellpadding="0" cellspacing="0" style="border-radius:6px;background-color:#ffffff;width:600px;max-width: 600px"> <td align="center" valign="top" style=" background: #243e58;padding: 20px 0;"> <h1 style="margin:0px;padding:0"> <a href="https://faciles.com.br"> <img alt="Faciles" border="0" width="150" src="https://faciles.com.br/wp-content/uploads/2018/11/faciles-logo-white.png"/> </a> </h1> </td> <tr> <td align="left" style="line-height:150%;font-family:Helvetica;font-size:13px;color:#6f6f6f;padding:10px 30px; text-align: center;" valign="top"> <h2 style="text-align: center;line-height: 20px;margin: 30px 0;">Olá ${ userData.name }, tudo bem?<br>Seja bem-vindo a Faciles!</h2> <br> <br> <strong>Confirme seu cadastro</strong> clicando no botão abaixo: <br> <br> <a style="background: #1d3d68;color: #fff;text-align: center;padding: 8px 18px;margin: 10px 0;text-decoration: none;border-radius: 20px;" href="${ process.env.URL_BASE }/?emailConfirmed=${ token }">CONFIRMAR</a> <br> <br> <br> <br><strong>Atenciosamente,</strong> <br> <br>Faciles Operações <p style="font-size:10px;color:#686868"> <span>+55 (19) 3305-0700 | 3305-0701 | +55 (19) 98311-0020</span> <br> <br> <br><strong>Condomínio Praça Capital</strong> <br>Av. José Rocha Bomfim, 214 - sala 115 - Ed. Frankfurt <br>Cep. 13080-650 - Santa Genebra - Campinas/SP <br> <a href="https://faciles.com.br/" target="_blank" style="font-size:10px;color:#686868;text-decoration: none"> https://faciles.com.br </a> </p> </td> </tr> </table> </td> </tr> </tbody> </table> </td> </tr> </tbody> </table> </div> </body> </html>'
        },
        {
            name: 'FORGET_PASSWORD',
            subject: 'Esqueci a senha',
            content: '<!DOCTYPE html><html><head> <meta charset="UTF-8" /> <title>FORGET_PASSWORD</title> <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"> <style> body { margin: 0; padding: 0; } </style></head><body> <div style="font: 14px/20px Helvetica,Arial,sans-serif;margin: 0;padding: 20px 0;text-align: left;background-color: #f8f8f7;"> <table border="0" cellpadding="10" cellspacing="0" style="background-color:#f8f8f7;width:100%;height:100%"> <tbody> <tr> <td align="center" valign="top"> <table border="0" cellpadding="0" cellspacing="0" style="border-radius:6px;background-color:#ffffff;width:600px; max-width: 600px;"> <tbody> <tr> <td align="center" valign="top"> <table border="0" cellpadding="0" cellspacing="0" style="border-radius:6px;background-color:#ffffff;width:600px;max-width: 600px"> <td align="center" valign="top" style=" background: #243e58;padding: 20px 0;"> <h1 style="margin:0px;padding:0"> <a href="https://faciles.com.br"> <img alt="Faciles" border="0" width="150" src="https://faciles.com.br/wp-content/uploads/2018/11/faciles-logo-white.png"/> </a> </h1> </td> <tr> <td align="left" style="line-height:150%;font-family:Helvetica;font-size:13px;color:#6f6f6f;padding:10px 30px; text-align: center;" valign="top"> <h2 style="text-align: center;line-height: 20px;margin: 30px 0;">Olá ${ userData.name }, tudo bem?</h2> <br> <br>Verificamos que você esqueceu sua senha. Não tem problema! <br>Você pode alterar sua senha clicando no botão abaixo: <br> <br> <a style="background: #1d3d68;color: #fff;text-align: center;padding: 8px 18px;margin: 10px 0;text-decoration: none;border-radius: 20px;" href="${ process.env.URL_BASE }/#/pt/update-password?token=${ token }">ALTERAR SENHA</a> <br> <br> <br> <br><strong>Atenciosamente,</strong> <br> <br>Faciles Operações <p style="font-size:10px;color:#686868"> <span>+55 (19) 3305-0700 | 3305-0701 | +55 (19) 98311-0020</span> <br> <br> <br><strong>Condomínio Praça Capital</strong> <br>Av. José Rocha Bomfim, 214 - sala 115 - Ed. Frankfurt <br>Cep. 13080-650 - Santa Genebra - Campinas/SP <br> <a href="https://faciles.com.br/" target="_blank" style="font-size:10px;color:#686868;text-decoration: none"> https://faciles.com.br </a> </p> </td> </tr> </table> </td> </tr> </tbody> </table> </td> </tr> </tbody> </table> </div></body></html>'
        }
    ]

    Template.insertMany(data, function (err) {
        if (err) return handleError(err)
        done()
    })
}

module.exports.down = function (done) {
    done()
}
