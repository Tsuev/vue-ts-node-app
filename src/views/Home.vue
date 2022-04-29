<template>
  <input @keydown.enter="addTask(inputValue)" v-model="inputValue" type="text">
  <ul>
    <Task 
      v-for="task of tasks"
      :task="task"
      :key="task"
    />
  </ul>
</template>

<script setup lang="ts">
  import Task from '@/components/task.vue'

  import { ref } from 'vue'

  const inputValue = ref<string>('')

  const tasks = ref<string[]>([])

  const addTask = (): void => {
    tasks.value.push(inputValue.value)
    inputValue.value = ''
  }
</script>
