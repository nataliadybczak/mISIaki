<template>
    <h2 class="container mb-3">Edytuj Przedmiot</h2>
    <form class="container mb-3" @submit.prevent="submitForm">
        <div class="row">
            <div class="col-md-8">
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
                    />
                </div>
                <div class="mb-3">
                    <label for="plannedTime" class="form-label">Planowany czas (ilość godzin)</label>
                    <input
                        type="text"
                        class="form-control"
                        v-model="plannedTime" 
                    />
                </div>
                <h3>Egzaminy</h3>
            </div>
            <div class="mb-3">
                <button
                    class="btn btn-primary"
                    :disabled="isFormInvalid"
                >Zatwierdź</button>
            </div>
        </div>
    </form>
</template>