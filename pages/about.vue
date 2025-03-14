<template>
    <div class="container mx-auto py-12 px-6">
        <div class="bg-white rounded-lg shadow-lg p-8 flex flex-col md:flex-row items-center">
            <div class="md:w-1/3 mb-6 md:mb-0 text-center">
                <img src="/images/profile.jpg" alt="Photo de Souhail"
                    class="rounded-full mx-auto w-48 h-48 object-cover shadow-lg">
            </div>
            <div class="md:w-2/3 md:pl-10">
                <h1 class="text-4xl font-bold text-gray-800 mb-4">
                    À propos de moi
                </h1>
                <p class="text-lg text-gray-700 leading-relaxed">
                    Je suis <span class="font-semibold">Souhail Freij</span>, développeur web en formation chez <span
                        class="font-semibold text-indigo-500">EEDN</span>. Passionné par le développement web, je me
                    spécialise actuellement sur Vue.js, Nuxt.js et Tailwind CSS, tout en explorant constamment d'autres
                    technologies comme Node.js, Docker et Symfony. Mon objectif est de devenir un développeur Full-Stack
                    polyvalent capable de mener à bien des projets complexes et innovants.
                    <br /><br />
                    Je suis curieux, autonome, et j'aime résoudre des problèmes techniques. Je me forme quotidiennement
                    pour maîtriser les outils modernes indispensables à la création d'applications performantes et
                    élégantes.
                    <br /><br />
                </p>

                <h2 class="text-2xl font-bold mt-6 mb-4">Compétences Techniques</h2>
                <ul class="list-disc list-inside space-y-2">
                    <li v-for="(competence, index) in competences" :key="index">
                        {{ competence }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            competences: [
                "HTML & CSS",
                "JavaScript (ES6+)",
                "Bootstrap",
                "Tailwind CSS",
                "PHP",
                "Symfony",
                "Nuxt.js",
                "Vue.js",
                "Node.js",
                "Docker",
                "Maîtrise des API REST",
                "Intégration continue et déploiement avec Docker",
                "Gestion de versions avec Git",
                "Bases de données SQL et NoSQL",
                "Conception et développement d'applications web complètes"
            ]
        };
    },
};
</script>