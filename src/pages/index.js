import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import './index.css'; // <-- import hinzufügen

export default function Home() {
  const webdev = useBaseUrl('/img/webdev.jpg');
  return (
    <div className="home-container">
      <h1>WebDev Notes from DCI Training</h1>
      <div className="topics">

        <div>
          <p>Choose one of the Topics:</p>
          <ul>
            <li><Link to="/docs/AI">AI</Link></li>
            <li><Link to="/docs/Browser">Browser</Link></li>
            <li><Link to="/docs/Coding">Coding</Link></li>
            <li><Link to="/docs/Web-Server">Web-Server</Link></li>
            <li><Link to="/docs/Tools-Linux">Tools-Linux</Link></li>
            <li><Link to="/docs/DCI-Abschlussprojekt">DCI Abschlussprojekt</Link></li>
            <li><Link to="/docs/Englisch-Training">Englisch Training</Link></li>
            <li><Link to="/docs/AIA-Club">AIA Club</Link></li>
            <li><Link to="/docs/n8n-Automatisierung">n8n-Automatisierung</Link></li>
            <li><Link to="/docs/PostgreSQL">PostgreSQL</Link></li>
            <li><Link to="/docs/Karriere">Karriere</Link></li>
            <li><Link to="/docs/Git">Git</Link></li>
            <li><Link to="/docs/PostgreSQL">Databases</Link></li>              
            
          </ul>
        </div>

        <div>
          <img className="hero-image" src={webdev} alt="webdev" />
        </div>

      </div>

    </div>
  );
}
