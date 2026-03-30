<template>
  <div class="relative z-10 min-h-screen pt-32 pb-24">
    <div class="max-w-5xl mx-auto px-6">

      <!-- ── Section Header ── -->
      <div class="text-center mb-16 reveal">
        <div class="section-badge mb-4">Contact</div>
        <h1 class="text-4xl md:text-6xl font-black tracking-tight leading-tight mb-5">
          <span class="text-text-primary">Travaillons</span>
          <span class="gradient-text block">ensemble</span>
        </h1>
        <p class="text-text-secondary text-lg max-w-xl mx-auto">
          Recruteur, client, collaborateur — chaque message est lu avec attention.
          Réponse garantie sous 24h.
        </p>
      </div>

      <div class="grid md:grid-cols-5 gap-10">

        <!-- ── Left: Info + Socials ── -->
        <div class="md:col-span-2 flex flex-col gap-6">

          <!-- Availability card -->
          <div class="glass-card p-5 reveal">
            <div class="flex items-center gap-2 mb-3">
              <span class="inline-block w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span class="text-text-primary font-semibold text-sm">Disponible</span>
            </div>
            <p class="text-text-secondary text-sm leading-relaxed">
              Ouvert aux opportunités : CDI, alternance, freelance ou collaboration sur projet.
            </p>
          </div>

          <!-- Contact info cards -->
          <div class="reveal flex flex-col gap-3">
            <div
              v-for="info in contactInfo"
              :key="info.label"
              class="glass-card p-4 flex items-center gap-3"
            >
              <div
                class="w-9 h-9 rounded-lg flex items-center justify-center text-base shrink-0"
                style="background: rgba(99,102,241,0.1); border: 1px solid rgba(99,102,241,0.2);"
              >
                {{ info.icon }}
              </div>
              <div>
                <span class="text-text-secondary text-xs uppercase tracking-wider">{{ info.label }}</span>
                <p class="text-text-primary text-sm font-medium">{{ info.value }}</p>
              </div>
            </div>
          </div>

          <!-- Social links -->
          <div class="flex flex-col gap-3 reveal">
            <a
              v-for="social in socials"
              :key="social.label"
              :href="social.href"
              target="_blank"
              rel="noopener"
              class="social-link"
            >
              <span v-html="social.svg" class="w-5 h-5 shrink-0" />
              <div>
                <span class="text-text-primary text-sm font-semibold block">{{ social.label }}</span>
                <span class="text-text-secondary text-xs">{{ social.handle }}</span>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" class="ml-auto opacity-40"><path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
            </a>
          </div>
        </div>

        <!-- ── Right: Form ── -->
        <div class="md:col-span-3 reveal-right">
          <div class="glass-card p-8">
            <h2 class="text-text-primary font-bold text-xl mb-6">Envoyer un message</h2>

            <form @submit.prevent="handleSubmit" class="flex flex-col gap-5">

              <!-- Name + Email row -->
              <div class="grid sm:grid-cols-2 gap-4">
                <div>
                  <label class="form-label" for="name">Votre nom</label>
                  <input
                    id="name"
                    v-model="form.name"
                    type="text"
                    class="form-input"
                    placeholder="Jean Dupont"
                    required
                  >
                </div>
                <div>
                  <label class="form-label" for="email">Votre email</label>
                  <input
                    id="email"
                    v-model="form.email"
                    type="email"
                    class="form-input"
                    placeholder="jean@exemple.com"
                    required
                  >
                </div>
              </div>

              <!-- Subject -->
              <div>
                <label class="form-label" for="subject">Sujet</label>
                <select id="subject" v-model="form.subject" class="form-input">
                  <option value="" disabled>Choisissez un sujet</option>
                  <option value="recrutement">Opportunité de recrutement</option>
                  <option value="freelance">Mission freelance</option>
                  <option value="collaboration">Collaboration / Projet</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <!-- Message -->
              <div>
                <label class="form-label" for="message">Votre message</label>
                <textarea
                  id="message"
                  v-model="form.message"
                  class="form-input resize-none"
                  rows="5"
                  placeholder="Décrivez votre projet, votre besoin ou votre opportunité..."
                  required
                />
              </div>

              <!-- Submit button -->
              <button
                type="submit"
                class="btn-primary w-full justify-center"
                :disabled="sending"
              >
                <span v-if="!sending && !sent">
                  Envoyer le message
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg>
                </span>
                <span v-else-if="sending" class="flex items-center gap-2 justify-center">
                  <svg class="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>
                  Envoi en cours...
                </span>
                <span v-else class="flex items-center gap-2 justify-center">
                  ✓ Message envoyé !
                </span>
              </button>

              <!-- Success message -->
              <Transition name="fade">
                <div v-if="sent" class="success-banner">
                  Merci pour votre message ! Je vous répondrai dans les meilleurs délais.
                </div>
              </Transition>

            </form>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
useHead({ title: 'Contact — Souhail Freij' })

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const sending = ref(false)
const sent = ref(false)

async function handleSubmit() {
  sending.value = true
  // Simulate async send (replace with real API call)
  await new Promise((resolve) => setTimeout(resolve, 1200))
  sending.value = false
  sent.value = true
  Object.assign(form, { name: '', email: '', subject: '', message: '' })
  setTimeout(() => { sent.value = false }, 5000)
}

const contactInfo = [
  { icon: '📍', label: 'Localisation',  value: 'France — Disponible remotement' },
  { icon: '💼', label: 'Disponibilité', value: 'CDI / Alternance / Freelance' },
  { icon: '⚡', label: 'Réponse',       value: 'Sous 24 heures' },
]

const githubSvg = `<svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>`

const linkedinSvg = `<svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`

const socials = [
  {
    label: 'GitHub',
    handle: 'github.com/FREIJ-s',
    href: 'https://github.com/FREIJ-s',
    svg: githubSvg,
  },
  {
    label: 'LinkedIn',
    handle: 'linkedin.com/in/souhail-freij',
    href: 'https://www.linkedin.com',
    svg: linkedinSvg,
  },
]

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.08 }
  )
  document.querySelectorAll('.reveal, .reveal-right').forEach((el) => observer.observe(el))
})
</script>

<style scoped>
.success-banner {
  background: rgba(16, 185, 129, 0.1);
  border: 1px solid rgba(16, 185, 129, 0.3);
  color: #34d399;
  border-radius: 0.75rem;
  padding: 0.85rem 1rem;
  font-size: 0.9rem;
  font-weight: 500;
  text-align: center;
}
.fade-enter-active, .fade-leave-active { transition: opacity 0.4s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

select.form-input option {
  background: #16161e;
  color: #f0f0ff;
}
</style>
