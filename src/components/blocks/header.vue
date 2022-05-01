<template>
  <nav class="navbar navbar-expand navbar-light navbar-bg">
        <div class="container d-flex justify-content-between">
            <div class="nav-link d-flex align-items-center">
                <svg width="24" height="24">
                    <use xlink:href="@/assets/img/logo.svg#store"/>
                </svg>
                <div class="h4 ms-2 mb-0">Online store</div>
            </div>
            <div class="nav-link">
                <profile />
            </div>
        </div>
	</nav>
</template>

<script setup lang='ts'>
import profile from './profile.vue';

</script>
