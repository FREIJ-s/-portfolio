<template>
  <div class="relative z-10 min-h-screen pt-32 pb-24">
    <div class="max-w-6xl mx-auto px-6">

      <!-- ── Section Header ── -->
      <div class="text-center mb-20 reveal">
        <div class="section-badge mb-4">À propos</div>
        <h1 class="text-4xl md:text-6xl font-black tracking-tight leading-tight mb-5">
          <span class="text-text-primary">Un parcours</span>
          <span class="gradient-text block">hors du commun</span>
        </h1>
        <p class="text-text-secondary text-lg max-w-2xl mx-auto leading-relaxed">
          De l'environnement critique de l'aviation au développement web moderne —
          une reconversion guidée par la passion et la rigueur.
        </p>
      </div>

      <!-- ── Bio + Photo ── -->
      <div class="grid md:grid-cols-5 gap-12 items-center mb-24">

        <!-- Photo -->
        <div class="md:col-span-2 flex justify-center reveal-left">
          <div class="relative">
            <div class="avatar-lg">
              <img
                src="/images/profile.jpg"
                alt="Souhail Freij"
                class="w-full h-full object-cover"
                @error="showFallback = true"
              >
              <div v-if="showFallback" class="avatar-lg-fallback">SF</div>
            </div>
            <!-- Floating badge -->
            <div class="floating-badge">
              <span class="text-lg">✈️</span>
              <span class="text-xs font-semibold text-text-secondary leading-tight">
                Ex-Aviation<br>→ Dev
              </span>
            </div>
          </div>
        </div>

        <!-- Text -->
        <div class="md:col-span-3 reveal-right">
          <h2 class="text-2xl md:text-3xl font-bold text-text-primary mb-5 leading-snug">
            Développeur Fullstack avec une
            <span class="gradient-text-accent">expérience critique</span>
          </h2>
          <div class="space-y-4 text-text-secondary leading-relaxed">
            <p>
              Je suis <strong class="text-text-primary">Souhail Freij</strong>, développeur web passionné,
              formé à l'<strong class="text-text-primary">EEDN</strong>.
              Avant le code, j'ai travaillé comme <strong class="text-text-primary">agent de piste en aviation</strong> —
              un environnement où chaque décision compte et où l'erreur n'est pas permise.
            </p>
            <p>
              Cette expérience m'a forgé des qualités rares dans le monde du développement :
              <strong class="text-text-primary">rigueur opérationnelle, gestion du stress</strong>, sens des responsabilités
              et capacité à travailler sous pression dans des contextes critiques.
            </p>
            <p>
              Aujourd'hui je construis des applications web modernes avec
              <strong class="text-accent-light">Vue.js / Nuxt 3</strong>,
              <strong class="text-accent-light">Node.js</strong> et
              <strong class="text-accent-light">Docker</strong>,
              tout en me formant activement vers le <strong class="text-text-primary">Cloud & DevOps</strong>.
              Mon prototype innovant — un <strong class="text-text-primary">système QR code pour opérations aériennes</strong> —
              incarne cette jonction unique entre mes deux mondes.
            </p>
          </div>

          <!-- Value pills -->
          <div class="flex flex-wrap gap-2 mt-6">
            <span v-for="val in values" :key="val" class="tag">{{ val }}</span>
          </div>
        </div>
      </div>

      <!-- ── Career Timeline ── -->
      <div class="mb-24">
        <div class="text-center mb-12 reveal">
          <div class="section-badge mb-3">Parcours</div>
          <h2 class="text-3xl font-black text-text-primary tracking-tight">Ma trajectoire</h2>
        </div>

        <div class="max-w-3xl mx-auto">
          <div
            v-for="(item, i) in timeline"
            :key="i"
            class="timeline-item reveal"
            :style="`transition-delay: ${i * 100}ms`"
          >
            <div class="timeline-dot" />
            <div class="glass-card p-5 ml-4">
              <div class="flex flex-wrap items-start justify-between gap-2 mb-2">
                <div class="flex items-center gap-2">
                  <span class="text-xl">{{ item.icon }}</span>
                  <h3 class="text-text-primary font-bold text-base">{{ item.title }}</h3>
                </div>
                <span class="text-xs font-semibold text-accent-light bg-accent/10 px-2.5 py-0.5 rounded-full border border-accent/20">
                  {{ item.period }}
                </span>
              </div>
              <p class="text-text-secondary text-sm leading-relaxed">{{ item.desc }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- ── Traits / Soft Skills ── -->
      <div>
        <div class="text-center mb-12 reveal">
          <div class="section-badge mb-3">Ce qui me distingue</div>
          <h2 class="text-3xl font-black text-text-primary tracking-tight">
            Soft skills forgés sur le terrain
          </h2>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <div
            v-for="(trait, i) in traits"
            :key="trait.title"
            class="glass-card p-6 reveal"
            :style="`transition-delay: ${i * 80}ms`"
          >
            <div
              class="w-10 h-10 rounded-xl flex items-center justify-center text-xl mb-4"
              style="background: rgba(99,102,241,0.12); border: 1px solid rgba(99,102,241,0.2);"
            >
              {{ trait.icon }}
            </div>
            <h3 class="text-text-primary font-bold mb-1">{{ trait.title }}</h3>
            <p class="text-text-secondary text-sm leading-relaxed">{{ trait.desc }}</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
useHead({ title: 'À propos — Souhail Freij' })

const showFallback = ref(false)

const values = [
  'Rigueur', 'Curiosité', 'Autonomie', 'Polyvalence',
  'Gestion du stress', 'Travail en équipe', 'Amélioration continue',
]

const timeline = [
  {
    icon: '✈️',
    title: 'Agent de Piste — Aviation',
    period: '2019 – 2022',
    desc: "Coordination des opérations au sol dans un environnement critique et réglementé. Gestion des départs/arrivées d'aéronefs, sécurité opérationnelle, communication avec les équipages. Formation aux procédures d'urgence.",
  },
  {
    icon: '💡',
    title: 'Déclic — Découverte du code',
    period: '2022',
    desc: "Face aux répétitions et à l'inefficacité de certains processus aéroportuaires, l'idée émerge : et si on automatisait tout ça ? C'est le déclencheur de ma reconversion vers le développement.",
  },
  {
    icon: '🎓',
    title: 'Formation Développeur Web — EEDN',
    period: '2023 – 2024',
    desc: "Apprentissage intensif : HTML/CSS, JavaScript, PHP/Symfony, Vue.js, Nuxt.js, Node.js, Docker, bases de données SQL & NoSQL. Projets pratiques en conditions réelles.",
  },
  {
    icon: '🛠️',
    title: 'Prototype QR Aviation',
    period: '2024',
    desc: "Développement d'un système innovant utilisant des QR codes pour digitaliser et optimiser la gestion des opérations aériennes au sol. Jonction directe entre expérience terrain et compétences techniques.",
  },
  {
    icon: '☁️',
    title: 'Spécialisation Cloud / DevOps',
    period: '2025 – En cours',
    desc: "Formation active sur Docker, CI/CD, orchestration, et architectures cloud. Objectif : devenir un développeur capable d'opérer des systèmes critiques à grande échelle.",
  },
]

const traits = [
  {
    icon: '🎯',
    title: 'Précision opérationnelle',
    desc: "L'aviation m'a appris que chaque détail compte. Je code avec le même niveau d'exigence.",
  },
  {
    icon: '🧠',
    title: 'Apprentissage rapide',
    desc: 'Capacité à acquérir de nouvelles technologies en autonomie et à les appliquer rapidement en production.',
  },
  {
    icon: '🔥',
    title: 'Résilience sous pression',
    desc: "Habitué aux environnements stressants, je performe et prends des décisions claires même sous contraintes.",
  },
  {
    icon: '🔗',
    title: 'Pont métier ↔ tech',
    desc: "Comprendre les besoins opérationnels réels pour construire des solutions vraiment utiles, pas juste techniques.",
  },
  {
    icon: '🤝',
    title: 'Communication & équipe',
    desc: "L'aviation, c'est 100% de la coordination. Je sais m'intégrer, écouter et collaborer efficacement.",
  },
  {
    icon: '🚀',
    title: 'Vision long terme',
    desc: 'Développeur aujourd\'hui, architecte cloud demain. Je construis mes compétences avec une vision claire.',
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
  document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el) =>
    observer.observe(el)
  )
})
</script>

<style scoped>
.avatar-lg {
  width: 260px; height: 260px;
  border-radius: 1.5rem;
  border: 1px solid rgba(99, 102, 241, 0.3);
  box-shadow: 0 0 60px rgba(99, 102, 241, 0.2);
  overflow: hidden;
  background: rgba(22, 22, 30, 0.9);
  display: flex; align-items: center; justify-content: center;
}
.avatar-lg-fallback {
  font-size: 5rem; font-weight: 900;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.floating-badge {
  position: absolute;
  bottom: -14px; right: -14px;
  background: rgba(22, 22, 30, 0.9);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(99, 102, 241, 0.25);
  border-radius: 1rem;
  padding: 0.75rem 1rem;
  display: flex; align-items: center; gap: 0.5rem;
  box-shadow: 0 8px 30px rgba(0,0,0,0.4);
}
</style>
