<?php
// index.php — Contrôleur de la page d'accueil du Blog

// 1. Charger le module de fonctions
require_once 'T13_fonctions.php';

// 2. Préparer les données pour la vue
$articles = get_derniers_articles();
$categories = get_categorie();

// 3. Charger le template d'affichage
require 'index-template.php';