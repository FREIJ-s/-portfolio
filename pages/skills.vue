<template>
    <div class="container mx-auto py-12 px-6">
        <h1 class="text-4xl font-bold text-gray-800 mb-8 text-center">Mes Compétences </h1>
        <p class="text-center text-gray-600 mb-12">Voici un aperçu des technologies et outils que je maîtrise et utilise
            régulièrement pour construire des projets web performants et modernes :</p>

        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <div v-for="skill in skills" :key="skill.name"
                class="flex flex-col items-center bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition-shadow">
                <img :src="skill.icon" alt="Icône" class="w-20 h-20 mb-4" />
                <h3 class="text-xl font-semibold mb-2">{{ skill.name }}</h3>
                <p class="text-center text-gray-500 text-sm">{{ skill.description }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            skills: [
                { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', description: "Création de structures web solides et accessibles." },
                { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', description: "Stylisation moderne et responsive des interfaces." },
                { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', description: "Développement interactif et dynamique côté client." },
                { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg', description: "Création d'applications web performantes et réactives." },
                { name: 'Nuxt.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg', description: "Framework Vue.js pour des applications universelles et optimisées SEO." },
                { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg', description: "Framework CSS pour le développement rapide d'interfaces responsive." },
                { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg', description: "Développement backend robuste et dynamique." },
                { name: 'Symfony', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/symfony/symfony-original.svg', description: "Framework PHP pour des applications complexes et évolutives." },
                { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', description: "Développement backend performant en JavaScript." },
                { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', description: "Containerisation et déploiement d'applications." },
                { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg', description: "Backend-as-a-service pour des applications web en temps réel." }
            ]
        };
    }
};
</script>

<style scoped>
img {
    transition: transform 0.3s ease;
}

img:hover {
    transform: scale(1.15);
}
</style>