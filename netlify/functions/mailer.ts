import type { Handler } from "@netlify/functions";
import nodemailer from "nodemailer";
import axios from "axios";

interface EmailRequestBody {
  fullName: string;
  email: string;
  phone: string;
  destination: string;
  message: string;
  captchaToken: string;
}

export const handler: Handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ success: false, message: "Method Not Allowed" }),
    };
  }

  try {
    const body: EmailRequestBody = JSON.parse(event.body || "{}");
    const { fullName, email, phone, destination, message, captchaToken } = body;

    if (!captchaToken) {
      return {
        statusCode: 400,
        body: JSON.stringify({ success: false, message: "Missing CAPTCHA token" }),
      };
    }

    // ✅ Turnstile CAPTCHA verification
    const verifyResponse = await axios.post(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      new URLSearchParams({
        secret: process.env.TURNSTILE_SECRET_KEY || "",
        response: captchaToken,
      }),
      { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
    );

    if (!verifyResponse.data.success) {
      return {
        statusCode: 403,
        body: JSON.stringify({ success: false, message: "CAPTCHA verification failed" }),
      };
    }

    // ✅ Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // ✅ Admin email
    await transporter.sendMail({
      from: `Global Journey <${process.env.SMTP_USER}>`,
      to: process.env.RECEIVER_EMAIL,
      replyTo: email,
      subject: `New Travel Inquiry from ${fullName}`,
      html: `
        <h2>New Inquiry Received</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Destination:</strong> ${destination}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    // ✅ Acknowledgement email
    await transporter.sendMail({
      from: `Global Journey <${process.env.SMTP_USER}>`,
      to: email,
      subject: "We’ve received your inquiry",
      html: `
        <h2>Thank you for contacting us</h2>
        <p>Hi ${fullName},</p>
        <p>We have received your inquiry about <strong>${destination}</strong>. We’ll get back to you soon.</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, message: "Emails sent successfully" }),
    };
  } catch (error) {
    console.error("Email sending failed:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, message: "Failed to send emails" }),
    };
  }
};
