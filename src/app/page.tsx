import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <main style={{ minHeight: '100vh', padding: '40px 0' }}>
      <div className="container">
        
        {/* Navigation */}
        <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '80px', flexWrap: 'wrap', gap: '20px' }} className="animate-fade-in delay-100">
          <div style={{ fontSize: '1.5rem', fontWeight: 800, fontFamily: 'Outfit' }}>
            <span className="text-gradient">E-mail</span> Online Africa
          </div>
          <div>
            <a href="#features" style={{ marginRight: '24px', fontWeight: 500, opacity: 0.8 }}>Fonctionnalités</a>
            <Link href="/dashboard"><button className="btn-primary" style={{ padding: '8px 20px', fontSize: '0.95rem' }}>Connexion</button></Link>
          </div>
        </nav>

        {/* Hero Section */}
        <section style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 100px auto' }} className="animate-fade-in delay-200">
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', marginBottom: '24px', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
            Propulsez vos campagnes <span className="text-gradient">d'emailing</span> en Afrique
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px auto' }}>
            La première plateforme conçue spécifiquement pour maximiser vos taux d'ouverture et d'engagement sur le marché africain. Design premium, analyses avancées et haute délivrabilité.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <button className="btn-primary">Commencer gratuitement</button>
            <button className="glass-panel" style={{ color: 'white', border: '1px solid var(--glass-border)', background: 'transparent', padding: '14px 28px', borderRadius: '50px', fontWeight: 600, cursor: 'pointer' }}>Voir la démo</button>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginBottom: '100px' }} className="animate-fade-in delay-300">
          <div className="glass-panel" style={{ padding: '40px 30px' }}>
            <div style={{ background: 'rgba(79, 70, 229, 0.2)', width: '60px', height: '60px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>Délivrabilité Optimisée</h3>
            <p style={{ color: 'var(--text-secondary)' }}>Notre infrastructure garantit que vos emails atteignent la boîte de réception principale de vos destinataires, peu importe leur fournisseur d'accès local.</p>
          </div>
          
          <div className="glass-panel" style={{ padding: '40px 30px' }}>
            <div style={{ background: 'rgba(236, 72, 153, 0.2)', width: '60px', height: '60px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ec4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>Design Responsif</h3>
            <p style={{ color: 'var(--text-secondary)' }}>Créez de superbes emails qui s'affichent parfaitement sur tous les appareils mobiles, qui représentent la majorité de l'audience en Afrique.</p>
          </div>

          <div className="glass-panel" style={{ padding: '40px 30px' }}>
            <div style={{ background: 'rgba(168, 85, 247, 0.2)', width: '60px', height: '60px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></svg>
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>Analyses Avancées</h3>
            <p style={{ color: 'var(--text-secondary)' }}>Suivez en temps réel les ouvertures, clics et conversions pour optimiser vos prochaines campagnes avec une précision chirurgicale.</p>
          </div>
        </section>

        {/* Footer */}
        <footer style={{ textAlign: 'center', padding: '40px 0', borderTop: '1px solid var(--glass-border)', color: 'var(--text-secondary)' }} className="animate-fade-in delay-400">
          <p>© {new Date().getFullYear()} E-mail Online Africa. Tous droits réservés.</p>
        </footer>

      </div>
    </main>
  );
}
