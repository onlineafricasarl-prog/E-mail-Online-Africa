import React from 'react';

export default function DashboardHome() {
  return (
    <div className="animate-fade-in">
      <h1 style={{ fontSize: '2.5rem', marginBottom: '8px' }}>Vue d'ensemble</h1>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '40px' }}>Bienvenue sur votre espace. Voici un résumé de vos performances.</p>

      {/* Stats Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px', marginBottom: '40px' }}>
        <div className="glass-panel" style={{ padding: '24px' }}>
          <h3 style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: '8px', fontWeight: 500 }}>Emails Envoyés</h3>
          <p style={{ fontSize: '2.5rem', fontWeight: 800 }}>12,450</p>
          <span style={{ color: '#10b981', fontSize: '0.9rem', fontWeight: 500 }}>+14% ce mois</span>
        </div>
        
        <div className="glass-panel" style={{ padding: '24px' }}>
          <h3 style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: '8px', fontWeight: 500 }}>Taux d'Ouverture</h3>
          <p style={{ fontSize: '2.5rem', fontWeight: 800 }}>48.2%</p>
          <span style={{ color: '#10b981', fontSize: '0.9rem', fontWeight: 500 }}>+5.2% ce mois</span>
        </div>
        
        <div className="glass-panel" style={{ padding: '24px' }}>
          <h3 style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: '8px', fontWeight: 500 }}>Contacts Actifs</h3>
          <p style={{ fontSize: '2.5rem', fontWeight: 800 }}>3,204</p>
          <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Stable</span>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="glass-panel" style={{ padding: '32px' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '24px' }}>Campagnes Récentes</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {[1, 2, 3].map((i) => (
            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', border: '1px solid var(--glass-border)', transition: 'background 0.2s' }}>
              <div>
                <h4 style={{ fontWeight: 600, marginBottom: '4px' }}>Promo Été Afrique - #{i}</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Envoyée le {10 + i} Août 2026</p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <span style={{ display: 'inline-block', padding: '4px 12px', background: 'rgba(16, 185, 129, 0.1)', color: '#10b981', borderRadius: '50px', fontSize: '0.8rem', fontWeight: 600 }}>Terminée</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
