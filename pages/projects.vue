<template>
    <div class="container mx-auto py-12 px-6">
        <h1 class="text-4xl font-bold text-gray-800 mb-8 text-center">Mes Projets </h1>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="project in projects" :key="project.id" class="bg-white shadow-lg rounded-lg p-6">
                <h3 class="text-2xl font-bold mb-2">{{ project.title }}</h3>
                <p class="text-gray-700 mb-4">{{ project.description }}</p>
                <a :href="project.link" class="text-indigo-500 hover:text-indigo-700 font-semibold" target="_blank">
                    Voir le projet →
                </a>
            </div>
        </div>
        <div class="mt-8 text-center">
            <a href="https://github.com/FREIJ-s" target="_blank"
                class="inline-block bg-indigo-500 hover:bg-indigo-600 text-white py-3 px-6 rounded-md">
                Voir mon GitHub
            </a>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            projects: [
                {
                    id: 1,
                    title: 'TimeTroc',
                    description: "Application web permettant l'échange de services entre utilisateurs basée sur un système de crédit-temps.",
                    link: 'https://github.com/FREIJ-s'
                },
                {
                    id: 2,
                    title: 'Tic-Tac-Toe',
                    description: "Jeu classique du morpion réalisé en JavaScript avec une interface interactive.",
                    link: 'https://github.com/FREIJ-s'
                },
                {
                    id: 3,
                    title: 'Dropshipping SLI.F',
                    description: "Site e-commerce optimisé pour le dropshipping avec une interface intuitive et responsive.",
                    link: 'https://github.com/FREIJ-s'
                },
                {
                    id: 4,
                    title: 'AR-Zoo',
                    description: "Application mobile de réalité augmentée permettant de découvrir les animaux en 3D interactifs.",
                    link: 'https://github.com/FREIJ-s'
                },
                {
                    id: 5,
                    title: 'Filmorama',
                    description: "Plateforme web dédiée aux films et séries, permettant aux utilisateurs de découvrir et noter leurs contenus favoris.",
                    link: 'https://github.com/FREIJ-s'
                },
                {
                    id: 6,
                    title: '8-ball-start',
                    description: "Projet ludique basé sur le concept de la boule magique 'Magic 8-ball', implémenté en JavaScript.",
                    link: 'https://github.com/FREIJ-s'
                },
                {
                    id: 7,
                    title: 'Task_FR',
                    description: "Gestionnaire de tâches en français conçu avec Vue.js pour améliorer la productivité personnelle.",
                    link: 'https://github.com/FREIJ-s'
                },
                {
                    id: 8,
                    title: 'Fireball',
                    description: "Application web en temps réel utilisant Firebase pour l'authentification et la gestion des données.",
                    link: 'https://github.com/FREIJ-s'
                }
            ]
        };
    }
};
</script>