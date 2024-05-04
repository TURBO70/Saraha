const nodemailer = require('nodemailer');

module.exports.sendEmail = async (options) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "yassooff2004@gmail.com",
      pass: "aaxs olqg bqpr npsu",
    },
  });

  transporter.sendMail({
    from: '"Turbo" <yassooff2004@gmail.com>',
    to: options.email,
    subject: "Hello ✔",
    text: "hello king",
    html: `
    <h1>${options.message}</h1>
    <a href="http://localhost:3000/users/verify/${options.token}">verify</a>
    `,
  }, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }
  });
}
