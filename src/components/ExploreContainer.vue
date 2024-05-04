<template>
  <div id="container">
    <strong>{{ name }}</strong>
    <p class="">Explore <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
  </div>
</template>

<script setup>
defineProps({
  name: String,
});
</script>


