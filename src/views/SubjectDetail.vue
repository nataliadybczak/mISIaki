<template>
    <div class="container">
      <h2>{{ subject.name }}</h2>
      <div class="text-end container mb-3">
        <router-link to="/1/edit" class="btn btn-primary btn-sm">Edytuj przedmiot</router-link>
    </div>
      <p><strong>Ilość tematów do nauczenia:</strong> {{ subject.topics }}</p>
      <p><strong>Potrzebny czas:</strong> {{ subject.time }}</p>
      <h6>Egzaminy</h6>
      <table>
        
      </table>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  
  const route = useRoute();
  const subjects = JSON.parse(localStorage.getItem('subjects')) || []; 
  const subject = ref({});
  

  onMounted(() => {
    const subjectId = parseInt(route.params.id, 10); 
    subject.value = subjects[subjectId]; 
  });
  </script>
  
  <style scoped>

  </style>