import nodemailer from "nodemailer";

const sendEmail = async (options) => {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  // Create Message Object
  const message = {
    from: `${process.env.FROM_NAME} <${process.env.FROM_EMAIL}>`, // Sender Address
    to: options.email, // List of Receivers
    subject: options.subject, // Subject Line
    text: options.message, // Plain Text Body
  };

  const info = await transporter.sendMail(message);

  console.log("Message Sent: %s", info.messageId);
};

export default sendEmail;
