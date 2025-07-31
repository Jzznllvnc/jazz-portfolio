import nodemailer from 'nodemailer';

// Black and white email template for the site owner
const emailHtmlToOwner = ({ name, email, phone, message, service }) => `
  <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
    <div style="background-color: #000000; padding: 20px; text-align: center;">
      <h1 style="color: white; margin: 0; font-size: 24px;">Someone's Interested In Your Work</h1>
    </div>

    <div>
      <img src="${process.env.NEXT_PUBLIC_SITE_URL}/images/toowner.png" alt="Portfolio Screenshot" style="width: 100%; height: auto; display: block; max-width: 600px;">
    </div>

    <div style="padding: 30px;">
      <p style="font-size: 16px; color: #333; margin-bottom: 20px;">You've received a new message from your portfolio website:</p>
      
      <div style="background-color: #f9f9f9; padding: 20px; border-radius: 6px; margin-bottom: 25px;">
        <p style="margin: 0 0 15px 0;"><strong style="color: #000000; display: inline-block; width: 80px;">Name:</strong> ${name}</p>
        <p style="margin: 0 0 15px 0;"><strong style="color: #000000; display: inline-block; width: 80px;">Email:</strong> <a href="mailto:${email}" style="color: #000000; text-decoration: none;">${email}</a></p>
        ${phone ? `<p style="margin: 0 0 15px 0;"><strong style="color: #000000; display: inline-block; width: 80px;">Phone:</strong> <a href="tel:${phone}" style="color: #000000; text-decoration: none;">${phone}</a></p>` : ''}
        <p style="margin: 0 0 15px 0;"><strong style="color: #000000; display: inline-block; width: 80px;">Service:</strong> ${service}</p>
        <p style="margin: 0;"><strong style="color: #000000; display: inline-block; width: 80px;">Message:</strong></p>
        <div style="margin-top: 10px; padding: 15px; background-color: white; border-radius: 4px; border-left: 3px solid #000000;">
          ${message}
        </div>
      </div>
      
      <div style="text-align: center; margin-top: 30px;">
        <a href="mailto:${email}" style="display: inline-block; background-color: #000000; color: white; padding: 10px 20px; text-decoration: none; border-radius: 4px; font-weight: 500;">Reply to ${name.split(' ')[0]}</a>
      </div>
    </div>
    <div style="background-color: #f5f5f5; padding: 15px; text-align: center; font-size: 12px; color: #666;">
      <p style="margin: 0;">This message was sent from your portfolio contact form.</p>
    </div>
  </div>
`;

// Auto-reply template
const emailHtmlToUser = ({ name }) => `
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thank you for your message</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
    <div style="max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
        <div style="background-color: #000000; padding: 20px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px; line-height: 1.4;">Thank You for Reaching Out!</h1>
        </div>

        <div>
          <img src="${process.env.NEXT_PUBLIC_SITE_URL}/images/touser.png" alt="Thank You" style="width: 100%; height: auto; display: block; max-width: 600px;">
        </div>
        
        <div style="padding: 30px; background-color: #ffffff;">
            <p style="font-size: 16px; color: #333333; margin: 0 0 15px 0;">Hi ${name},</p>
            <p style="font-size: 16px; color: #333333; margin: 0 0 15px 0;">Thank you for contacting me through my portfolio website. I appreciate your interest in collaborating to bring your vision to reality.</p>
            <p style="font-size: 16px; color: #333333; margin: 0 0 15px 0;">Your message has been received and will be reviewed carefully, with a response provided within 24-48 hours. For immediate assistance, feel free to contact me directly through these links:</p>
            <ul style="list-style: none; padding: 0; margin: 0 0 25px 0;">
              <li style="margin-bottom: 10px;">
                <a href="https://m.me/jazznelle.vince" style="color: #333333;">Facebook Messenger</a>
              </li>
              
              <li style="margin-bottom: 10px;">
                <a href="https://wa.link/qzi4qo" style="color: #333333;">WhatsApp</a>
              </li>
              
              <li style="margin-bottom: 10px;">
                <a href="https://t.me/jzznllvnc" style="color: #333333;">Telegram</a>
              </li>

            <div style="margin: 30px 0; text-align: center;">
                <div style="display: inline-block; padding: 15px 25px; background-color: #f8f8f8; border-radius: 6px; border-left: 4px solid #000000;">
                    <p style="margin: 0; font-weight: 500; color: #333333;">Looking forward to connecting with you!</p>
                </div>
            </div>

            <p style="font-size: 16px; color: #333333; margin: 0 0 5px 0;">Warm regards,</p>
            <p style="font-size: 16px; color: #333333; margin: 0; font-weight: 500;">Jazz</p>
        </div>
    </div>
</body>
</html>
`;

export async function POST(request) {
  try {
    const { name, email, phone, message, service } = await request.json();

    // Create a transporter object using the Gmail SMTP transport
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_EMAIL,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // 1. Send the notification email to yourself
    const mailOptionsToOwner = {
      from: `"Portfolio Contact" <${process.env.GMAIL_EMAIL}>`,
      to: process.env.GMAIL_EMAIL, // Send to your own email
      subject: `New Message from ${name}`,
      html: emailHtmlToOwner({ name, email, phone, message, service }),
    };

    // 2. Send the auto-reply confirmation email to the user
    const mailOptionsToUser = {
      from: `"Jazz" <${process.env.GMAIL_EMAIL}>`,
      to: email,
      subject: `Thank you for your message, ${name}!`,
      html: emailHtmlToUser({ name }),
    };

    // Send both emails
    await transporter.sendMail(mailOptionsToOwner);
    await transporter.sendMail(mailOptionsToUser);

    return Response.json({ message: 'Emails sent successfully!' });
  } catch (error) {
    console.error(error);
    return Response.json({ error: 'An error occurred while sending the email.' }, { status: 500 });
  }
}