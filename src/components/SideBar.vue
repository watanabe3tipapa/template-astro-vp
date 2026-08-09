<template>
  <aside class="vp-sidebar">
    <ul class="vp-sidebar-list">
      <li v-for="item in items" :key="item.text">
        <a
          v-if="item.link"
          :href="base + item.link"
          class="vp-sidebar-link"
          :class="{ active: isActive(item.link) }"
        >{{ item.text }}</a>
        <span v-else class="vp-sidebar-heading">{{ item.text }}</span>
        <ul v-if="item.children" class="vp-sidebar-sublist">
          <li v-for="child in item.children" :key="child.text">
            <a
              :href="base + child.link"
              class="vp-sidebar-link"
              :class="{ active: isActive(child.link) }"
            >{{ child.text }}</a>
          </li>
        </ul>
      </li>
    </ul>
  </aside>
</template>

<script setup lang="ts">
const base = import.meta.env.BASE_URL.replace(/\/+$/, '')

interface SidebarItem {
  text: string
  link?: string
  children?: SidebarItem[]
}

const props = defineProps<{
  items: SidebarItem[]
  currentPath: string
}>()

const isActive = (link?: string): boolean => {
  if (!link) return false
  return link === props.currentPath
}
</script>

<style scoped>
.vp-sidebar {
  width: 240px;
  flex-shrink: 0;
  padding: 1.5rem 0;
  border-right: 1px solid #e2e8f0;
}
.vp-sidebar-list {
  list-style: none;
  margin: 0;
  padding: 0 1rem;
}
.vp-sidebar-sublist {
  list-style: none;
  margin: 0.25rem 0 0.5rem 1rem;
  padding: 0;
}
.vp-sidebar-link {
  display: block;
  padding: 0.35rem 0.5rem;
  color: #666;
  text-decoration: none;
  font-size: 0.875rem;
  border-radius: 4px;
  transition: background 0.15s, color 0.15s;
}
.vp-sidebar-heading {
  display: block;
  padding: 0.5rem 0.5rem 0.25rem;
  font-size: 0.8rem;
  font-weight: 700;
  color: #475569;
  letter-spacing: 0.02em;
}
.vp-sidebar-link:hover {
  color: #3b82f6;
}
.vp-sidebar-link.active {
  color: #3b82f6;
  font-weight: 600;
  background: #eff6ff;
}
</style>
