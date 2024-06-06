<template>
    <div class="not-found">
      <h1>404 - Stránka nebola nájdená</h1>
      <p>Prepáčte, ale stránka, ktorú hľadáte, neexistuje.</p>
      <router-link to="/">Vrátiť sa na hlavnú stránku</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'NotFoundPage'
  }
  </script>
  
  <style scoped>
  .not-found {
    text-align: center;
    padding: 2rem;
  }
  </style>