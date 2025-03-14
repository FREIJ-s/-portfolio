<template>
  <div>
    <nav class="bg-gray-800 text-white py-4 shadow-md">
      <div class="container mx-auto flex justify-between items-center">
        <router-link to="/" class="text-xl font-bold">Souhail Freij</router-link>
        <div class="flex space-x-6">
          <router-link class="hover:text-indigo-400" to="/">Accueil</router-link>
          <router-link class="hover:text-indigo-400" to="/about">À propos</router-link>
          <router-link class="hover:text-indigo-400" to="/projects">Projets</router-link>
          <router-link class="hover:text-indigo-400" to="/skills">Compétences</router-link>
          <router-link class="hover:text-indigo-400" to="/contact">Contact</router-link>
        </div>
      </div>
    </nav>

    <!-- Contenu de chaque page apparaîtra ici automatiquement -->
    <div class="container mx-auto my-5">
      <router-view />
    </div>

    <footer class="text-center py-4 bg-dark text-black">
      &copy; 2025 Souhail Freij - Tous droits réservés.
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>
