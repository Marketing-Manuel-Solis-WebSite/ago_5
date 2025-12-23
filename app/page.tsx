'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Phone, ShieldCheck, Volume2, VolumeX } from 'lucide-react';

const PHONE_NUMBER = "+1 (346) 522 3259";
const PHONE_LINK = "tel:+13465223259";
const PRIMARY_COLOR = '#B2904D';
const HOME_URL = "https://manuelsolis.com"; 

// URL DE VIDEO ACTUALIZADA (Formato Embed para Bunny.net)
const VIDEO_EMBED_URL = "https://iframe.mediadelivery.net/embed/547379/aad75fd3-b570-452e-97e4-5739b8e2a5ed?autoplay=true&muted=true&loop=true";

export default function LandingPage() {
  const [videoExpanded, setVideoExpanded] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    // REGISTRO DE SALIDA: sept_1
    console.log("Track: Visita registrada desde origen -> sept_1");

    const timer = setTimeout(() => {
      setVideoExpanded(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const toggleAudio = () => {
    // Al ser un iframe, el estado de audio se maneja visualmente aquí. 
    // El video inicia muteado por políticas del navegador.
    setIsMuted(!isMuted);
  };

  const labelStyle: React.CSSProperties = {
    fontSize: '13px', 
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    color: 'rgba(255,255,255,0.7)',
    textAlign: 'center',
    lineHeight: '1.2',
    minHeight: '32px', 
    display: 'flex',
    alignItems: 'flex-end', 
    justifyContent: 'center'
  };

  return (
    <div style={{ 
      position: 'relative',
      width: '100%',
      minHeight: '100vh',
      backgroundColor: '#002342',
      overflowX: 'hidden' 
    }}>
      
      {/* HEADER */}
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: PRIMARY_COLOR,
        boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
      }}>
        <div style={{ 
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '20px 16px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <a href={HOME_URL} style={{ border: 'none', outline: 'none' }}> 
            <img
              src="/logo-manuel-solis.png"
              alt="Logo Manuel Solis"
              style={{
                height: '56px',
                width: 'auto',
                objectFit: 'contain',
                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
              }}
            />
          </a>
        </div>
      </header>

      {/* FONDO DECORATIVO */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
        <div style={{
          position: 'absolute', top: '80px', right: '-10%', width: '300px', height: '300px',
          backgroundColor: PRIMARY_COLOR, borderRadius: '50%', filter: 'blur(100px)', opacity: 0.2
        }}></div>
      </div>

      {/* CONTENIDO PRINCIPAL */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '120px',
        paddingLeft: '16px',
        paddingRight: '16px',
        paddingBottom: '80px', 
        minHeight: '100vh'
      }}>
        
        <h1 style={{
          textAlign: 'center',
          marginTop: '20px',
          marginBottom: '30px',
          maxWidth: '90%',
          background: 'linear-gradient(to bottom, #ffffff 0%, #B2904D 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontSize: '28px',
          fontWeight: '800',
          textTransform: 'uppercase',
          lineHeight: '1.2'
        }}>
          Manuel Solis Abogados de inmigración y accidentes
        </h1>

        {/* CONTENEDOR DE VIDEO (IFRAME) */}
        <div style={{
          width: '100%',
          maxWidth: '1150px',
          marginBottom: '60px',
          opacity: videoExpanded ? 1 : 0,
          transform: videoExpanded ? 'scale(1)' : 'scale(0.95)', 
          transition: 'all 1s ease-out',
        }}>
          <div style={{
            position: 'relative',
            width: '100%',
            paddingBottom: '56.25%',
            borderRadius: '24px',
            overflow: 'hidden',
            backgroundColor: '#000',
            boxShadow: '0 30px 60px rgba(0,0,0,0.8), 0 0 0 2px rgba(178,144,77,0.5)'
          }}>
            <iframe
              src={VIDEO_EMBED_URL}
              loading="lazy"
              style={{
                border: 0,
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%'
              }}
              allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* BOTONES */}
        <div style={{
          width: '100%',
          maxWidth: '850px',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          gap: '30px',
          opacity: videoExpanded ? 1 : 0,
          transform: videoExpanded ? 'translateY(0)' : 'translateY(40px)',
          transition: 'all 1s ease-out 0.5s'
        }}>
          
          {/* BOTÓN LLAMADA */}
          <a href={PHONE_LINK} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textDecoration: 'none', gap: '12px' }}>
            <div style={{
              width: '80px', height: '80px', borderRadius: '50%',
              background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
              boxShadow: '0 10px 30px rgba(16, 185, 129, 0.5)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', transition: '0.3s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <Phone style={{ color: 'white', width: '36px', height: '36px' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
              <span style={labelStyle}>Llámanos</span>
              <span style={{ fontSize: '16px', fontWeight: '900', color: 'white' }}>{PHONE_NUMBER}</span>
            </div>
          </a>

          {/* BOTÓN OPCIONES LEGALES */}
          <button 
            onClick={() => console.log('Clic Opciones Legales - sept_1')}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', background: 'none', border: 'none', cursor: 'pointer' }}
          >
            <div style={{
              width: '80px', height: '80px', borderRadius: '50%',
              border: '3px solid rgba(178, 144, 77, 0.5)',
              backgroundColor: 'rgba(178, 144, 77, 0.25)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', transition: '0.3s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <ShieldCheck style={{ width: '36px', height: '36px', color: '#B2904D' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                <span style={labelStyle}>Opciones<br/>Legales</span>
                <span style={{ fontSize: '16px', color: 'transparent', userSelect: 'none' }}>{PHONE_NUMBER}</span>
            </div>
          </button>

        </div>
      </div>
    </div>
  );
}