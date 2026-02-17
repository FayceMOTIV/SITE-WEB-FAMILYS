#!/bin/bash
set -e

# ─── Charger les variables FTP ───────────────────────────────────────
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
ENV_FILE="$SCRIPT_DIR/.env.deploy"

if [ ! -f "$ENV_FILE" ]; then
  echo "❌ Fichier .env.deploy introuvable à la racine du projet."
  echo "   Crée-le avec FTP_HOST, FTP_USER, FTP_PASS, FTP_PATH."
  exit 1
fi

source "$ENV_FILE"

# Vérifier que les variables sont définies
for var in FTP_HOST FTP_USER FTP_PASS FTP_PATH; do
  if [ -z "${!var}" ]; then
    echo "❌ Variable $var manquante dans .env.deploy"
    exit 1
  fi
done

# Vérifier que lftp est installé
if ! command -v lftp &> /dev/null; then
  echo "❌ lftp n'est pas installé. Lance : brew install lftp"
  exit 1
fi

# ─── Build ────────────────────────────────────────────────────────────
echo ""
echo "🔨 Build en cours..."
cd "$SCRIPT_DIR"
npm run build

if [ ! -d "$SCRIPT_DIR/out" ]; then
  echo "❌ Le dossier out/ n'a pas été généré. Vérifie la config Next.js."
  exit 1
fi

echo "✅ Build terminé."

# ─── Upload FTP ───────────────────────────────────────────────────────
echo ""
echo "📤 Upload vers Hostinger ($FTP_HOST)..."

lftp -u "$FTP_USER","$FTP_PASS" "$FTP_HOST" <<EOF
set ssl:verify-certificate no
set net:timeout 30
set net:max-retries 3
mirror -R --delete --verbose "$SCRIPT_DIR/out/" "$FTP_PATH/"
bye
EOF

echo "✅ Fichiers uploadés sur $FTP_HOST."

# ─── Git push ─────────────────────────────────────────────────────────
echo ""
echo "📦 Push vers GitHub..."

cd "$SCRIPT_DIR"

# Vérifier s'il y a des changements à committer
if git diff --quiet && git diff --cached --quiet && [ -z "$(git ls-files --others --exclude-standard)" ]; then
  echo "ℹ️  Aucun changement à committer."
else
  git add .
  git commit -m "deploy: $(date '+%Y-%m-%d %H:%M')"
  git push origin main
  echo "✅ Code poussé sur GitHub."
fi

# ─── Fin ──────────────────────────────────────────────────────────────
echo ""
echo "🎉 Déployé sur https://lefamilysbourg.com et GitHub synchronisé !"
echo ""
