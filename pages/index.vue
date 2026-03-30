<template>
  <div>
    <!-- ══════════════════════════════════════════
         HERO SECTION
    ══════════════════════════════════════════ -->
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden">

      <!-- Dot-grid background -->
      <div class="absolute inset-0 hero-dots opacity-50" aria-hidden="true" />

      <!-- Central radial glow -->
      <div
        class="absolute inset-0 flex items-center justify-center pointer-events-none"
        aria-hidden="true"
      >
        <div
          class="w-[600px] h-[600px] rounded-full"
          style="background: radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%); filter: blur(50px);"
        />
      </div>

      <!-- Content -->
      <div class="relative z-10 max-w-5xl mx-auto px-6 py-36 text-center">

        <!-- Availability badge -->
        <div class="flex justify-center mb-8">
          <div class="section-badge">
            <span class="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Disponible — Ouvert aux opportunités
          </div>
        </div>

        <!-- Avatar -->
        <div class="flex justify-center mb-8">
          <div class="hero-avatar animate-float">
            <img
              src="/images/profile.jpg"
              alt="Souhail Freij"
              class="w-full h-full object-cover"
              @error="avatarError = true"
            >
            <div v-if="avatarError" class="avatar-fallback">SF</div>
          </div>
        </div>

        <!-- Headline -->
        <h1 class="text-5xl md:text-7xl font-black leading-[1.05] tracking-tight mb-6">
          <span class="block text-text-primary">Bonjour, je suis</span>
          <span class="block gradient-text mt-1">Souhail Freij</span>
        </h1>

        <!-- Animated role -->
        <div class="flex justify-center items-center gap-2 mb-8 h-9">
          <span class="text-text-secondary text-xl md:text-2xl font-medium">Développeur</span>
          <Transition name="role-swap" mode="out-in">
            <span
              :key="currentRole"
              class="text-accent-light text-xl md:text-2xl font-bold"
            >{{ currentRole }}</span>
          </Transition>
          <span class="text-accent text-2xl font-thin animate-blink">|</span>
        </div>

        <!-- Tagline -->
        <p class="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
          Du tarmac aux terminaux — j'apporte la rigueur et la précision
          de l'aviation au monde du développement web &amp; Cloud.
        </p>

        <!-- CTA buttons -->
        <div class="flex flex-wrap justify-center gap-4 mb-14">
          <NuxtLink to="/projects" class="btn-primary">
            <span>Voir mes projets</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
          </NuxtLink>
          <NuxtLink to="/contact" class="btn-outline">Me contacter</NuxtLink>
          <a href="https://github.com/FREIJ-s" target="_blank" rel="noopener" class="btn-outline">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
            GitHub
          </a>
        </div>

        <!-- Tech stack tags -->
        <div class="flex flex-wrap justify-center gap-2 mb-16">
          <span v-for="tech in techStack" :key="tech" class="tag">{{ tech }}</span>
        </div>

        <!-- Scroll indicator -->
        <div class="flex justify-center">
          <div class="scroll-mouse">
            <div class="scroll-dot-inner" />
          </div>
        </div>
      </div>
    </section>

    <!-- ══════════════════════════════════════════
         STATS SECTION
    ══════════════════════════════════════════ -->
    <section class="py-20 border-t border-white/5 relative z-10">
      <div class="max-w-6xl mx-auto px-6">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-5">
          <div
            v-for="(stat, i) in stats"
            :key="stat.label"
            class="stat-card reveal"
            :style="`transition-delay: ${i * 80}ms`"
          >
            <div class="stat-number">{{ stat.value }}</div>
            <div class="stat-label text-text-secondary text-sm font-medium mt-1">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- ══════════════════════════════════════════
         QUICK OVERVIEW
    ══════════════════════════════════════════ -->
    <section class="py-20 relative z-10">
      <div class="max-w-6xl mx-auto px-6">
        <div class="grid md:grid-cols-3 gap-6">
          <div
            v-for="(card, i) in overviewCards"
            :key="card.title"
            class="glass-card p-6 reveal"
            :style="`transition-delay: ${i * 100}ms`"
          >
            <div class="text-3xl mb-4">{{ card.icon }}</div>
            <h3 class="text-lg font-700 text-text-primary mb-2 font-bold">{{ card.title }}</h3>
            <p class="text-text-secondary text-sm leading-relaxed">{{ card.desc }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({ title: 'Souhail Freij — Développeur Web & DevOps' })

const avatarError = ref(false)

const roles = ['Fullstack', 'Vue.js / Nuxt', 'Cloud & DevOps', 'Node.js']
const currentRoleIndex = ref(0)
const currentRole = computed(() => roles[currentRoleIndex.value])

const techStack = ['Vue.js', 'Nuxt 3', 'Node.js', 'TypeScript', 'Docker', 'Firebase', 'Tailwind CSS', 'PHP / Symfony']

const stats = [
  { value: '8+',  label: 'Projets réalisés' },
  { value: '3+',  label: 'Années de curiosité' },
  { value: '12+', label: 'Technologies maîtrisées' },
  { value: '1',   label: 'Prototype innovant' },
]

const overviewCards = [
  {
    icon: '⚡',
    title: 'Développement Moderne',
    desc: 'Apps web performantes avec Vue.js, Nuxt 3, Node.js et des architectures propres et scalables.',
  },
  {
    icon: '☁️',
    title: 'Cloud & DevOps',
    desc: 'Conteneurisation Docker, CI/CD, déploiements automatisés — la rigueur des opérations critiques appliquée au code.',
  },
  {
    icon: '✈️',
    title: 'Profil Atypique',
    desc: "Ex-agent de piste en aviation : gestion de la pression, sécurité et précision — des soft skills rares dans le dev.",
  },
]

let interval: ReturnType<typeof setInterval>

onMounted(() => {
  interval = setInterval(() => {
    currentRoleIndex.value = (currentRoleIndex.value + 1) % roles.length
  }, 2600)

  // Scroll reveal
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.1 }
  )
  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
})

onUnmounted(() => clearInterval(interval))
</script>

<style scoped>
/* Avatar */
.hero-avatar {
  width: 115px; height: 115px;
  border-radius: 50%;
  border: 2px solid rgba(99, 102, 241, 0.45);
  box-shadow: 0 0 40px rgba(99, 102, 241, 0.3), 0 0 80px rgba(99, 102, 241, 0.1);
  overflow: hidden;
  background: rgba(22, 22, 30, 0.9);
  display: flex; align-items: center; justify-content: center;
}
.avatar-fallback {
  width: 100%; height: 100%;
  display: flex; align-items: center; justify-content: center;
  font-size: 2rem; font-weight: 800;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Role swap transition */
.role-swap-enter-active,
.role-swap-leave-active { transition: all 0.3s ease; }
.role-swap-enter-from   { opacity: 0; transform: translateY(10px); }
.role-swap-leave-to     { opacity: 0; transform: translateY(-10px); }

/* Scroll mouse */
.scroll-mouse {
  width: 26px; height: 42px;
  border: 2px solid rgba(255,255,255,0.18);
  border-radius: 13px;
  display: flex; align-items: flex-start; justify-content: center;
  padding-top: 6px;
}
.scroll-dot-inner {
  width: 4px; height: 8px;
  background: #6366f1;
  border-radius: 2px;
  animation: scrollBounce 2s ease-in-out infinite;
}

/* Blink cursor */
@keyframes blink { 50% { opacity: 0; } }
.animate-blink { animation: blink 1s step-end infinite; }

/* Float */
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(-10px); }
}
.animate-float { animation: float 5s ease-in-out infinite; }
</style>
