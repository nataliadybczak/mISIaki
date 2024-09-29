<template>
    <navbar></navbar>
    <router-view>
    </router-view>
    
</template>

<script>
import Navbar from './components/Navbar.vue';
import Calendar from './components/Calendar.vue';


export default {
    components: {
        Navbar, 
        Calendar
    },
    methods: {
        pageCreated(pageData){
            console.log('Page created: ', pageData);
            this.pages.push(pageData);
        }
    }
}
</script>
