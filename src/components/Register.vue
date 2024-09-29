<template>
    <div class="registration-page">
        <div class="calendar-wrapper">
        <!-- Kalendarz w tle -->
        <Calendar class="calendar-background" />
      </div>
      <h2>Rejestracja</h2>
      <form @submit.prevent="register">
        <div class="mb-3">
          <label for="username" class="form-label">Nazwa użytkownika</label>
          <input type="text" id="username" class="form-control" v-model="username" required />
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input type="email" id="email" class="form-control" v-model="email" required />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Hasło</label>
          <input type="password" id="password" class="form-control" v-model="password" required />
        </div>
        <div class="mb-3">
          <label for="confirmPassword" class="form-label">Potwierdź hasło</label>
          <input type="password" id="confirmPassword" class="form-control" v-model="confirmPassword" required />
        </div>
        <button type="submit" class="btn btn-primary">Zarejestruj się</button>
        <div v-if="error" class="text-danger">{{ error }}</div>
      </form>
      <router-link to="/login" class="d-block mt-3">Masz już konto? Zaloguj się!</router-link>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import Calendar from './Calendar.vue';
  
  const username = ref('');
  const email = ref('');
  const password = ref('');
  const confirmPassword = ref('');
  const error = ref('');
  const router = useRouter();
  
  const register = () => {
    if (password.value !== confirmPassword.value) {
      error.value = 'Hasła się nie zgadzają';
      return;
    }
  
    if (username.value && email.value && password.value) {
      // Przykładowa logika rejestracji, zastąp prawdziwym zapisem do bazy danych lub API
      localStorage.setItem('isLoggedIn', true); // Zapamiętaj stan użytkownika
      localStorage.setItem('username', username.value); // Przechowaj dane użytkownika
      router.push('/1'); // Przekierowanie po pomyślnej rejestracji
    } else {
      error.value = 'Wszystkie pola są wymagane';
    }
  };
  </script>
  
  <style scoped>
  .registration-page {
    max-width: 400px;
    margin: auto;
    vertical-align: center;
    padding: 20px;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
  .calendar-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: -1; 
  }
  
  .calendar-background {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: blur(4px); 
    opacity: 0.8; 
  }
  </style>
  