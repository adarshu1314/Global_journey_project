// backend/mailer.ts
import express, { Request, Response } from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import cors from "cors";
import axios from "axios";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

interface EmailRequestBody {
  fullName: string;
  email: string;
  phone: string;
  destination: string;
  message: string;
  captchaToken: string;
}

app.post("/send-email", async (req: Request<{}, {}, EmailRequestBody>, res: Response) => {
  const { fullName, email, phone, destination, message, captchaToken } = req.body;

  if (!captchaToken) {
    return res.status(400).json({ success: false, message: "Missing CAPTCHA token" });
  }

  try {
    // ✅ Turnstile CAPTCHA Verification
    const verifyResponse = await axios.post(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      new URLSearchParams({
        secret: process.env.TURNSTILE_SECRET_KEY || "",
        response: captchaToken,
      }),
      { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
    );

    if (!verifyResponse.data.success) {
      return res.status(403).json({ success: false, message: "CAPTCHA verification failed" });
    }

    // ✅ Nodemailer Setup
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // ✅ Admin Email (Enquiry)
    console.log("Sending admin email...");
    await transporter.sendMail({
      from: `Global Journey <${process.env.SMTP_USER}>`, // must match SMTP_USER
      to: process.env.RECEIVER_EMAIL,
      replyTo: email, // so admin can reply directly to user
      subject: `New Travel Inquiry from ${fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; font-size: 15px; color: #333;">
          <h2 style="color:#0b74de;">New Inquiry Received</h2>
          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Destination:</strong> ${destination}</p>
          <p><strong>Message:</strong></p>
          <p style="background:#f7f7f7;padding:10px;border-radius:5px;border:1px solid #ddd;">${message}</p>
        </div>
      `,
    });

    // ✅ Acknowledgement Email (User)
    console.log("Sending acknowledgement email...");
    await transporter.sendMail({
      from: `Global Journey <${process.env.SMTP_USER}>`, // must match SMTP_USER
      to: email,
      subject: "We’ve received your inquiry",
      html: `
        <div style="font-family: Arial, sans-serif; font-size: 15px; color: #333;">
          <h2 style="color:#0b74de;">Thank you for contacting us</h2>
          <p>Hi ${fullName},</p>
          <p>We have received your inquiry about <strong>${destination}</strong>. Our team will get back to you soon.</p>
          <p><strong>Your submitted details:</strong></p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Message:</strong></p>
          <p style="background:#f7f7f7;padding:10px;border-radius:5px;border:1px solid #ddd;">${message}</p>
          <p style="font-size: 13px; color: #777; margin-top: 20px;">
            This is an automated acknowledgement from Global Journey.
          </p>
        </div>
      `,
    });

    res.status(200).json({ success: true, message: "Emails sent successfully" });
  } catch (error) {
    console.error("Email or CAPTCHA error:", error);
    res.status(500).json({ success: false, message: "Failed to send emails" });
  }
});

app.listen(PORT, () => {
  console.log(`📬 Mailer backend running on http://localhost:${PORT}`);
});
