<template>
  <div class="vp-layout">
    <NavBar :logo="logo" :items="navItems" />
    <div class="vp-container">
      <SideBar v-if="sidebarItems.length" :items="sidebarItems" :current-path="currentPath" />
      <main class="vp-content">
        <slot />
        <PrevNext :prev="prev" :next="next" />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type PropType } from 'vue'
import NavBar from './NavBar.vue'
import SideBar from './SideBar.vue'
import PrevNext from './PrevNext.vue'

interface NavItem {
  text: string
  link: string
}

interface SidebarItem {
  text: string
  link?: string
  children?: any[]
}

interface DocPage {
  text: string
  link: string
}

defineProps({
  logo: { type: String, default: 'My Docs' },
  navItems: { type: Array as PropType<NavItem[]>, default: () => [] },
  sidebarItems: { type: Array as PropType<SidebarItem[]>, default: () => [] },
  currentPath: { type: String, default: '/' },
  prev: { type: Object as PropType<DocPage | null>, default: null },
  next: { type: Object as PropType<DocPage | null>, default: null },
})
</script>

<style scoped>
.vp-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.vp-container {
  display: flex;
  flex: 1;
  max-width: 960px;
  width: 100%;
  margin: 0 auto;
}
.vp-content {
  flex: 1;
  padding: 2rem 1.5rem;
  min-width: 0;
}
</style>