![Docker Szenario](/img/docker_scenario.jpg)

Docker  - Virtualization software
It virtulize OS Application Layer

- isolated environment
- Start service as a docker container w/o installation
- Command same for all OS (docker run postgres)
- Command same for all services
- Running different versions

Installation in WSL >= v2

C:\Users\Ralf>wsl --version
WSL-Version: 2.5.9.0

### Alte Docker-Reste entfernen (falls vorhanden)
```
$ sudo apt remove docker docker-engine docker.io containerd runc
```
### System vorbereiten
```
$ sudo apt update
$ sudo apt upgrade
$ sudo apt install -y ca-certificates curl gnupg lsb-release
```
### Docker GPG-Key hinzufügen
```
$ sudo install -m 0755 -d /etc/apt/keyrings
$ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
$ sudo chmod a+r /etc/apt/keyrings/docker.gpg
```
### Docker-Repository einbinden
```
$ echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] \
https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```
### Docker installieren
```
$ sudo apt update
$ sudo apt install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```
### Docker in WSL starten
```
$ sudo service docker start
```
### Docker ohne sudo nutzen (empfohlen)
```
$ sudo usermod -aG docker $USER
$ newgrp docker
$ docker run hello-world
```
### Check docker status
```
$ sudo systemctl status docker
```
### Check installed docker packages
```
$ dpkg -l | grep -E 'docker|containerd' | sort
ii  containerd.io                        2.2.1-1~ubuntu.24.04~noble              amd64        An open and reliable container runtime
ii  docker-buildx-plugin                 0.31.1-1~ubuntu.24.04~noble             amd64        Docker Buildx plugin extends build capabilities with BuildKit.
ii  docker-ce                            5:29.2.1-1~ubuntu.24.04~noble           amd64        Docker: the open-source application container engine
ii  docker-ce-cli                        5:29.2.1-1~ubuntu.24.04~noble           amd64        Docker CLI: the open-source application container engine
ii  docker-ce-rootless-extras            5:29.2.1-1~ubuntu.24.04~noble           amd64        Rootless support for Docker.
ii  docker-compose-plugin                5.0.2-1~ubuntu.24.04~noble              amd64        Docker Compose (V2) plugin for the Docker CLI.
```

