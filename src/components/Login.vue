<template>
    <div class="login-page">
      <div class="calendar-wrapper">
        <!-- Kalendarz w tle -->
        <Calendar class="calendar-background" />
      </div>
      
      <div class="login-form-wrapper">
        <div class="container login-form">
          <h2>Logowanie</h2>
          <form @submit.prevent="login">
            <div class="mb-3">
              <label for="username" class="form-label">Nazwa użytkownika</label>
              <input type="text" id="username" class="form-control" v-model="username" required />
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">Hasło</label>
              <input type="password" id="password" class="form-control" v-model="password" required />
            </div>
            <button type="submit" class="btn btn-primary">Zaloguj się</button>
            <div v-if="error" class="text-danger">{{ error }}</div>
          </form>
          <br>
          <h6>Nie masz konta?</h6>
          <button class="btn btn-secondary"
          @click.prevent="goToRegister">Zarejestruj się</button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import Calendar from './Calendar.vue';
  
  const username = ref('');
  const password = ref('');
  const error = ref('');
  const router = useRouter();
  
  const login = () => {
    if (username.value === 'admin' && password.value === 'password') {
      localStorage.setItem('isLoggedIn', true);
      router.push('/1');
    } else {
      error.value = 'Niepoprawna nazwa użytkownika lub hasło';
    }
  };
  const goToRegister = () => {
    router.push('/register'); // Przekierowanie na stronę rejestracji
  };
  </script>
  
  <style scoped>
  .login-page {
    position: relative;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
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
  
  .login-form-wrapper {
    position: relative;
    z-index: 1;
  }
  
  .login-form {
    background-color: rgba(255, 255, 255, 0.8);
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
  </style>
  