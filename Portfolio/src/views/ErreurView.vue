<template>
    <!-- Contenu pour la page Erreur 404 -->
    <div class="introuvable">
      <!-- Image de la page d'erreur -->
      <img id="erreur" alt="Erreur" src="@/assets/img/erreur.png" width="115" height="115" />
      
      <!-- Titre et message d'erreur -->
      <h1>Erreur 404 - Page non trouvée</h1>
      <p>La page que vous cherchez n'existe pas. Vous pouvez retourner à l'accueil.</p>
      
      <!-- Lien de redirection vers la page d'accueil -->
      <router-link to="/">Accueil</router-link>
    </div>
  </template>
  
  <script>
  export default {
    metaInfo() {
      return {
        // Définit le titre de la page et les balises meta pour le SEO
        title: 'Erreur 404 - Page non trouvée',
        meta: [
          {
            name: 'description',
            content: 'La page que vous recherchez est introuvable. Revenez à l\'accueil pour explorer mon portfolio.'
          }
        ]
      };
    }
  }
  </script>
  