### Docker Hub
```
https://hub.docker.com/
```
### Run Docker nginx
```
$ docker pull nginx
Using default tag: latest
latest: Pulling from library/nginx
bae5a1799a80: Pull complete
7b6cb8ccac7b: Pull complete
f73400a233fd: Pull complete
47cd406a84ef: Pull complete
0c8d55a45c0d: Pull complete
46bf3a120c8e: Pull complete
4f4efe02d542: Pull complete
2e02dba24409: Download complete
a5d78d617315: Download complete
Digest: sha256:b17697e86d0c02378716277d09f45b946f8709aaa12c708e30fdd4736f536af1
Status: Downloaded newer image for nginx:latest
docker.io/library/nginx:latest

// Update nginx
$ docker pull nginx
Using default tag: latest
latest: Pulling from library/nginx
Digest: sha256:b17697e86d0c02378716277d09f45b946f8709aaa12c708e30fdd4736f536af1
Status: Image is up to date for nginx:latest
docker.io/library/nginx:latest
```
### Start of nginx
```
$ docker run -d -p 80:80 nginx
fdc25a02e034afe4743ef903a2e9f06468fde1620e1ab8ba1bcc0f0936c4ae4d
```
### Verify nginx running Process
```
$ docker ps
CONTAINER ID   IMAGE     COMMAND                  CREATED          STATUS          PORTS                                 NAMES
326354e2c000   nginx     "/docker-entrypoint.…"   14 minutes ago   Up 14 minutes   0.0.0.0:80->80/tcp, [::]:80->80/tcp   crazy_newton
```
### Execute ls or any other command inside docker 
```
$ docker exec -it crazy_newton ls
bin  boot  dev  docker-entrypoint.d  docker-entrypoint.sh  etc  home  lib  lib64  
media  mnt  opt  proc  root  run  sbin  srv  sys  tmp  usr  var

// Open Shell in running docker
$ docker exec -it 75820a0477af5b8006b5977996f72981b945cabed5ae1e0bed4abdea454d2ffe sh
```
### Display all available docker images
```
$ docker images
IMAGE                ID             DISK USAGE   CONTENT SIZE   EXTRA
hello-world:latest   05813aedc15f       25.9kB         9.52kB    U
nginx:latest         b17697e86d0c        240MB         65.8MB    U
```
### Stopping nginx docker or all
```
$ docker stop b17697e86d0c
b17697e86d0c

docker stop $(docker ps -q)
```
### DEBUG: docker
```
$ docker logs 326354e2c000
```
### Copy files to docker
```
$[root@pmaa adtran]#$ docker cp <file> <dockerImage>:/srv/pmas_sftp/in/saps/local_sftp
```
### Firewall for external access
```
sudo apt install ufw
sudo ufw status
sudo ufw allow 80/tcp
sudo ufw enable
```
### Kafka in docker
```
$ docker exec -it kafka vi kafka/config/ssl_listeners.template

ssl.enabled.protocols=TLSv1.2,TLSv1
ssl.cipher.suites=//add customized cipher if needed//
[root@mcp ~]$ docker ps -a | grep kafka | grep adtran-docker-internal
939178c213e3   artifactory.adtran.com:443/adtran-docker-internal/kafka:2.7.0-110                  "/usr/bin/supervisor…"   3 minutes ago   Up 3 minutes              9092/tcp, 0.0.0.0:9093->9093/tcp, :::9093->9093/tcp                                            kafka

$ docker commit kafka artifactory.adtran.com:443/adtran-docker-internal/kafka:2.7.0-110
sha256:a00c9a6150a1c55428214161088779926ac6a266bd65af706edbaa0d4f55c06c

$ node-admin restart -y kafka
2021-11-16 17:46:26     INFO | stopping kafka...
2021-11-16 17:46:30     INFO | stopped kafka...
2021-11-16 17:46:30     INFO | starting kafka...
2021-11-16 17:46:32     INFO | finished starting kafka...

$ openssl s_client -connect 172.25.224.66:9093 -tls1
CONNECTED(00000003)

$ openssl s_client -connect 172.25.224.66:9093 -tls1_2
CONNECTED(00000003)
```
### Dockerfile für express
File: Dockerfile in root folder
```
FROM node:19-alpine

COPY package.json /app/
COPY src /app

RUN npm install

CMD ["node", "server.js"]
```
### Dockerfile für React 
```
# Stage 1 - Build stage
# Use the latest LTS version of Node.js
FROM node:24-alpine AS build
# Set the working directory inside the container
WORKDIR /app
# Copy package*.json ./
COPY package.json package-lock.json* ./
# Install dependencies
RUN npm install 
# Copy the rest of your application files
COPY . ./
# Build the optimized production files
RUN npm run build

# Stage 2 - Development stage
# Uses Nginc to serve static files
FROM node:alpine AS development
# Set the working directory inside the container
WORKDIR /app
# Copy package*.json ./
COPY package.json package-lock.json* ./
# Install dependencies
RUN npm install 
# Copy the full source code
COPY . ./
# Expose port for the development server
EXPOSE 3000
CMD ["npm", "start"]

# Stage 3 - Production stage
FROM nginx:alpine AS production
# Copies the build output from the previous stage
COPY --from=build /app/dist /usr/share/nginx/html
# Exposes port 80
EXPOSE 80
# Runs Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]

## docker build -t my-react-app-dev --target build .
## docker build -t my-react-app-dev --target production .
```
### Build Docker Image
``` 
$ docker build -t node-app:1.0
```
### Run Docker
```
docker run -d -p 3000:3000 node-app:1.0
```
## Example for creating docker image
File Dockerfile in root folder (React)
```
# 1. Build stage
FROM node:24-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm install
COPY . .
RUN npm run build

# 2. Production stage
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```
Dockerfile for bun
```
FROM oven/bun:1.3.9 AS base
WORKDIR /app

# 1. Install dependencies
FROM base AS deps
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile --production

# 2. Production runner
FROM base AS runner

# Set production environment
ENV NODE_ENV=production

# Copy source and dependencies
COPY --from=deps /app/node_modules ./node_modules
# COPY package.json ./
# Do I need this?
COPY src ./src

USER bun

EXPOSE 3000
# What purpose does this serve?

CMD ["bun", "src/server.ts"]
```
### Build Docker Image
```
// Don't forget the "."
$ docker build -t my-react-app .   
```
### Start and Stop container
```
docker run -p 8080:80 my-react-app

$ docker ps
CONTAINER ID   IMAGE          COMMAND                  CREATED              STATUS              PORTS                                     NAMES
2210817a64de   my-react-app   "/docker-entrypoint.…"   About a minute ago   Up About a minute   0.0.0.0:8080->80/tcp, [::]:8080->80/tcp   amazing_torvalds

$ docker stop 2210817a64de
2210817a64de
```
### Deleting Container and Image
```
$ docker rmi  93e2ecdf4834
Error response from daemon: conflict: unable to delete 93e2ecdf4834 (must be forced) - image is being used by stopped container c89d4c1dd791

$ docker rm c89d4c1dd791
c89d4c1dd791

$ docker rmi 93e2ecdf4834
Untagged: my-react-app:latest
Deleted: sha256:93e2ecdf48342d350137aabb614b0cf28e0dece62185a4f983e47f5f923e12df

// Option -f löscht Container und Image
$ docker rmi -f 93e2ecdf4834
```
### Create .tgz file from docker image
```
$ docker save -o nginx.tar nginx:latest
$ docker save -o images.tar image1:tag image2:tag image3:tag
$ docker save mein_image:tag | gzip > mein_image.tar.gz
```
### Get docker image from .tgz file
```
$ docker load -i mein_image.tar
$ gunzip -c mein_image.tar.gz | docker load
```
### Export docker image to dockerHub
```
$ docker build -f Dockerfile.prod -t wordle .
$ docker imagesio
$ docker login
$ docker tag wordle:latest ralfneu/wordle:latest
$ docker push ralfneu/wordle:latest
```
### Compose.yaml
```
version: '3.1'
services:

    mogodb:
        image: mongo
        ports:
            -27017:27017
        environment:
            MONGO_INITDB_ROOT_USERNAME: admin
            MONGO_INITDB_ROOT_PASSWORD: supersecret

    mongo-express:
        image: mongo-express
        ports:
            - 8081:8081
        environment:
            ME_CONFIG_MONGODB_ADMINUSERNAME: admin
            ME_CONFIG_MONGODB_ADMINPASSWORD: supersecret
            ME_CONFIG_MONGODB_SERVER: mongodb
        depends_on:
            - "mongodb"
```

docker compose down -v
docker compose up --build

docker compose up




docker run -d --name my_postgres -e POSTGRES_USER=ralf -e POSTGRES_PASSWORD= -e POSTGRES_DB=game -p 5432:5432 -v pgdata:/var/lib/postgresql/data postgres:16-alpine

docker volume ls

$ docker compose exec db psql -U ralf -d game
$ docker exec -it frontend-db-1  sh
 
$ docker compose logs db

$ docker images
$ docker rmi frontend-app:latest
$ docker rmi -f postgres:16-alpine

$ docker volume ls
$ docker volume rm VOLUME_NAME