# Deploiement FaceMedia Site vers Hostinger

## Prerequis

- **Node.js** et **npm** installes
- **lftp** installe (`brew install lftp` sur macOS)
- Fichier `.env.deploy` a la racine du projet (voir ci-dessous)

## Configuration

Creer un fichier `.env.deploy` a la racine du projet :

```
FTP_HOST=lefamilysbourg.com
FTP_USER=u819655119
FTP_PASS=TON_MOT_DE_PASSE_FTP
FTP_PATH=/public_html
```

Ce fichier est ignore par git (via `.gitignore`), le mot de passe ne sera jamais commite.

## Deployer

```bash
./deploy.sh
```

Le script fait automatiquement :
1. Charge les identifiants FTP depuis `.env.deploy`
2. Lance `npm run build` (Next.js static export -> dossier `out/`)
3. Upload le contenu de `out/` vers `/public_html/` sur Hostinger via FTP (lftp mirror)
4. Commit et push les changements vers GitHub (`main`)

## Workflow au quotidien

1. Modifier les fichiers du site (composants dans `src/components/`, pages dans `src/app/`)
2. Lancer `./deploy.sh`
3. Le site est mis a jour sur https://lefamilysbourg.com ET le code est pousse sur GitHub

## Structure du build

- **Source** : `src/app/` (pages Next.js) + `src/components/` (composants React)
- **Build output** : `out/` (fichiers HTML/CSS/JS statiques)
- **Destination FTP** : `/public_html/` sur Hostinger

## Depannage

- **lftp non installe** : `brew install lftp`
- **Erreur de permissions brew** : `sudo chown -R $(whoami) /usr/local/share/man/man8`
- **Build echoue** : verifier `npm run build` seul pour voir les erreurs
- **FTP timeout** : verifier les identifiants dans `.env.deploy` et la connectivite reseau
