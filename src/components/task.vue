<template>
    <li>{{ task }}</li>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  task: String
})
</script>
