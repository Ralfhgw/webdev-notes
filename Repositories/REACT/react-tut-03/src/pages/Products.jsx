import { Link, Outlet } from "react-router";


export default function Products() {
  return (
    <div>
      <h1>Auf meiner Produktseite</h1>

      <nav style={{ display: "flex", gap: 12 }}>
        <Link to="product1">Produkt 1</Link>
        <Link to="product2">Produkt 2</Link>
        <Link to="product3">Produkt 3</Link>
      </nav>

      <Outlet />
    </div>
  );
}