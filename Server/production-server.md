#### Add new User
```
root@v124:~# adduser user
info: Adding user `user' ...
info: Selecting UID/GID from range 1000 to 59999 ...
info: Adding new group `user' (1000) ...
info: Adding new user `user' (1000) with group `user (1000)' ...
info: Creating home directory `/home/user' ...
info: Copying files from `/etc/skel' ...
New password:
Retype new password:
passwd: password updated successfully
Changing the user information for user
Enter the new value, or press ENTER for the default
        Full Name []:
        Room Number []:
        Work Phone []:
        Home Phone []:
        Other []:
Is the information correct? [Y/n] y
info: Adding new user `user' to supplemental / extra groups `users' ...
info: Adding user `user' to group `users' ...

user@v124:~$ su -
Password:

root@v124:~# usermod -aG sudo user

root@v124:~# exit
logout
```

#### Install node.js
```
user@v124:~$ curl -fsSL https://deb.nodesource.com/setup_current.x | sudo -E bash -
sudo apt install -y nodejs
root@v124:~# node -v
root@v124:~# npm -v
```
#### Install bun
```
root@v124:~# sudo apt install unzip
root@v124:~# curl -fsSL https://bun.sh/install | bash
root@v124:~# export PATH="$HOME/.bun/bin:$PATH"
```
#### SSH Configuration for git access
```
root@v124:~# mkdir haussanierung
root@v124:~# mkdir -p ~/.ssh
root@v124:~# chmod 700 ~/.ssh
root@v124:~# cd .ssh
root@v124:~# vi id_ed25519_work
root@v124:~# vi config
# Privater GitHub Account
Host github.com-dci
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_ed25519
    IdentitiesOnly yes
# Arbeits-GitHub Account
Host github.com-work
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_ed25519_work
    IdentitiesOnly yes

root@v124:~# chmod 600 ~/.ssh/id_ed25519_work
root@v124:~# cd ~/haussanierung/
root@v124:~# git clone git@github.com-work:Ralfhgw/haussanierung.git
```
#### Firewall settings
```
root@v124:~# sudo ufw status verbose
root@v124:~# sudo ufw allow OpenSSH
root@v124:~# sudo ufw allow 443/tcp
root@v124:~# sudo ufw allow 'Nginx Full'
root@v124:~# sudo ufw allow 80/tcp
root@v124:~# sudo ufw enable
root@v124:~# sudo ufw status numbered
```
#### Start of Project
```
root@v124:~# cd haussanierung/
root@v124:~# npm install
root@v124:~# nohup npm start &
```
#### Set variables
```
root@v124:~# vi .env
PORT=3000
JWT_SECRET=das_ist_mein_passwort
```
#### Installation nginx
```
root@v124:~# sudo apt install nginx -y

root@v124:~# sudo vi /etc/nginx/sites-available/default
sudo nano /etc/nginx/sites-available/default
server {
    listen 80;
    server_name webschere.de;
    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
root@v124:~# sudo nginx -t
root@v124:~# sudo systemctl reload nginx
```
#### Enable HTTPS
```
root@v124:~# sudo apt install certbot python3-certbot-nginx
root@v124:~# sudo certbot --nginx -d webschere.de
```