```
1. Datenbanken anzeigen

show dbs

Zeigt alle Datenbanken auf deinem Server.

2. Zu einer Datenbank wechseln oder eine neue anlegen

use testdb

Wechselt zu „testdb“. Wird sie noch nicht existieren, wird sie automatisch angelegt, wenn du das erste Mal Daten speicherst.

3. Eine Sammlung (Collection) anlegen und ein Dokument einfügen

db.personen.insertOne({ name: "Anna", alter: 28 })

Legt die Collection „personen“ an und fügt ein erstes Dokument ein.

4. Dokumente aus einer Collection anzeigen

db.personen.find()

Zeigt alle Dokumente in der Collection „personen“.

5. Ein weiteres Dokument einfügen

db.personen.insertOne({ name: "Jonas", alter: 33 })

6. Einen einfachen Filter anwenden

db.personen.find({ alter: { $gt: 30 } })

Zeigt alle Personen mit einem Alter über 30.

7. Ein Dokument aktualisieren

db.personen.updateOne(
  { name: "Anna" },
  { $set: { alter: 29 } }
)

Ändert das Alter von Anna auf 29.

8. Ein Dokument löschen

db.personen.deleteOne({ name: "Jonas" })
```