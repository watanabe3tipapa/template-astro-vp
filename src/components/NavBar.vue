<template>
  <nav class="vp-nav">
    <div class="vp-nav-inner">
      <a class="vp-nav-logo" :href="base + '/'">{{ logo }}</a>
      <div class="vp-nav-links">
        <a
          v-for="item in items"
          :key="item.text"
          :href="base + item.link"
          class="vp-nav-link"
        >{{ item.text }}</a>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const base = import.meta.env.BASE_URL.replace(/\/+$/, '')

defineProps<{
  logo?: string
  items: { text: string; link: string }[]
}>()
</script>

<style scoped>
.vp-nav {
  position: sticky;
  top: 0;
  z-index: 100;
  background: #fff;
  border-bottom: 1px solid #e2e8f0;
}
.vp-nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 960px;
  margin: 0 auto;
  padding: 0 1.5rem;
  height: 3.5rem;
}
.vp-nav-logo {
  font-weight: 700;
  font-size: 1.125rem;
  color: #333;
  text-decoration: none;
}
.vp-nav-links {
  display: flex;
  gap: 1.25rem;
}
.vp-nav-link {
  color: #666;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.2s;
}
.vp-nav-link:hover {
  color: #3b82f6;
}
</style>
