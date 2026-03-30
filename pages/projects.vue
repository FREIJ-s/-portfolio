<template>
  <div class="relative z-10 min-h-screen pt-32 pb-24">
    <div class="max-w-6xl mx-auto px-6">

      <!-- ── Section Header ── -->
      <div class="text-center mb-16 reveal">
        <div class="section-badge mb-4">Projets</div>
        <h1 class="text-4xl md:text-6xl font-black tracking-tight leading-tight mb-5">
          <span class="text-text-primary">Ce que j'ai</span>
          <span class="gradient-text block">construit</span>
        </h1>
        <p class="text-text-secondary text-lg max-w-xl mx-auto">
          Des projets concrets, du prototype innovant aux applications fullstack,
          chacun reflète un apprentissage ciblé.
        </p>
      </div>

      <!-- ── Featured Project ── -->
      <div class="featured-card mb-10 reveal">
        <div class="featured-glow" aria-hidden="true" />
        <div class="relative z-10 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div class="flex items-center gap-2 mb-4">
              <span class="section-badge">Projet phare</span>
              <span class="tag-sm bg-emerald-500/10 text-emerald-400 border-emerald-500/20">Innovant</span>
            </div>
            <h2 class="text-2xl md:text-3xl font-black text-text-primary mb-3 leading-tight">
              Système QR — Opérations Aériennes
            </h2>
            <p class="text-text-secondary leading-relaxed mb-5">
              Prototype innovant qui digitalise la gestion des opérations au sol aéroportuaires
              via des QR codes dynamiques. Chaque aéronef, équipement et tâche opérationnelle
              est traçable en temps réel — né directement de mon expérience terrain en aviation.
            </p>
            <div class="flex flex-wrap gap-2 mb-6">
              <span v-for="tech in featuredStack" :key="tech" class="tag">{{ tech }}</span>
            </div>
            <div class="flex gap-3">
              <a
                href="https://github.com/FREIJ-s"
                target="_blank"
                rel="noopener"
                class="btn-primary"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
                <span>Voir sur GitHub</span>
              </a>
            </div>
          </div>

          <!-- Visual mockup -->
          <div class="flex justify-center">
            <div class="mockup-screen">
              <div class="mockup-header">
                <span class="dot dot-red"/><span class="dot dot-yellow"/><span class="dot dot-green"/>
              </div>
              <div class="mockup-body">
                <div class="mockup-line w-3/4 mb-2"/>
                <div class="mockup-qr">
                  <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#6366f1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
                    <rect x="3" y="14" width="7" height="7"/>
                    <path d="M14 14h.01M14 17h.01M17 14h.01M17 17h.01M20 14h.01M20 17h.01M20 20h.01M17 20h.01M14 20h.01"/>
                  </svg>
                </div>
                <div class="mockup-line w-1/2 mt-2"/>
                <div class="mockup-line w-2/3 mt-1"/>
                <div class="flex gap-1 mt-3">
                  <div class="mockup-badge">VOL 447</div>
                  <div class="mockup-badge" style="color:#10b981;border-color:rgba(16,185,129,0.3)">ON TIME</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ── Projects Grid ── -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
        <div
          v-for="(project, i) in projects"
          :key="project.id"
          class="project-card reveal"
          :style="`transition-delay: ${i * 70}ms`"
        >
          <!-- Card header gradient -->
          <div class="card-header" :style="`background: ${project.gradient}`">
            <span class="card-icon">{{ project.icon }}</span>
          </div>

          <div class="p-5">
            <div class="flex items-start justify-between mb-2">
              <h3 class="text-text-primary font-bold text-base">{{ project.title }}</h3>
              <span class="tag-sm ml-2 shrink-0">{{ project.type }}</span>
            </div>
            <p class="text-text-secondary text-sm leading-relaxed mb-4">{{ project.description }}</p>
            <div class="flex flex-wrap gap-1.5 mb-4">
              <span v-for="tech in project.stack" :key="tech" class="tag-sm">{{ tech }}</span>
            </div>
            <a
              :href="project.link"
              target="_blank"
              rel="noopener"
              class="inline-flex items-center gap-1.5 text-accent-light text-sm font-semibold hover:gap-2.5 transition-all"
            >
              Voir le projet
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </a>
          </div>
        </div>
      </div>

      <!-- ── GitHub CTA ── -->
      <div class="text-center reveal">
        <p class="text-text-secondary mb-5">
          Plus de projets en cours et expérimentations disponibles sur mon GitHub
        </p>
        <a
          href="https://github.com/FREIJ-s"
          target="_blank"
          rel="noopener"
          class="btn-primary"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
          <span>Voir mon GitHub complet</span>
        </a>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
useHead({ title: 'Projets — Souhail Freij' })

const featuredStack = ['Vue.js', 'Node.js', 'Firebase', 'QR API', 'Docker']

