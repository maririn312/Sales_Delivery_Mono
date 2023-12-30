const nodemailer = require("nodemailer");

const sendMail = async (options) => {
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST, // Corrected typo: SMPT_HOST to SMTP_HOST
        port: process.env.SMTP_PORT, // Corrected typo: SMPT_PORT to SMTP_PORT
        // service: process.env.SMTP_SERVICE, // You can uncomment this line if using a predefined service
        auth: {
            user: process.env.SMTP_MAIL, // Corrected typo: SMPT_MAIL to SMTP_MAIL
            pass: process.env.SMTP_PASSWORD, // Corrected typo: SMPT_PASSWORD to SMTP_PASSWORD
        },
    });

    const mailOptions = {
        from: process.env.SMTP_MAIL, // Corrected typo: SMPT_MAIL to SMTP_MAIL
        to: options.email,
        subject: options.subject,
        text: options.message,
    };

    await transporter.sendMail(mailOptions);
};

module.exports = sendMail;
