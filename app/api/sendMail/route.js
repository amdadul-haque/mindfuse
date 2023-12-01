import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer'

export async function POST(request) {
  try {
    const { fromMail, message } = await request.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      // host: 'smtpro.zoho.in',
      // port: 465,
      // secure: true,
      auth: {
        user: process.env.NODEMAILER_EMAIL,
        pass: process.env.NODEMAILER_PW,
      }
    })

    const mailOption = {
      from: fromMail,
      to: "J.mindfuse@outlook.com",
      // to: "haque1807107@stud.kuet.ac.bd",
      // to: process.env.NODEMAILER_EMAIL,
      subject: "Mailing from Mindfuse",
      html: `
        <h3>Hello Mindfuse</h3>
        <h3>You have a new message from ${fromMail}</h3>
        <p>${message}</p>
        `
    }

    await transporter.sendMail(mailOption)

    return NextResponse.json({ message: "Email Sent Successfully" }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: "Failed to Send Email" }, { status: 500 })
  }
}