### Beispiel für ejs-Handling
server.js
```javascript
import express from "express";
import path from "path";

const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(process.cwd(), "views"));

app.use(express.urlencoded({ extended: true }));

const items = ["Zahncreme", "Zahnbürste", "Mundspülung"];

app.get("/", (req, res) => {
  res.render("index", { items, message: null });
});

app.post("/add", (req, res) => {
  const { name } = req.body;
  if (name) items.push(name);
  res.redirect("/");
});

app.listen(3000, () => console.log("Server läuft auf http://localhost:3000"));
```

views/index.ejs
```html
<!doctype html>
<html>
<head><meta charset="utf-8"><title>EJS Demo</title></head>
<body>
  <h1>Produkte</h1>
  <ul>
    <% items.forEach(item => { %>
      <li><%= item %></li>
    <% }) %>
  </ul>

  <form action="/add" method="post">
    <input name="name" placeholder="Neues Produkt" required />
    <button type="submit">Hinzufügen</button>
  </form>
</body>
</html>
```