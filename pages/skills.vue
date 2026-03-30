<template>
  <div class="relative z-10 min-h-screen pt-32 pb-24">
    <div class="max-w-6xl mx-auto px-6">

      <!-- ── Section Header ── -->
      <div class="text-center mb-16 reveal">
        <div class="section-badge mb-4">Compétences</div>
        <h1 class="text-4xl md:text-6xl font-black tracking-tight leading-tight mb-5">
          <span class="text-text-primary">Mon arsenal</span>
          <span class="gradient-text block">technique</span>
        </h1>
        <p class="text-text-secondary text-lg max-w-xl mx-auto">
          Des technologies soigneusement choisies pour construire des solutions
          robustes, modernes et scalables.
        </p>
      </div>

      <!-- ── Category Tabs ── -->
      <div class="flex flex-wrap justify-center gap-2 mb-12 reveal">
        <button
          v-for="cat in categories"
          :key="cat.id"
          :class="['skill-tab', activeTab === cat.id && 'active']"
          @click="setTab(cat.id)"
        >
          {{ cat.icon }} {{ cat.label }}
        </button>
      </div>

      <!-- ── Skill Grid ── -->
      <TransitionGroup name="skill-grid" tag="div" class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-20">
        <div
          v-for="skill in filteredSkills"
          :key="skill.name"
          class="skill-icon-card reveal"
        >
          <img
            :src="skill.icon"
            :alt="skill.name"
            class="w-12 h-12 object-contain"
            loading="lazy"
          >
          <span class="text-text-primary text-sm font-semibold text-center">{{ skill.name }}</span>
          <div class="w-full skill-bar-track">
            <div
              class="skill-bar-fill"
              :data-level="skill.level"
              :style="barsAnimated ? `width: ${skill.level}%` : 'width: 0'"
            />
          </div>
          <span class="text-text-secondary text-xs">{{ skill.level }}%</span>
        </div>
      </TransitionGroup>

      <!-- ── Proficiency Legend ── -->
      <div class="glass-card p-6 mb-20 reveal">
        <h3 class="text-text-primary font-bold mb-4 text-sm uppercase tracking-widest text-center">
          Niveaux de maîtrise
        </h3>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div v-for="lvl in levels" :key="lvl.label" class="flex items-center gap-3">
            <div class="w-8 h-1.5 rounded-full" :style="`background: linear-gradient(90deg, #6366f1, #8b5cf6); width: ${lvl.pct}%; min-width: 20px; max-width: 50px`" />
            <div>
              <span class="text-text-primary text-sm font-semibold">{{ lvl.label }}</span>
              <span class="text-text-secondary text-xs block">{{ lvl.range }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- ── Currently Learning ── -->
      <div class="reveal">
        <div class="text-center mb-8">
          <div class="section-badge mb-3">En apprentissage</div>
          <h2 class="text-2xl font-black text-text-primary">Ce que j'explore en ce moment</h2>
        </div>
        <div class="flex flex-wrap justify-center gap-3">
          <div
            v-for="tech in learning"
            :key="tech.name"
            class="glass-card px-5 py-3 flex items-center gap-3 reveal"
          >
            <span class="text-xl">{{ tech.icon }}</span>
            <div>
              <span class="text-text-primary text-sm font-semibold block">{{ tech.name }}</span>
              <span class="text-text-secondary text-xs">{{ tech.desc }}</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
useHead({ title: 'Compétences — Souhail Freij' })

const activeTab = ref('all')
const barsAnimated = ref(false)

const categories = [
  { id: 'all',     icon: '⚡', label: 'Tout voir' },
  { id: 'frontend',icon: '🎨', label: 'Frontend' },
  { id: 'backend', icon: '⚙️', label: 'Backend' },
  { id: 'devops',  icon: '☁️', label: 'DevOps / Outils' },
]

const allSkills = [
  // Frontend
  { name: 'HTML5',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',          level: 92, cat: 'frontend' },
  { name: 'CSS3',       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',            level: 88, cat: 'frontend' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', level: 85, cat: 'frontend' },
  { name: 'Vue.js',     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',          level: 88, cat: 'frontend' },
  { name: 'Nuxt.js',    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg',        level: 82, cat: 'frontend' },
  { name: 'Tailwind',   icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', level: 85, cat: 'frontend' },
  { name: 'Bootstrap',  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg', level: 80, cat: 'frontend' },
  // Backend
  { name: 'Node.js',    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',        level: 78, cat: 'backend' },
  { name: 'PHP',        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',              level: 75, cat: 'backend' },
  { name: 'Symfony',    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/symfony/symfony-original.svg',      level: 70, cat: 'backend' },
  { name: 'Firebase',   icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',       level: 80, cat: 'backend' },
  { name: 'MySQL',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',          level: 72, cat: 'backend' },
  // DevOps
  { name: 'Docker',     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',        level: 72, cat: 'devops' },
  { name: 'Git',        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',              level: 85, cat: 'devops' },
  { name: 'GitHub',     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',        level: 82, cat: 'devops' },
  { name: 'Linux',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',          level: 60, cat: 'devops' },
  { name: 'VS Code',    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',        level: 90, cat: 'devops' },
]

const filteredSkills = computed(() =>
  activeTab.value === 'all'
    ? allSkills
    : allSkills.filter((s) => s.cat === activeTab.value)
)

const levels = [
  { label: 'Débutant',      range: '< 50%',    pct: 25 },
  { label: 'Intermédiaire', range: '50 – 69%', pct: 60 },
  { label: 'Avancé',        range: '70 – 84%', pct: 77 },
  { label: 'Expert',        range: '85%+',      pct: 100 },
]

const learning = [
  { icon: '🐳', name: 'Kubernetes',     desc: 'Orchestration de conteneurs' },
  { icon: '☁️', name: 'AWS / Cloud',    desc: 'Infra cloud & déploiement' },
  { icon: '🔄', name: 'CI/CD',          desc: 'Pipelines GitLab/GitHub Actions' },
  { icon: '🔷', name: 'TypeScript',     desc: 'Typage statique avancé' },
]

function setTab(id: string) {
  activeTab.value = id
  barsAnimated.value = false
  nextTick(() => { barsAnimated.value = true })
}

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

  // Trigger bars after a short delay on mount
  setTimeout(() => { barsAnimated.value = true }, 400)
})
</script>

<style scoped>
.skill-grid-enter-active,
.skill-grid-leave-active { transition: all 0.3s ease; }
.skill-grid-enter-from,
.skill-grid-leave-to { opacity: 0; transform: scale(0.9); }
</style>
