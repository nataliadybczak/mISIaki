<template>
    <h2 class="container mb-3">Dodaj Przedmiot</h2>
    <form class="container mb-3" @submit.prevent="submitForm">
        <div class="row">
            <div class="col-md-8">
                <div class="mb-3">
                    <label for="subjectName" class="form-label">Nazwa przedmiotu</label>
                    <input
                        type="text"
                        class="form-control"
                        v-model="subjectName" 
                        required
                    />
                </div>
                <div class="mb-3">
                    <label class="form-label">Poziom trudności</label>
                    <p>
                        <label><input type="radio" name="level" value="easy" v-model="difficulty" checked="checked"> Łatwy</label>
                    </p>
                    <p>
                        <label><input type="radio" name="level" value="medium" v-model="difficulty"> Średni</label>
                    </p>
                    <p>
                        <label><input type="radio" name="level" value="hard" v-model="difficulty"> Trudny</label>
                    </p>
                </div>
                <div class="mb-3">
                    <label for="topicsCount" class="form-label">Ilość tematów do nauki</label>
                    <input
                        type="number"
                        class="form-control"
                        v-model="topicsCount" 
                        required
                    />
                </div>
                <div class="mb-3">
                    <label for="plannedTime" class="form-label">Planowany czas (ilość godzin)</label>
                    <input
                        type="text"
                        class="form-control"
                        v-model="plannedTime" 
                        required
                    />
                </div>
            </div>
            <div class="mb-3">
                <button
                    class="btn btn-primary"
                    :disabled="isFormInvalid"
                >Dodaj</button>
            </div>
        </div>
    </form>
</template>

<script setup>
import { ref, computed, defineEmits } from 'vue';

const emit = defineEmits();

const subjectName = ref('');
const difficulty = ref('easy');
const topicsCount = ref(0);
const plannedTime = ref(''); // Dodano zmienną na planowany czas

const isFormInvalid = computed(() => !subjectName.value || topicsCount.value < 0 || !plannedTime.value);

// Metoda do przesyłania formularza
const submitForm = () => {
    const newSubject = {
        name: subjectName.value,
        difficulty: difficulty.value, // Możesz dodać poziom trudności do obiektu
        topics: topicsCount.value,
        time: plannedTime.value // Użyj wprowadzonego czasu
    };

    emit('subject-added', newSubject); // Emituj zdarzenie z nowym przedmiotem
    resetForm(); // Zresetuj formularz
};

// Funkcja do resetowania formularza
const resetForm = () => {
    subjectName.value = '';
    difficulty.value = 'easy';
    topicsCount.value = 0;
    plannedTime.value = ''; // Zresetuj planowany czas
};
</script>




