import nodemailer from 'nodemailer';

// Black and white email template for the site owner
const emailHtmlToOwner = ({ name, email, phone, message }) => `
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
            <p style="font-size: 16px; color: #333333; margin: 0 0 15px 0;">Your message has been received and will be reviewed carefully, with a response provided within 24-48 hours. For immediate assistance, feel free to contact me directly through:</p>
            <ul style="list-style: none; padding: 0; margin: 0 0 25px 0;">
              <li style="margin-bottom: 10px;">
                <a href="https://m.me/jazznelle.vince" style="color: #333333;">
                  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="#006AFF" style="vertical-align: middle; margin-right: 5px;">
                    <path d="M12 0C5.365 0 0 5.373 0 12c0 6.016 4.432 10.984 10.206 11.852V15.18H7.237v-3.154h2.969V9.927c0-3.475 1.693-5 4.581-5 1.383 0 2.115.103 2.461.149v2.753h-1.97c-1.226 0-1.654 1.163-1.654 2.473v1.724h3.593l-.487 3.154h-3.106v8.697C19.481 23.083 24 18.075 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                  Facebook Messenger
                </a>
              </li>
              
              <li style="margin-bottom: 10px;">
                <a href="https://wa.link/qzi4qo" style="color: #333333;">
                  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="#25D366" style="vertical-align: middle; margin-right: 5px;">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp
                </a>
              </li>
              
              <li style="margin-bottom: 10px;">
                <a href="https://t.me/jzznllvnc" style="color: #333333;">
                  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="#0088CC" style="vertical-align: middle; margin-right: 5px;">
                    <path d="M12 0C5.374 0 0 5.372 0 12c0 6.627 5.374 12 12 12 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
                  </svg>
                  Telegram
                </a>
              </li>
              <br>
            <p style="font-size: 16px; color: #333333; margin: 0 0 5px 0;">Looking forward to connecting with you!</p>
            <br>
            <p style="font-size: 16px; color: #333333; margin: 0 0 5px 0;">Warm regards,</p>
            <p style="font-size: 16px; color: #333333; margin: 0; font-weight: 500;">Jazz</p>
        </div>
    </div>
</body>
</html>
`;

export async function POST(request) {
  try {
    const { name, email, phone, message } = await request.json();

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
      html: emailHtmlToOwner({ name, email, phone, message }),
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