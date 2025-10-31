##### Auf dem Server
```
curl ifconfig.me
```
##### Auf dem lokalen Rechner oder Server
```
dig webserver.de +short
```
##### Lokaler Rechner
```
curl http://<deine-server-ip>
```
##### Google liefert die falsche IP
```
ubuntu@v124:~$ nslookup webserver.de 8.8.8.8
Server:         8.8.8.8
Address:        8.8.8.8#53

Non-authoritative answer:
Name:   webserver.de
Address: 89.238.73.118
Name:   webserver.de
Address: 2a00:1828:1000:2518::2
```
##### Deshalb wird die IP im Server fixiert
```
/etc/hosts --> 130.255.78.178 webserver.de
```