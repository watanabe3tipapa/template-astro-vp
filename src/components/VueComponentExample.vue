<template>
  <div class="vue-example">
    <p>Hello from <strong>Vue {{ version }}</strong>!</p>
    <button class="vue-btn" @click="count++">
      Clicked {{ count }} times
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { version } from 'vue'

const count = ref(0)
</script>

<style scoped>
.vue-example {
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 1rem 1.5rem;
  margin: 1rem 0;
  background: #fafafa;
}
.vue-btn {
  margin-top: 0.5rem;
  padding: 0.4rem 1rem;
  background: #3b82f6;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.vue-btn:hover {
  background: #2563eb;
}
</style>
