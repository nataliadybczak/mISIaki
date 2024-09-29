import {createRouter, createWebHashHistory} from 'vue-router';
import PageViewer from './views/PageViewer.vue';
import CreatePage from './views/CreatePage.vue';
import Pages from './views/Pages.vue';
import PagesList from './views/PagesList.vue';
import PageEdit from './views/PageEdit.vue';
import CreateSubject from './views/CreateSubject.vue';
import SubjectDetail from './views/SubjectDetail.vue';
import EditSubject from './views/EditSubject.vue';
import Login from './components/Login.vue';
import Register from './components/Register.vue';
const Calendar = () => import('./components/Calendar.vue');
const Subjects = () => import('./views/Subjects.vue');


const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        // { path: '/:index?', component: PageViewer, props: true },
        { path: '/', component: Login},
        {path: '/register', component: Register },
        { path: '/0', name: 'Calendar', component: Calendar},
        { path: '/1', name: 'Subjects', component: Subjects, children: [
            { path: 'add', component: CreateSubject },
            { path: 'edit', component: EditSubject},
            { path: ':id', component: SubjectDetail, props: true }
        ]},
        { 
            path: '/pages', 
            component: Pages,
            children: [
                { path: '', component: PagesList},
                { path: 'create', component: CreatePage },
                { path: ':index/edit', component: PageEdit, props: true}
            ] 
        },
    ]
});

export default router;