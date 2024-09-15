<template>
    <div id="titrepagecontact">
      <!-- Section du titre de la page Contact -->
      <h1>Contact</h1>
    </div>
    
    <div>
      <!-- Formulaire avec action personnalisée pour l'envoi des emails -->
      <form @submit.prevent="envoyerEmail"> <!-- Empêche le comportement par défaut (rechargement de la page) lors de la soumission du formulaire -->
        
        <!-- Champ pour le nom -->
        <div>
          <label for="nom">Nom:</label>
          <input v-model="nom" type="text" id="nom" required /> <!-- Utilisation de v-model pour lier le champ de saisie à la donnée "nom" -->
        </div>
  
        <!-- Champ pour le prénom -->
        <div>
          <label for="prenom">Prénom:</label>
          <input v-model="prenom" type="text" id="prenom" required /> <!-- Utilisation de v-model pour lier le champ de saisie à la donnée "prenom" -->
        </div>
  
        <!-- Champ pour l'objet du message -->
        <div>
          <label for="objet">Objet:</label>
          <input v-model="objet" type="text" id="objet" required /> <!-- Utilisation de v-model pour lier le champ de saisie à la donnée "objet" -->
        </div>
  
        <!-- Champ pour le message -->
        <div>
          <label for="message">Message:</label>
          <textarea v-model="message" id="message" required></textarea> <!-- Utilisation de v-model pour lier la zone de texte au message -->
        </div>
  
        <!-- Bouton de soumission du formulaire -->
        <button type="submit">Envoyer</button> <!-- Appelle la méthode envoyerEmail() lorsque le formulaire est soumis -->
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        // Variables réactives pour stocker les informations du formulaire
        nom: '',
        prenom: '',
        objet: '',
        message: ''
      };
    },
    methods: {
      // Méthode asynchrone pour envoyer un email
      async envoyerEmail() {
        const formData = {
          // Création d'un objet contenant les données du formulaire
          nom: this.nom,
          prenom: this.prenom,
          objet: this.objet,
          message: this.message,
          destinataire: process.env.VUE_APP_EMAIL_DESTINATAIRE // Récupère l'email du destinataire depuis une variable d'environnement
        };
  
        try {
          // Envoie de l'email à l'API via une requête POST
          const response = await fetch('/send-email', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json' // Envoie des données sous forme de JSON
            },
            body: JSON.stringify(formData) // Conversion de formData en JSON pour l'envoyer au serveur
          });
  
          // Vérifie si la réponse de l'API est correcte
          if (!response.ok) {
            throw new Error('Erreur lors de l\'envoi de l\'email.'); // Gère les erreurs si l'API retourne un statut d'échec
          }
  
          alert('Email envoyé avec succès !'); // Affiche un message de succès
        } catch (error) {
          alert('Erreur lors de l\'envoi de l\'email : ' + error.message); // Gère les erreurs en affichant un message à l'utilisateur
        }
      }
    }
  };
  </script>
  