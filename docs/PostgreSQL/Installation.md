#### 1. Install common libraries to handle repositories.
```bash
sudo apt install -y postgresql-common
```
#### 2. Add the official PostgreSQL repository.
(This ensures you get the latest version, not the older one in Ubuntu's default repo.)
```bash
sudo /usr/share/postgresql-common/pgdg/apt.postgresql.org.sh
```
#### 3. Install the PostgreSQL server and verify service.
```bash
sudo apt install -y postgresql

[ralf@DESKTOP-0C6CU08 ~ CPU: 0%]$ systemctl status postgresql.service
● postgresql.service - PostgreSQL RDBMS
     Loaded: loaded (/usr/lib/systemd/system/postgresql.service; enabled; preset: enabled)
     Active: active (exited) since Mon 2026-01-05 10:46:12 CET; 3h 0min ago
   Main PID: 1109 (code=exited, status=0/SUCCESS)
        CPU: 3ms

Jan 05 10:46:12 DESKTOP-0C6CU08 systemd[1]: Starting postgresql.service - PostgreSQL RDBMS...
Jan 05 10:46:12 DESKTOP-0C6CU08 systemd[1]: Finished postgresql.service - PostgreSQL RDBMS.
```
#### 4. Create the User.
We use 'sudo -u postgres' to run the command AS the postgres administrator,
but we execute it from YOUR shell so '$(whoami)' captures YOUR username (e.g., johannes).
```bash
sudo -u postgres psql -c "CREATE USER \"$(whoami)\" WITH SUPERUSER;"
```
#### 5. Create the Database.
Now that your user exists, you can use the 'createdb' utility directly.
```bash
createdb $(whoami)
```
#### 6. Test the connection.
This should now log you straight into the database without errors.
```bash
psql
````