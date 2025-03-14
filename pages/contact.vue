<template>
    <div class="container mx-auto py-12 px-6">
        <h1 class="text-4xl font-bold text-gray-800 mb-8 text-center">Me Contacter</h1>
        <p class="text-center text-gray-600 mb-8">
            Vous souhaitez collaborer ou avez des questions ? N'hésitez pas à m'envoyer un message !
        </p>

        <form @submit.prevent="submitForm" class="max-w-xl mx-auto bg-white shadow-lg rounded-lg p-8">
            <div class="mb-4">
                <label class="block text-gray-700 font-semibold mb-2">Votre Nom</label>
                <input type="text" v-model="form.name"
                    class="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-indigo-500"
                    placeholder="Entrez votre nom">
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 font-semibold mb-2">Votre Email</label>
                <input type="email" v-model="form.email"
                    class="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-indigo-500"
                    placeholder="exemple@domaine.com" required />
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 font-semibold mb-2">Votre Message</label>
                <textarea v-model="form.message"
                    class="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-indigo-500"
                    rows="4" placeholder="Écrivez votre message ici..." required></textarea>
            </div>
            <button type="submit"
                class="bg-indigo-500 hover:bg-indigo-600 text-white py-3 px-6 rounded-md transition-all">
                Envoyer
            </button>
        </form>

        <div class="mt-8 text-center">
            <p class="text-gray-600">Ou retrouvez-moi sur :</p>
            <div class="flex justify-center space-x-4 mt-4">
                <a href="https://github.com/FREIJ-s" class="text-indigo-500 hover:text-indigo-700"
                    target="_blank">GitHub</a>
                <a href="https://www.linkedin.com" class="text-indigo-500 hover:text-indigo-700"
                    target="_blank">LinkedIn</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                name: '',
                email: '',
                message: ''
            }
        };
    },
    methods: {
        submitForm() {
            console.log(this.form);
            alert('Merci pour votre message ! Je vous répondrai rapidement.');
            this.form.name = '';
            this.form.email = '';
            this.form.message = '';
        }
    }
};
</script>

<style scoped></style>