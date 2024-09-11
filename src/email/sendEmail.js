import { createTransport } from "nodemailer";
import  jwt  from 'jsonwebtoken';
import { emailTemplet } from "./emailVrifyTemplet.js";

const transporter = createTransport({
  service:'gmail', 
  auth: {
    user: "abdokh1142003@gmail.com",
    pass: "dgvbswzsyabjeyxc",
  },
});

// async..await is not allowed in global scope, must use a wrapper
export async function sendEamil(email) {
  // send mail with defined transport object

  let token=jwt.sign({email},process.env.SECREt_KEY)
  const info = await transporter.sendMail({
    from: '"hay hay 👻" elEdara@gmail.com', // sender address
    to: email, // list of receivers
    subject: "Hello ✔", // Subject line
    html: emailTemplet(token), // html body
  });

  console.log("Message sent: %s", info.messageId);
}