const projects = [
  {
    id: 1,
    icon: '⏱️',
    title: 'TimeTroc',
    type: 'Fullstack',
    description: "Plateforme d'échange de services entre utilisateurs basée sur un système de crédit-temps. Authentification, tableau de bord, messagerie.",
    stack: ['Vue.js', 'Node.js', 'Firebase'],
    link: 'https://github.com/FREIJ-s',
    gradient: 'linear-gradient(135deg, rgba(99,102,241,0.15), rgba(139,92,246,0.08))',
  },
  {
    id: 2,
    icon: '🎬',
    title: 'Filmorama',
    type: 'Frontend',
    description: "Plateforme dédiée aux films et séries : découverte, notation, listes personnalisées. Données via API TMDB.",
    stack: ['Vue.js', 'Tailwind CSS', 'API REST'],
    link: 'https://github.com/FREIJ-s',
    gradient: 'linear-gradient(135deg, rgba(239,68,68,0.12), rgba(249,115,22,0.06))',
  },
  {
    id: 3,
    icon: '🔥',
    title: 'Fireball',
    type: 'Fullstack',
    description: "Application web temps réel utilisant Firebase pour l'authentification, le stockage et la synchronisation instantanée des données.",
    stack: ['Vue.js', 'Firebase', 'Firestore'],
    link: 'https://github.com/FREIJ-s',
    gradient: 'linear-gradient(135deg, rgba(249,115,22,0.12), rgba(234,179,8,0.06))',
  },
  {
    id: 4,
    icon: '✅',
    title: 'Task_FR',
    type: 'Frontend',
    description: "Gestionnaire de tâches en français avec Vue.js. CRUD complet, filtres, stockage local, interface épurée et responsive.",
    stack: ['Vue.js', 'LocalStorage', 'CSS'],
    link: 'https://github.com/FREIJ-s',
    gradient: 'linear-gradient(135deg, rgba(16,185,129,0.12), rgba(6,182,212,0.06))',
  },
  {
    id: 5,
    icon: '🛒',
    title: 'Dropshipping SLI.F',
    type: 'E-commerce',
    description: "Site e-commerce optimisé pour le dropshipping. Interface intuitive, catalogue produits, processus de commande simplifié.",
    stack: ['HTML', 'CSS', 'JavaScript', 'PHP'],
    link: 'https://github.com/FREIJ-s',
    gradient: 'linear-gradient(135deg, rgba(59,130,246,0.12), rgba(99,102,241,0.06))',
  },
  {
    id: 6,
    icon: '🦁',
    title: 'AR-Zoo',
    type: 'Mobile / AR',
    description: "Application mobile de réalité augmentée permettant de visualiser des animaux en 3D interactifs. Expérience immersive et ludique.",
    stack: ['AR.js', 'Three.js', 'Mobile'],
    link: 'https://github.com/FREIJ-s',
    gradient: 'linear-gradient(135deg, rgba(139,92,246,0.12), rgba(236,72,153,0.06))',
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
  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
})
</script>

<style scoped>
/* Featured card */
.featured-card {
  position: relative;
  background: rgba(22, 22, 30, 0.65);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(99, 102, 241, 0.25);
  border-radius: 1.25rem;
  padding: 2.5rem;
  overflow: hidden;
}
.featured-glow {
  position: absolute; top: -60px; right: -60px;
  width: 280px; height: 280px;
  background: radial-gradient(circle, rgba(99,102,241,0.2), transparent 70%);
  filter: blur(50px);
  pointer-events: none;
}

/* Mockup screen */
.mockup-screen {
  background: rgba(10, 10, 15, 0.9);
  border: 1px solid rgba(99,102,241,0.3);
  border-radius: 0.75rem;
  width: 240px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(99,102,241,0.2);
}
.mockup-header {
  background: rgba(22,22,30,0.9);
  padding: 0.5rem 0.75rem;
  display: flex; gap: 5px; align-items: center;
  border-bottom: 1px solid rgba(255,255,255,0.05);
}
.dot { width: 8px; height: 8px; border-radius: 50%; }
.dot-red    { background: #ef4444; }
.dot-yellow { background: #eab308; }
.dot-green  { background: #22c55e; }
.mockup-body { padding: 1rem; }
.mockup-line {
  height: 6px; background: rgba(99,102,241,0.2);
  border-radius: 3px;
}
.mockup-qr {
  display: flex; justify-content: center;
  padding: 1rem 0 0.5rem;
}
.mockup-badge {
  font-size: 0.65rem; font-weight: 700; letter-spacing: 0.04em;
  padding: 0.2rem 0.5rem; border-radius: 4px;
  border: 1px solid rgba(99,102,241,0.3);
  color: #818cf8;
}

/* Card header strip */
.card-header {
  height: 72px;
  display: flex; align-items: center; justify-content: center;
  border-bottom: 1px solid rgba(255,255,255,0.05);
}
.card-icon { font-size: 2rem; }
</style>
