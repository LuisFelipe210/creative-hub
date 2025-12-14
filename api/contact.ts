import type { VercelRequest, VercelResponse } from '@vercel/node';
import * as nodemailer from 'nodemailer';
import { z } from 'zod';

const contactSchema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    whatsapp: z.string().min(10),
    message: z.string().min(10),
    service: z.string().optional(),
});

export default async function handler(
    req: VercelRequest,
    res: VercelResponse
) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Método não permitido.' });
    }

    try {
        const body = contactSchema.safeParse(req.body);

        if (!body.success) {
            return res.status(400).json({ error: 'Dados inválidos ou faltando.' });
        }

        const { name, email, whatsapp, message, service } = body.data;

        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_SERVER_HOST,
            port: Number(process.env.EMAIL_SERVER_PORT),
            secure: true,
            auth: {
                user: process.env.EMAIL_SERVER_USER,
                pass: process.env.EMAIL_SERVER_PASS,
            },
        });

        const mailOptions = {
            from: `"Portfolio Lead" <${process.env.EMAIL_SERVER_USER}>`,
            to: process.env.EMAIL_TO,
            replyTo: email,
            subject: `🔥 Novo Lead: ${name} - ${service || 'Geral'}`,
            html: `
        <div style="font-family: sans-serif; padding: 20px; border: 2px solid #000; max-width: 600px;">
          <h2 style="color: #000; text-transform: uppercase;">Novo Contato do Site</h2>
          <p><strong>Nome:</strong> ${name}</p>
          <p><strong>E-mail:</strong> ${email}</p>
          <p><strong>WhatsApp:</strong> ${whatsapp}</p>
          <p><strong>Interesse:</strong> ${service || 'Não informado'}</p>
          <hr style="border: 1px solid #ccc; margin: 20px 0;" />
          <h3>Mensagem:</h3>
          <p style="background: #f4f4f4; padding: 15px; border-left: 4px solid #000;">${message}</p>
        </div>
      `,
        };

        await transporter.sendMail(mailOptions);

        return res.status(200).json({ message: 'E-mail enviado com sucesso!' });

    } catch (err) {
        console.error('Erro no Nodemailer:', err);
        return res.status(500).json({ error: 'Erro ao enviar e-mail. Verifique o console.' });
    }
}