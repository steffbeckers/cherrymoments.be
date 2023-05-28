import sgMail from "@sendgrid/mail";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const config = useRuntimeConfig();

  sgMail.setApiKey(config.server.sendgrid.apiKey);

  // await sgMail.send({
  //   from: "contact@cherrymoments.be",
  //   to: "steff@steffbeckers.eu",
  //   replyTo: body.email,
  //   subject: "Contactformulier inzending via website",
  //   html: `
  //     <div>
  //       <div><strong>Naam:</strong> ${body.name}</div>
  //       <div><strong>E-mailadres:</strong> ${body.email}</div>
  //       <div><strong>Telefoonnummer:</strong> ${body.phoneNumber}</div>
  //       <div><strong>Bericht:</strong></div>
  //       <div>${body.message}</div>
  //     </div>
  //   `,
  // });

  return config.server.sendgrid.testVar;
});
