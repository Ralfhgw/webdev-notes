Erdbeben mit einer Stärke größer als 4,0
```
SELECT * FROM earthquake WHERE mag > 4.0;
```
2. Erdbeben mit einer Stärke größer als 4,0 und einer Tiefe weniger als 50
```
SELECT * FROM earthquake WHERE mag > 4.0 AND depth < 50;
```
3. Erdbeben oberhalb des 40. Breitengrades
```
SELECT * FROM earthquake WHERE latitude > 40;
```
4. Erdbeben, die noch nicht überprüft wurden
```
SELECT * FROM earthquake WHERE status != 'reviewed';
```