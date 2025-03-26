"use server";

import { JSX } from "react";
import { Resend } from "resend";

type SendEmailProps = {
  to: string;
  subject: string;
  react: JSX.Element;
};

export async function sendEmail({ to, subject, react }: SendEmailProps) {
  const resend = new Resend(process.env.RESEND_API_KEY || "");

  try {
    const data = await resend.emails.send({
      from: "ContentAura <onboarding@resend.dev>",
      to,
      subject,
      react,
    });

    return { success: true, data };
  } catch (error) {
    console.error("Failed to send email:", error);
    return { success: false, error };
  }
}
