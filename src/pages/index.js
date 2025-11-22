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
            <li><Link to="/docs/Server">Server</Link></li>
            <li><Link to="/docs/Tools">Tools</Link></li>
            <li><Link to="/docs/DCI-Abschlussprojekt">DCI Abschlussprojekt</Link></li>
            <li><Link to="/docs/Englisch-Training">Englisch Training</Link></li>
          </ul>
        </div>

        <div>
          <img className="hero-image" src={webdev} alt="webdev" />
        </div>

      </div>

    </div>
  );
}
