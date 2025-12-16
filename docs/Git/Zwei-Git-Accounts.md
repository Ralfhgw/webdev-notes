#### Verwenden von zwei Git Accounts
```bash
$ mkdir -p ~/.ssh
$ chmod 700 ~/.ssh
$ ssh-keygen -t ed25519 -C "Ralf_Neumann_hgw@web.de" -f ~/.ssh/id_ed25519_work (ohne Passwort)

ralf@DESKTOP-0C6CU08:~/dci_training/websites/_uebungen/atg/haussanierung$ cat ~/.ssh/config
// Privater GitHub Account
Host github.com-dci
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_ed25519
    IdentitiesOnly yes

// Arbeits-GitHub Account
Host github.com-work
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_ed25519_work
    IdentitiesOnly yes
 
 
$ cat ~/.ssh/id_ed25519_work.pub
$ ssh -T git@github.com-work
$ ssh -T git@github.com-dci

$ git remote -v
origin  git@github.com:Ralfhgw/haussanierung.git (fetch)
origin  git@github.com:Ralfhgw/haussanierung.git (push)
upstream        git@github.com:Ralfhgw/haussanierung.git (fetch)
upstream        git@github.com:Ralfhgw/haussanierung.git (push)

$ git remote remove upstream
$ git remote set-url origin git@github.com-work:Ralfhgw/haussanierung.git
$ git remote -v
$ git push -u origin main
$ ls
$ git pull --rebase origin main
$ git status
$ vi README.md
 
$ git add README.md
$ git rebase --continue

$ git commit -m "First Commit"
$ git rebase --continue
$ git push -u origin main

//Beim Clonen auf die Adresse achten:
$ git clone git@github.com-work:Ralfhgw/haussanierung.git
```