import nodemailer from 'nodemailer';

// Configura o transporte SMTP
const transporter = nodemailer.createTransport({
  service: "outlook",
  auth: {
    user: "leonardo.silva@foxaudit.com.br",
    pass: "lesi*4563",
  },
});

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
      html: content
    };

    if(attachments){
      mailOptions.attachments = attachments
    }

    // Envia o e-mail
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return reject(console.log("Erro ao enviar e-mail:", error));
      }
      return resolve(console.log("E-mail enviado:", info.response));
    });
  });
}
