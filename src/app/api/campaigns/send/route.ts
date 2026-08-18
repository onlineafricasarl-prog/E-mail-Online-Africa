import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { subject, audience, content } = await request.json();

    if (!subject || !content) {
      return NextResponse.json({ error: 'Sujet et contenu sont requis.' }, { status: 400 });
    }

    // Dans un vrai SaaS, on récupérerait les emails depuis une base de données
    // Pour la démonstration, on envoie à une adresse de test ou on fait semblant
    const testEmails = ['test@example.com']; 

    // Configuration SMTP via les variables d'environnement Vercel
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.ethereal.email',
      port: parseInt(process.env.SMTP_PORT || '587'),
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // S'il n'y a pas de configuration SMTP, on simule l'envoi pour que le tableau de bord fonctionne visuellement
    if (!process.env.SMTP_USER) {
      console.log('Mode Simulation: Email "envoyé" à', audience);
      // Simulation d'attente réseau
      await new Promise(resolve => setTimeout(resolve, 1000));
      return NextResponse.json({ success: true, message: "Mode Simulation: Email envoyé avec succès !", messageId: 'simulated-id' });
    }

    // Envoi réel si SMTP est configuré
    const info = await transporter.sendMail({
      from: '"E-mail Online Africa" <noreply@emailonlineafrica.com>',
      to: testEmails.join(', '),
      subject: subject,
      text: content,
      html: `<div style="font-family: sans-serif; padding: 20px;">${content.replace(/\n/g, '<br>')}</div>`,
    });

    return NextResponse.json({ success: true, messageId: info.messageId });
  } catch (error: any) {
    console.error('Erreur lors de l\'envoi:', error);
    return NextResponse.json({ error: error.message || 'Erreur Interne du Serveur' }, { status: 500 });
  }
}
