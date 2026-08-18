import React from 'react';

export default function ContactsPage() {
  return (
    <div className="animate-fade-in">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px', flexWrap: 'wrap', gap: '20px' }}>
        <div>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '8px' }}>Contacts</h1>
          <p style={{ color: 'var(--text-secondary)' }}>Gérez votre audience et vos listes de diffusion.</p>
        </div>
        <button className="btn-primary" style={{ padding: '10px 20px', fontSize: '1rem' }}>+ Importer Contacts</button>
      </div>

      <div className="glass-panel" style={{ overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid var(--glass-border)', background: 'rgba(255,255,255,0.02)' }}>
              <th style={{ padding: '20px', fontWeight: 600, color: 'var(--text-secondary)' }}>Email</th>
              <th style={{ padding: '20px', fontWeight: 600, color: 'var(--text-secondary)' }}>Nom</th>
              <th style={{ padding: '20px', fontWeight: 600, color: 'var(--text-secondary)' }}>Statut</th>
              <th style={{ padding: '20px', fontWeight: 600, color: 'var(--text-secondary)' }}>Ajouté le</th>
            </tr>
          </thead>
          <tbody>
            {[
              { email: 'jean.dupont@example.ci', name: 'Jean Dupont', status: 'Actif', date: '18 Août 2026' },
              { email: 'marie.k@example.sn', name: 'Marie K.', status: 'Actif', date: '17 Août 2026' },
              { email: 'contact@entreprise.cm', name: 'Entreprise S.A.', status: 'Désabonné', date: '15 Août 2026' },
              { email: 'paul.o@example.cd', name: 'Paul O.', status: 'Actif', date: '10 Août 2026' }
            ].map((contact, index) => (
              <tr key={index} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <td style={{ padding: '20px', fontWeight: 500 }}>{contact.email}</td>
                <td style={{ padding: '20px', color: 'var(--text-secondary)' }}>{contact.name}</td>
                <td style={{ padding: '20px' }}>
                  <span style={{ 
                    padding: '6px 12px', 
                    borderRadius: '50px', 
                    fontSize: '0.85rem', 
                    fontWeight: 600,
                    background: contact.status === 'Actif' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                    color: contact.status === 'Actif' ? '#10b981' : '#ef4444'
                  }}>
                    {contact.status}
                  </span>
                </td>
                <td style={{ padding: '20px', color: 'var(--text-secondary)' }}>{contact.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
