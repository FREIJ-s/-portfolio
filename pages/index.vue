<template>
    <div
        class="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white min-h-screen flex flex-col items-center justify-center px-4">
        <div class="text-center bg-gray-800 bg-opacity-80 rounded-lg p-8 shadow-2xl">
            <img src="/images/profile.jpg" alt="Photo de Souhail"
                class="rounded-full w-36 h-36 mx-auto mb-4 shadow-xl border-4 border-gray-600" />
            <h1 class="text-4xl md:text-6xl font-bold mb-4">
                Bonjour, je suis <span class="text-indigo-400">Souhail Freij</span> 👋
            </h1>
            <p class="text-lg md:text-xl mb-6">
                Développeur Web Full-Stack passionné par la création de solutions innovantes.
            </p>
            <div class="flex flex-wrap justify-center gap-4">
                <router-link to="/about" class="btn-primary">À propos</router-link>
                <router-link to="/projects" class="btn-primary">Projets</router-link>
                <router-link to="/skills" class="btn-primary">Compétences</router-link>
                <router-link to="/contact" class="btn-primary">Contact</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "IndexPage",
};
</script>

<style scoped>
.btn-primary {
    @apply bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-md transition-all shadow-lg;
}
</style>