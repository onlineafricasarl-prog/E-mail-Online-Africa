import { NextResponse } from 'next/server';

// Simuler une base de données en mémoire pour le développement
let contacts = [
  { id: 1, email: 'jean.dupont@example.ci', name: 'Jean Dupont', status: 'Actif', date: '18 Août 2026' },
  { id: 2, email: 'marie.k@example.sn', name: 'Marie K.', status: 'Actif', date: '17 Août 2026' },
  { id: 3, email: 'contact@entreprise.cm', name: 'Entreprise S.A.', status: 'Désabonné', date: '15 Août 2026' },
  { id: 4, email: 'paul.o@example.cd', name: 'Paul O.', status: 'Actif', date: '10 Août 2026' }
];

export async function GET() {
  return NextResponse.json(contacts);
}

export async function POST(request: Request) {
  try {
    const newContact = await request.json();
    
    if (!newContact.email || !newContact.name) {
      return NextResponse.json({ error: 'Email et Nom sont requis.' }, { status: 400 });
    }

    const contact = {
      id: Date.now(),
      email: newContact.email,
      name: newContact.name,
      status: 'Actif',
      date: new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })
    };

    contacts = [contact, ...contacts];
    
    return NextResponse.json({ success: true, contact });
  } catch (error: any) {
    return NextResponse.json({ error: 'Erreur Serveur' }, { status: 500 });
  }
}
