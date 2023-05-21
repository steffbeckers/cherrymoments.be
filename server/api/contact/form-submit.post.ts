import sgMail from "@sendgrid/mail";
import qs from "querystring";

const config = useRuntimeConfig();
sgMail.setApiKey(config.app.SENDGRID_API_KEY);

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const data = qs.parse(body) as {
    name: string;
    address?: string;
    email: string;
    phoneNumber: string;
    message: string;
  };

  await sgMail.send({
    from: "contact@cherrymoments.be",
    to: "steff@steffbeckers.eu",
    replyTo: data.email,
    subject: "Contactformulier inzending op website",
    html: `
      <div>
        <div><strong>Naam:</strong> ${data.name}</div>
        <div><strong>Adres:</strong> ${data.address}</div>
        <div><strong>E-mailadres:</strong> ${data.email}</div>
        <div><strong>Telefoonnummer:</strong> ${data.phoneNumber}</div>
        <div><strong>Bericht:</strong></div>
        <div>${data.message}</div>
      </div>
    `,
  });

  return true;
});
