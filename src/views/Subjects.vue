<template>
    <h1 class="container mb-3">Przedmioty</h1>
    <div class="text-end container mb-3">
        <router-link to="/1/add" class="btn btn-primary btn-sm">Dodaj przedmiot</router-link>
    </div>
    <div class="container mb-3">
        <table class="table table-hover">
            <thead>
                <tr>
                    <th>Przedmiot</th>
                    <th>Ilość tematów do nauczenia</th>
                    <th>Potrzebny czas</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(subject, index) in subjects" :key="index">
                    <td>
                        <router-link id="links" :to="{ path: `/1/${index}` }">{{ subject.name }}</router-link>
                    </td>
                    <td>{{ subject.topics }}</td>
                    <td>{{ subject.time }}</td>
                </tr>
            </tbody>
        </table>
    </div>
    <router-view @subject-added="addSubject"></router-view>
</template>

<script setup>
import { ref } from 'vue';

// Inicjalizowanie listy przedmiotów
const subjects = ref([]);

// Ładowanie danych z Local Storage
const loadSubjectsFromLocalStorage = () => {
    const storedSubjects = localStorage.getItem('subjects');
    if (storedSubjects) {
        subjects.value = JSON.parse(storedSubjects);
    }
};

// Wywołaj tę funkcję na początku
loadSubjectsFromLocalStorage();

// Metoda do dodawania przedmiotu
const addSubject = (subject) => {
    subjects.value.push(subject); // Dodanie nowego przedmiotu do listy
    saveSubjectsToLocalStorage(); // Zapisz do Local Storage
};

// Funkcja do zapisywania przedmiotów w Local Storage
const saveSubjectsToLocalStorage = () => {
    localStorage.setItem('subjects', JSON.stringify(subjects.value));
};
</script>

<style scoped>
* {
    margin: auto;
}
.table.table-hover tr:hover {
    cursor: pointer;
}
#links{
    color: #f2b100;
    text-decoration: none;
}
</style>
