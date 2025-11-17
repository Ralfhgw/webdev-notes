import React from 'react';
import Link from '@docusaurus/Link';

export default function Home() {
  return (
    <div style={{ padding: '40px' }}>
      <h1>WebDev Notes form DCI Training</h1>
      <p>Choose one of the Topics:</p>
      <ul>
        <li><Link to="/docs/AI">AI</Link></li>
        <li><Link to="/docs/Browser">Browser</Link></li>
        <li><Link to="/docs/Coding">Coding</Link></li>
        <li><Link to="/docs/React">React</Link></li>
        <li><Link to="/docs/Server">Server</Link></li>
        <li><Link to="/docs/VS%20Code%20Editor">VS Code Editor</Link></li>
        <li><Link to="/docs/DCI-Abschlussprojekt">DCI Abschlussprojekt</Link></li>
        <li><Link to="/docs/Englisch-Training">Englisch Training</Link></li>
      </ul>
    </div>
  );
}
