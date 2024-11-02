// import { MailtrapClient } from "mailtrap";
// import dotenv from "dotenv";

// dotenv.config();

// export const mailtrapClient = new MailtrapClient({
// 	endpoint: process.env.MAILTRAP_ENDPOINT,
// 	token: process.env.MAILTRAP_TOKEN,
// });

// export const sender = {
// 	email: "mailtrap@demomailtrap.com",
// 	name: "Burak",
// };
import 'dotenv/config'
import { MailtrapClient } from "mailtrap"

const TOKEN = process.env.MailTrap_token;

 export const client = new MailtrapClient({
  token: TOKEN,
});

export const sender = {
  email: "hello@demomailtrap.com",
  name: "Mailtrap Test",
};
// const recipients = [
//   {
//     email: "alitufan702@gmail.com",
//   }
// ];

// client
//   .send({
//     from: sender,
//     to: recipients,
//     subject: "You are awesome!",
//     text: "Congrats for sending test email with Mailtrap!",
//     category: "Integration Test",
//   })
//   .then(console.log, console.error);