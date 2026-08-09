<template>
  <nav v-if="prev || next" class="vp-prevnext">
    <a v-if="prev" :href="base + prev.link" class="vp-pn-link prev">
      <span class="vp-pn-label">前へ</span>
      <span class="vp-pn-text">{{ prev.text }}</span>
    </a>
    <span v-else class="vp-pn-spacer" />
    <a v-if="next" :href="base + next.link" class="vp-pn-link next">
      <span class="vp-pn-label">次へ</span>
      <span class="vp-pn-text">{{ next.text }}</span>
    </a>
  </nav>
</template>

<script setup lang="ts">
import { type PropType } from 'vue'

const base = import.meta.env.BASE_URL.replace(/\/+$/, '')

interface DocPage {
  text: string
  link: string
}

defineProps({
  prev: { type: Object as PropType<DocPage | null>, default: null },
  next: { type: Object as PropType<DocPage | null>, default: null },
})
</script>

<style scoped>
.vp-prevnext {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 3rem;
  padding-top: 1.5rem;
  border-top: 1px solid #e2e8f0;
}
.vp-pn-spacer {
  flex: 1;
}
.vp-pn-link {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 0.75rem 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  text-decoration: none;
  transition: border-color 0.15s, box-shadow 0.15s;
}
.vp-pn-link:hover {
  border-color: #3b82f6;
  box-shadow: 0 2px 8px rgba(59, 130, 246, 0.12);
}
.vp-pn-label {
  font-size: 0.75rem;
  color: #94a3b8;
}
.vp-pn-text {
  font-size: 0.95rem;
  font-weight: 600;
  color: #333;
}
.next {
  align-items: flex-end;
  text-align: right;
  margin-left: auto;
}
</style>