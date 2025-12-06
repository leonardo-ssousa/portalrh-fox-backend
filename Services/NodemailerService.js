import nodemailer from "nodemailer";
import sendgridTransport from "nodemailer-sendgrid-transport";
import { configDotenv } from "dotenv";
configDotenv({ quiet: true});

// Configura o transporte SMTP
// const transporter = nodemailer.createTransport({
//   host: "smtp.office365.com", // Servidor SMTP do Outlook
//   port: 587, // Porta padrão para STARTTLS
//   secure: false, // Use STARTTLS, não SSL/TLS explícito
//   auth: {
//     user: "leonardo.silva@foxaudit.com.br",
//     pass: "lesi*4563",
//   },
//   tls: {
//     ciphers: 'SSLv3' // Pode ser necessário dependendo do ambiente
//   }
// });



const api_key = process.env.SEND_GRID_API
const transporter = nodemailer.createTransport(
  sendgridTransport({ auth: { api_key: api_key } })
);

/**
 * Envia email
*
* @param {string} to
 * @param {string} subject
 * @param {string} content
 * @param {object} attachments
 * @param {string} attachments.filename
 * @param {Buffer} attachments.content
*/
export function SendEmail(to, subject, content, attachments) {
  return new Promise((resolve, reject) => {
    // Opções do e-mail
    const mailOptions = {
      from: "leonardo.silva@foxaudit.com.br",
      to: to,
      subject: subject,
      html: content,
    };

    if (attachments) {
      mailOptions.attachments = attachments;
    }

    // Envia o e-mail
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return reject(error);
      }
      return resolve(info.response);
    });
  });
}
