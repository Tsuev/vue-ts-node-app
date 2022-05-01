<template>
  <div class="home">
  <carousel/>

  <section class="cards container p-3">
    <div class="row">
      <card />
      <card />
      <card />
      <card />
      <card />
    </div>
  </section>
  </div>

</template>

<script setup lang="ts">
import Carousel from '@/components/carousel.vue'
import Card from '@/components/card.vue'
</script>
