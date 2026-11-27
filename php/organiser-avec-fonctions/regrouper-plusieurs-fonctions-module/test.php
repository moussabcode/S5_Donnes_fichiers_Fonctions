<?php
require_once 'T12_fonctions.php';

$articles = get_derniers_articles();
$categories = get_categorie();

echo "articles trouvés" . count($articles) . "/n";
echo "Catégories trouvées : " . count($categories) . "\n";