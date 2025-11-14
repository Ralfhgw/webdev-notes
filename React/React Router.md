##### React Router-Installation 
```
npx create-vite@latest --> Choose React/Typescript
npm install react-router-dom
```
##### File Structure
```
src/
│
├─ components/
│   └─ Navbar.jsx
│
├─ pages/
│   ├─ Home.jsx
│   └─ About.jsx
│
├─ App.jsx
├─ main.jsx   ✅ (von dir gegeben)
└─ index.css
```
##### src/main.jsx
```
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```
##### src/App.jsx
```
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```
##### src/components/Navbar.jsx
```
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav style={{ display: "flex", gap: "10px", padding: "10px", borderBottom: "1px solid #ccc" }}>
      <NavLink to="/"end className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
      Home
      </NavLink>
      <NavLink to="/products" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
      Products
      </NavLink>
      <NavLink to="/contact" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
      Contact
      </NavLink>
    </nav>
  );
}
```
#### src/components/Navbar.css
```
.nav {
  display: flex;
  gap: 1rem;
  padding: 0.5rem;
}
.nav-link {
  color: #333;
  text-decoration: none;
}
.nav-link.active {
  color: #007bff;
  font-weight: 600;
  border-bottom: 2px solid #007bff;
}
```
##### src/pages/Home.jsx
```
export default function Home() {
  return (
    <div>
      <h1>Willkommen auf der Startseite!</h1>
    </div>
  );
}
```
##### src/pages/Products.jsx
```
export default function Products() {
  return (
    <div>
      <h1>Products</h1>
    </div>
  );
}
```
##### src/pages/Contact.jsx
```
export default function Contact() {
  return (
    <div>
      <h1>Contact</h1>
    </div>
  );
}
```
##### src/index.css
```
body {
  font-family: sans-serif;
  margin: 0;
  padding: 0;
}
nav a {
  text-decoration: none;
}
nav a:hover {
  text-decoration: underline;
}
```
