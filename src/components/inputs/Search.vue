<template>
  <div>
    <input
      type="text"
      placeholder="Search country"
      v-model="userInfo"
      @input="handleInput($event)"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const emit = defineEmits<{
  (e: 'update:modelValue', val: string): void
}>()

const userInfo = ref('')

const handleInput = (event: any) => {
  if (!event.target) return
  userInfo.value = event.target.value
  emit('update:modelValue', event.target.value)
}
</script>

<style scoped></style>
