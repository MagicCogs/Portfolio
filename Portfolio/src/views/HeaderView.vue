<template>
    <header>

        <!-- Lien vers le haut de la page (ancre "#top"), permettant de remonter au sommet en cliquant -->
        <a href="#top">
            <!-- Image du logo affichée, servant de logo pour le portfolio -->
            <img id="logo" alt="Logo" class="logo" src="@/assets/img/portfolio.png" width="100" height="100" />
        </a>

        <!-- Titre principal du site affiché à côté du logo, représentant le nom du portfolio -->
        <h1 id="h1.h">Portfolio</h1> 
        <br/>
        
        <!-- Barre de navigation, permettant à l'utilisateur de naviguer vers différentes sections du site -->
        <nav>
            <ul>
                <!-- Lien de navigation vers la page d'accueil via le composant Vue Router -->
                <li><router-link to="/">Accueil</router-link></li>
                
                <!-- Lien de navigation vers la page "Mes créations" via Vue Router -->
                <li><router-link to="/créations">Mes créations</router-link></li>
                
                <!-- Lien de navigation vers la page de contact via Vue Router -->
                <li><router-link to="/contact">Contact</router-link></li>
            </ul>
        </nav>
    </header>
</template>
