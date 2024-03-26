# PROMEET

## installation du backend 
Installer python : https://www.python.org/downloads/

Ouvrir dans un terminal le projet promeet et ce rendre dans le ficher backend puis lancer l'installation des librairies python :

pip install -r "requirement.txt"

## installtion de la base de donnée

installer wampserver : https://www.wampserver.com/en/download-wampserver-64bits/#download-wrapper
Faire l'installation on sans oublier de coché MYSQL.

Une fois installer ouvrir wampserveur : sur http://localhost on retrouve l'interface de gestion de wampserveur
Ouvrir http://localhost/phpmyadmin identifant root et pas de mot de passe

Créer une base de donnée nommé "promeet" .

## Installation du frontend

Installer node js : https://nodejs.org/en/download/current

depuis le fichier frontend saisir la commande : npm install

Pour lancer le site web : npm run dev 
Dans le navigateur, le site web s'ouvre sur : http://localhost:5173/