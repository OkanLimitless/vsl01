import Head from 'next/head';
import { useState, useEffect } from 'react';

export default function PreLander() {
  const handleContinue = () => {
    window.location.href = '/lander';  // Redirect to our main lander
  };

  return (
    <>
      <Head>
        <title>Natural Health Guide | Men's Wellness Information</title>
        <meta name="description" content="Discover natural approaches to men's health and wellness. Learn about traditional remedies and scientifically-backed natural solutions." />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
      </Head>

      <div className="prelander">
        <header className="header">
          <div className="logo">Natural Health Guide</div>
          <nav>
            <button onClick={handleContinue}>Learn More</button>
          </nav>
        </header>

        <main className="main-content">
          <section className="hero">
            <h1>Traditional Brazilian Botanicals: A Natural Approach to Men's Health</h1>
            <p className="subtitle">Discover how natural compounds from the Amazon rainforest are revolutionizing men's wellness</p>
            <button onClick={handleContinue} className="cta-button">
              Read the Full Article
            </button>
          </section>

          <section className="benefits">
            <div className="benefit-item">
              <div className="icon">🌿</div>
              <h3>Natural Ingredients</h3>
              <p>Sourced from pristine Amazon rainforest</p>
            </div>
            <div className="benefit-item">
              <div className="icon">🧪</div>
              <h3>Science-Backed</h3>
              <p>Research-supported natural compounds</p>
            </div>
            <div className="benefit-item">
              <div className="icon">⭐️</div>
              <h3>Traditional Wisdom</h3>
              <p>Centuries-old botanical knowledge</p>
            </div>
          </section>

          <section className="article-preview">
            <div className="preview-content">
              <h2>What You'll Discover:</h2>
              <ul>
                <li>How these natural compounds support men's health</li>
                <li>Why traditional remedies are gaining scientific attention</li>
                <li>The role of Amazon rainforest botanicals in modern wellness</li>
                <li>Natural alternatives to synthetic solutions</li>
              </ul>
              <div className="blur-overlay"></div>
            </div>
            <button onClick={handleContinue} className="read-more">
              Continue Reading
            </button>
          </section>
        </main>

        <footer className="footer">
          <p>© 2024 Natural Health Guide - Educational Content Only</p>
        </footer>
      </div>

      <style jsx>{`
        .prelander {
          font-family: 'Inter', sans-serif;
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
          color: #333;
        }

        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 0;
        }

        .logo {
          font-size: 24px;
          font-weight: 600;
          color: #2c5282;
        }

        .main-content {
          margin-top: 40px;
        }

        .hero {
          text-align: center;
          padding: 60px 20px;
          background: linear-gradient(to right, #f0f9ff, #e6f7ff);
          border-radius: 15px;
        }

        .hero h1 {
          font-size: 2.5rem;
          color: #2c5282;
          margin-bottom: 20px;
          line-height: 1.2;
        }

        .subtitle {
          font-size: 1.2rem;
          color: #4a5568;
          margin-bottom: 30px;
        }

        .cta-button {
          background: #2c5282;
          color: white;
          border: none;
          padding: 15px 30px;
          border-radius: 30px;
          font-size: 1.1rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .cta-button:hover {
          background: #2d3748;
          transform: translateY(-2px);
        }

        .benefits {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          margin: 60px 0;
        }

        .benefit-item {
          text-align: center;
          padding: 30px;
          background: white;
          border-radius: 10px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        .icon {
          font-size: 2rem;
          margin-bottom: 15px;
        }

        .benefit-item h3 {
          color: #2c5282;
          margin-bottom: 10px;
        }

        .article-preview {
          background: white;
          border-radius: 10px;
          padding: 30px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          position: relative;
        }

        .preview-content {
          position: relative;
          max-height: 300px;
          overflow: hidden;
        }

        .blur-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 100px;
          background: linear-gradient(transparent, white);
        }

        .article-preview h2 {
          color: #2c5282;
          margin-bottom: 20px;
        }

        .article-preview ul {
          padding-left: 20px;
          line-height: 1.6;
        }

        .article-preview li {
          margin-bottom: 15px;
          color: #4a5568;
        }

        .read-more {
          display: block;
          width: 100%;
          background: #2c5282;
          color: white;
          border: none;
          padding: 15px;
          border-radius: 8px;
          margin-top: 20px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .read-more:hover {
          background: #2d3748;
        }

        .footer {
          text-align: center;
          padding: 40px 0;
          color: #718096;
        }

        @media (max-width: 768px) {
          .hero h1 {
            font-size: 2rem;
          }

          .benefits {
            grid-template-columns: 1fr;
          }

          .preview-content {
            max-height: 250px;
          }
        }
      `}</style>
    </>
  );
} 