<template>
  <div class="min-h-screen bg-dark text-text-primary font-sans">

    <!-- Animated background blobs (fixed, behind everything) -->
    <div class="fixed inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
      <div class="blob blob-1" />
      <div class="blob blob-2" />
      <div class="blob blob-3" />
    </div>

    <!-- ── Loader ── -->
    <Transition name="loader">
      <div v-if="loading" class="loader-wrap" aria-label="Chargement">
        <div class="relative w-16 h-16 flex items-center justify-center">
          <div class="loader-ring" />
          <span class="loader-initials">SF</span>
        </div>
      </div>
    </Transition>

    <!-- ── Navbar ── -->
    <nav :class="['navbar', scrolled && 'navbar-scrolled']">
      <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <!-- Logo -->
        <NuxtLink to="/" class="logo">SF<span style="color:#6366f1"></span></NuxtLink>

        <!-- Desktop links -->
        <div class="hidden md:flex items-center gap-1">
          <NuxtLink v-for="item in navItems" :key="item.path" :to="item.path" class="nav-link">{{ item.label }}
          </NuxtLink>
          <a href="https://github.com/FREIJ-s" target="_blank" rel="noopener" class="nav-cta">GitHub</a>
        </div>

        <!-- Mobile toggle -->
        <button class="hamburger-btn md:hidden" :aria-label="mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'"
          @click="mobileOpen = !mobileOpen">
          <div :class="['hamburger-lines', mobileOpen && 'open']">
            <span /><span /><span />
          </div>
        </button>
      </div>

      <!-- Mobile panel -->
      <Transition name="mobile-nav">
        <div v-if="mobileOpen" class="md:hidden mobile-nav-panel">
          <NuxtLink v-for="item in navItems" :key="item.path" :to="item.path" class="mobile-nav-link"
            @click="mobileOpen = false">{{ item.label }}</NuxtLink>
          <a href="https://github.com/FREIJ-s" target="_blank" rel="noopener" class="mobile-nav-link"
            @click="mobileOpen = false">GitHub</a>
        </div>
      </Transition>
    </nav>

    <!-- ── Page Content ── -->
    <main class="relative z-10">
      <NuxtPage />
    </main>

    <!-- ── Footer ── -->
    <footer class="site-footer relative z-10">
      <div class="max-w-7xl mx-auto px-6">
        <div class="flex flex-col md:flex-row items-center justify-between gap-4">
          <span class="logo">SF<span style="color:#6366f1">.</span></span>
          <p class="text-text-secondary text-sm">
            © 2025 <span class="text-accent-light font-medium">Souhail Freij</span>
            — Construit avec Nuxt 3 &amp; Tailwind CSS
          </p>
          <div class="flex items-center gap-4">
            <a href="https://github.com/FREIJ-s" target="_blank" rel="noopener"
              class="text-text-secondary hover:text-accent-light transition-colors text-sm">GitHub</a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener"
              class="text-text-secondary hover:text-accent-light transition-colors text-sm">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>

  </div>
</template>

<script setup lang="ts">
const loading = ref(true)
const scrolled = ref(false)
const mobileOpen = ref(false)

const navItems = [
  { path: '/', label: 'Accueil' },
  { path: '/about', label: 'À propos' },
  { path: '/skills', label: 'Compétences' },
  { path: '/projects', label: 'Projets' },
  { path: '/contact', label: 'Contact' },
]

onMounted(() => {
  // Hide loader after short delay
  setTimeout(() => { loading.value = false }, 1600)

  // Scroll watcher for navbar background
  const onScroll = () => { scrolled.value = window.scrollY > 24 }
  window.addEventListener('scroll', onScroll, { passive: true })
  onUnmounted(() => window.removeEventListener('scroll', onScroll))
})

// Close mobile menu on route change
const route = useRoute()
watch(() => route.path, () => { mobileOpen.value = false })
</script>
