import React from 'react';

export default function CampaignsPage() {
  return (
    <div className="animate-fade-in">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px', flexWrap: 'wrap', gap: '20px' }}>
        <div>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '8px' }}>Campagnes</h1>
          <p style={{ color: 'var(--text-secondary)' }}>Créez et envoyez de nouveaux emails à votre audience.</p>
        </div>
      </div>

      <div className="glass-panel" style={{ padding: '40px' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '32px' }}>Composer un email</h2>
        
        <form style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <label style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--text-secondary)' }}>Sujet de l'email</label>
            <input type="text" placeholder="Ex: Découvrez nos nouvelles offres" style={{ padding: '16px', borderRadius: '12px', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--glass-border)', color: 'white', fontSize: '1rem', outline: 'none', transition: 'border-color 0.2s' }} />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <label style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--text-secondary)' }}>Audience cible</label>
            <select style={{ padding: '16px', borderRadius: '12px', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--glass-border)', color: 'white', fontSize: '1rem', outline: 'none', appearance: 'none', cursor: 'pointer' }}>
              <option value="all" style={{ background: '#0a0a1a' }}>Tous les abonnés (3,204)</option>
              <option value="active" style={{ background: '#0a0a1a' }}>Abonnés Actifs (1,840)</option>
              <option value="new" style={{ background: '#0a0a1a' }}>Nouveaux ce mois (210)</option>
            </select>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <label style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--text-secondary)' }}>Contenu de l'email</label>
            <textarea placeholder="Rédigez votre message..." rows={12} style={{ padding: '16px', borderRadius: '12px', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--glass-border)', color: 'white', fontSize: '1rem', outline: 'none', resize: 'vertical', fontFamily: 'inherit' }}></textarea>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '16px', marginTop: '24px' }}>
            <button type="button" style={{ padding: '14px 28px', borderRadius: '50px', background: 'transparent', border: '1px solid var(--glass-border)', color: 'white', fontWeight: 600, cursor: 'pointer', transition: 'background 0.2s' }}>Enregistrer brouillon</button>
            <button type="button" className="btn-primary" style={{ padding: '14px 28px' }}>Envoyer la campagne 🚀</button>
          </div>
        </form>
      </div>
    </div>
  );
}
