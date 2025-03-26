import { MailtrapClient } from "mailtrap";

const TOKEN = MAILTRAP_API_TOKEN;
const SENDER_EMAIL = "hello@demomailtrap.co";
const RECIPIENT_EMAIL = "pankajkumarmalik30@gmail.com";

if (!TOKEN) {
  throw new Error("MAILTRAP_TOKEN environment variable is not set");
}

const client = new MailtrapClient({ token: TOKEN });

const sender = { name: "Mailtrap Test", email: SENDER_EMAIL };

client
  .send({
    from: sender,
    to: [{ email: RECIPIENT_EMAIL }],
    subject: "Hello from mailtrap",
    text: "Welcome to ContentAura",
  })
  .then(console.log)
  .catch(console.error);
