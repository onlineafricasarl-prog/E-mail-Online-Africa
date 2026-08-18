import React from 'react';
import Link from 'next/link';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--bg-color)' }}>
      {/* Sidebar */}
      <aside style={{ width: '250px', borderRight: '1px solid var(--glass-border)', padding: '32px 24px', display: 'flex', flexDirection: 'column', background: 'rgba(255, 255, 255, 0.01)' }}>
        <div style={{ fontSize: '1.4rem', fontWeight: 800, fontFamily: 'Outfit', marginBottom: '48px' }}>
          <span className="text-gradient">E-mail</span> SaaS
        </div>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <Link href="/dashboard" style={{ color: 'var(--text-primary)', opacity: 0.8, fontWeight: 500, display: 'flex', alignItems: 'center', gap: '12px', transition: 'opacity 0.2s' }}>
            📊 Vue d'ensemble
          </Link>
          <Link href="/dashboard/campaigns" style={{ color: 'var(--text-primary)', opacity: 0.8, fontWeight: 500, display: 'flex', alignItems: 'center', gap: '12px', transition: 'opacity 0.2s' }}>
            ✉️ Campagnes
          </Link>
          <Link href="/dashboard/contacts" style={{ color: 'var(--text-primary)', opacity: 0.8, fontWeight: 500, display: 'flex', alignItems: 'center', gap: '12px', transition: 'opacity 0.2s' }}>
            👥 Contacts
          </Link>
        </nav>
        <div style={{ marginTop: 'auto' }}>
          <Link href="/" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
            ⬅ Retour au site
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Header */}
        <header style={{ height: '70px', borderBottom: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', padding: '0 32px', background: 'rgba(255, 255, 255, 0.01)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>Admin Africa</span>
            <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--accent-1), var(--accent-2))', border: '2px solid rgba(255,255,255,0.1)' }}></div>
          </div>
        </header>

        {/* Page Content */}
        <main style={{ padding: '40px', flex: 1, overflowY: 'auto' }}>
          {children}
        </main>
      </div>
    </div>
  );
}
