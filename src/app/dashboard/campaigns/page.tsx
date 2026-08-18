"use client";

import React, { useState } from 'react';

export default function CampaignsPage() {
  const [subject, setSubject] = useState('');
  const [audience, setAudience] = useState('all');
  const [content, setContent] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [message, setMessage] = useState('');

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!subject || !content) {
      setMessage('Veuillez remplir le sujet et le contenu.');
      return;
    }

    setIsSending(true);
    setMessage('');

    try {
      const res = await fetch('/api/campaigns/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ subject, audience, content }),
      });
      const data = await res.json();

      if (res.ok) {
        setMessage('✅ Campagne envoyée avec succès !');
        setSubject('');
        setContent('');
      } else {
        setMessage('❌ Erreur: ' + data.error);
      }
    } catch (error) {
      setMessage('❌ Une erreur est survenue.');
    } finally {
      setIsSending(false);
    }
  };

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
        
        {message && (
          <div style={{ padding: '16px', marginBottom: '24px', borderRadius: '12px', background: message.includes('✅') ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)', color: message.includes('✅') ? '#10b981' : '#ef4444' }}>
            {message}
          </div>
        )}

        <form onSubmit={handleSend} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <label style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--text-secondary)' }}>Sujet de l'email</label>
            <input 
              type="text" 
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Ex: Découvrez nos nouvelles offres" 
              style={{ padding: '16px', borderRadius: '12px', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--glass-border)', color: 'white', fontSize: '1rem', outline: 'none', transition: 'border-color 0.2s' }} 
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <label style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--text-secondary)' }}>Audience cible</label>
            <select 
              value={audience}
              onChange={(e) => setAudience(e.target.value)}
              style={{ padding: '16px', borderRadius: '12px', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--glass-border)', color: 'white', fontSize: '1rem', outline: 'none', appearance: 'none', cursor: 'pointer' }}
            >
              <option value="all" style={{ background: '#0a0a1a' }}>Tous les abonnés (3,204)</option>
              <option value="active" style={{ background: '#0a0a1a' }}>Abonnés Actifs (1,840)</option>
              <option value="new" style={{ background: '#0a0a1a' }}>Nouveaux ce mois (210)</option>
            </select>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <label style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--text-secondary)' }}>Contenu de l'email</label>
            <textarea 
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Rédigez votre message..." 
              rows={12} 
              style={{ padding: '16px', borderRadius: '12px', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--glass-border)', color: 'white', fontSize: '1rem', outline: 'none', resize: 'vertical', fontFamily: 'inherit' }}
            ></textarea>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '16px', marginTop: '24px' }}>
            <button type="button" style={{ padding: '14px 28px', borderRadius: '50px', background: 'transparent', border: '1px solid var(--glass-border)', color: 'white', fontWeight: 600, cursor: 'pointer', transition: 'background 0.2s' }}>Enregistrer brouillon</button>
            <button type="submit" disabled={isSending} className="btn-primary" style={{ padding: '14px 28px', opacity: isSending ? 0.7 : 1 }}>
              {isSending ? 'Envoi en cours...' : 'Envoyer la campagne 🚀'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
