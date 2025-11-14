import { Link, Outlet } from "react-router";

export default function Users() {
  return (
    <>
      <h1>Auf meiner Usersseite</h1>

      <nav style={{ display: "flex", gap: 12 }}>
        <Link to="usersaddress">Benutzeradressen</Link>
        <Link to="usersdata">Benutzerdaten</Link>
      </nav>

      <Outlet />
    </>
  );
}