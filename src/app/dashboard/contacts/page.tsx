"use client";

import React, { useState, useEffect } from 'react';

type Contact = {
  id: number;
  email: string;
  name: string;
  status: string;
  date: string;
};

export default function ContactsPage() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Modal state
  const [showModal, setShowModal] = useState(false);
  const [newName, setNewName] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const res = await fetch('/api/contacts');
      const data = await res.json();
      setContacts(data);
    } catch (e) {
      console.error("Erreur lors de la récupération des contacts");
    } finally {
      setLoading(false);
    }
  };

  const handleAddContact = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName || !newEmail) return;

    setIsAdding(true);
    try {
      const res = await fetch('/api/contacts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: newName, email: newEmail }),
      });
      const data = await res.json();
      
      if (data.success) {
        setContacts([data.contact, ...contacts]);
        setShowModal(false);
        setNewName('');
        setNewEmail('');
      }
    } catch (e) {
      console.error("Erreur ajout contact");
    } finally {
      setIsAdding(false);
    }
  };

  return (
    <div className="animate-fade-in">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px', flexWrap: 'wrap', gap: '20px' }}>
        <div>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '8px' }}>Contacts</h1>
          <p style={{ color: 'var(--text-secondary)' }}>Gérez votre audience et vos listes de diffusion.</p>
        </div>
        <button className="btn-primary" onClick={() => setShowModal(true)} style={{ padding: '10px 20px', fontSize: '1rem' }}>+ Ajouter Contact</button>
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
            {loading ? (
              <tr><td colSpan={4} style={{ padding: '40px', textAlign: 'center' }}>Chargement...</td></tr>
            ) : contacts.length === 0 ? (
              <tr><td colSpan={4} style={{ padding: '40px', textAlign: 'center' }}>Aucun contact.</td></tr>
            ) : (
              contacts.map((contact) => (
                <tr key={contact.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
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
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Modal Ajout Contact */}
      {showModal && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
          <div className="glass-panel" style={{ width: '100%', maxWidth: '500px', padding: '32px', background: '#0a0a1a' }}>
            <h2 style={{ marginBottom: '24px' }}>Ajouter un Contact</h2>
            <form onSubmit={handleAddContact} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text-secondary)' }}>Nom complet</label>
                <input required value={newName} onChange={e => setNewName(e.target.value)} type="text" style={{ width: '100%', padding: '12px', borderRadius: '8px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', color: 'white' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text-secondary)' }}>Adresse Email</label>
                <input required value={newEmail} onChange={e => setNewEmail(e.target.value)} type="email" style={{ width: '100%', padding: '12px', borderRadius: '8px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', color: 'white' }} />
              </div>
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: '16px' }}>
                <button type="button" onClick={() => setShowModal(false)} style={{ padding: '10px 20px', background: 'transparent', color: 'white', border: '1px solid var(--glass-border)', borderRadius: '50px', cursor: 'pointer' }}>Annuler</button>
                <button type="submit" disabled={isAdding} className="btn-primary" style={{ padding: '10px 20px' }}>
                  {isAdding ? 'Ajout...' : 'Ajouter'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
