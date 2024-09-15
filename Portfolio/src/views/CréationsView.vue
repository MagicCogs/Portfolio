<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

// Variable de référence pour savoir quelle modale est activée
const activerModal = ref(null);

// Ouvrir une modale
const ouvrirModal = (modalId) => {
  activerModal.value = modalId;
};

// Fermer la modale
const fermerModal = () => {
  activerModal.value = null;
};

// Fermer la modale si on clique en dehors
const clickEnDehors = (event) => {
  if (event.target.classList.contains('modal')) {
    fermerModal();
  }
};

// Ajouter l'événement au montage du composant
onMounted(() => {
  document.addEventListener('click', clickEnDehors);
});

// Retirer l'événement lors de la destruction du composant
onUnmounted(() => {
  document.removeEventListener('click', clickEnDehors);
});
</script>

<template>
  
  <h1 id="titrepagecréa">Voici mes créations</h1>

  <!-- Création 1 -->
  <div class="création">
    <h2 class="titrecrea">Mon cv</h2>
    <!-- Image de prévisualisation avec clic pour ouvrir la modale -->
    <img class="imgcrea" alt="Cv" src="@/assets/img/devoir1.png" width="130" @click="ouvrirModal('modal1')" />
  </div>

  <!-- Création 2 -->
  <div class="création">
    <h2 class="titrecrea">PDF du cahier des charges d'un site e-commerce</h2>
    <!-- Image de prévisualisation avec clic pour ouvrir la modale -->
    <img class="imgcrea" alt="Socketterie" src="@/assets/img/devoir3.png" width="130" @click="ouvrirModal('modal2')" />
  </div>

  <!-- Création 3 -->
  <div class="création">
    <h2 class="titrecrea">Espace de commentaires dynamisé par du JS</h2>
    <!-- Image de prévisualisation avec clic pour ouvrir la modale -->
    <img class="imgcrea" alt="EspaceCommentaires" src="@/assets/img/devoir2.png" width="130" @click="ouvrirModal('modal3')" />
  </div>

  <!-- Création 4 -->
  <div class="création">
    <h2 class="titrecrea">Maquettes prototypes d'un site e-commerce</h2>
    <!-- Image de prévisualisation avec clic pour ouvrir la modale -->
    <img class="imgcrea" alt="Maquette" src="@/assets/img/devoir4.png" width="130" @click="ouvrirModal('modal4')" />
  </div>

<!-- Première Modale - Mon CV -->
<div v-if="activerModal === 'modal1'" class="modal">
  <div class="modal-content">
    <!-- Bouton de fermeture de la modale, qui appelle la méthode fermerModal() lors du clic -->
    <span class="fermer" @click="fermerModal">&times;</span>
    <h2>Mon CV</h2>
    <img class="imgmodal" alt="Cv" src="@/assets/img/devoir1.png" width="130" />
    <p>Technologies utilisées: HTML, CSS</p>
    <p>Date de création: 19/12/2023</p>
    
    <!-- Lien GitHub pointant vers le dépôt du CV -->
    <p>Lien GitHub: 
      <a href="https://github.com/MagicCogs/cv" target="blank">https://github.com/MagicCogs/cv</a>
    </p>
  </div>
</div>

<!-- Modale 2 - Cahier des charges "La Socketterie" -->
<div v-if="activerModal === 'modal2'" class="modal">
  <div class="modal-content">
    <!-- Bouton de fermeture de la modale -->
    <span class="fermer" @click="fermerModal">&times;</span>
    <h2>PDF du cahier des charges de "La Socketterie"</h2>
    
    <!-- Conteneur pour afficher plusieurs images associées au projet -->
    <div class="image-container">
      <img class="imgmodal" alt="La socketterie" src="@/assets/img/socketterie1.png" width="130" />
      <img class="imgmodal" alt="La socketterie" src="@/assets/img/socketterie2.png" width="130" />
      <img class="imgmodal" alt="La socketterie" src="@/assets/img/socketterie3.png" width="130" />
    </div>
    <p>Technologies utilisées: Figma, Word</p>
    <p>Date de création: 23/02/2024</p>
    
    <!-- Lien vers le fichier PDF stocké sur Google Drive -->
    <p>Lien: 
      <a href="https://drive.google.com/file/d/1LzFOPNCmNX3OPEA6Zj2a1fpjuhFq7tk6/view?usp=drive_link" target="_blank">
        https://drive.google.com/file/d/1LzFOPNCmNX3OPEA6Zj2a1fpjuhFq7tk6/view?usp=drive_link
      </a>
    </p>
  </div>
</div>

<!-- Modale 3 - Dynamisme des commentaires -->
<div v-if="activerModal === 'modal3'" class="modal">
  <div class="modal-content">
    <!-- Bouton de fermeture de la modale -->
    <span class="fermer" @click="fermerModal">&times;</span>
    <h2>Dynamisme d'un espace de commentaires</h2>
    <img class="imgmodal" alt="Dynamisme Espace Commentaires" src="@/assets/img/commentaires.png" width="130" />
    <p>Technologies utilisées: HTML, JavaScript</p>
    <p>Date de création: 19/12/2023</p>
    
    <!-- Lien GitHub pointant vers le dépôt contenant le projet d'espace de commentaires dynamique -->
    <p>Lien GitHub: 
      <a href="https://github.com/MagicCogs/DynamiserUnEspaceDeCommentaires" target="_blank">
        https://github.com/MagicCogs/DynamiserUnEspaceDeCommentaires</a>
    </p>
  </div>
</div>

<!-- Modale 4 - Maquettes prototypes "Probeats" -->
<div v-if="activerModal === 'modal4'" class="modal">
  <div class="modal-content">
    <!-- Bouton de fermeture de la modale -->
    <span class="fermer" @click="fermerModal">&times;</span>
    <h2>Maquettes prototypes "Probeats"</h2>
    
    <!-- Conteneur pour afficher les images des maquettes -->
    <div class="image-container">
      <img class="imgmodal" alt="Maquettes Probeats Desktop" src="@/assets/img/maquettesdesktop.png" width="130" />
      <img class="imgmodal" alt="Maquettes Probeats Mobile" src="@/assets/img/maquettesmobile.png" width="150" />
    </div>
    <p>Technologies utilisées: Figma</p>
    <p>Date de création: 19/12/2023</p>
    
    <!-- Lien GitHub pointant vers le dépôt contenant les maquettes du projet Probeats -->
    <p>Lien GitHub: 
      <a href="https://github.com/MagicCogs/Maquettes-Probeat" target="_blank">
        https://github.com/MagicCogs/Maquettes-Probeat</a>
    </p>
  </div>
</div>
</template>
