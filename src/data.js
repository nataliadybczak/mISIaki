import Calendar from "./components/Calendar.vue";
const pagesKey = 'pages';

let pagesStore = 
[
    {
        "link": {"text": "Calendar", "url": "index.html"}, 
        "pageTitle": "Calendar",
        "content": "",
        "published": true
    },
    {
        "link": {"text": "Przedmioty", "url": "about.html"}, 
        "pageTitle": "Przedmioty",
        "content": "",
        "published": true
    },
    {
        "link": {"text": "Pomodoro", "url": "contact.html"},
        "pageTitle": "Pomodoro",
        "content": "https://pomofocus.io/",
        "published": true
    }
]

function save(){
    localStorage.setItem(pagesKey, JSON.stringify(pagesStore));
}


export default {
    addPage(page) {
        pagesStore.push(page);
        save();
    },

    getAllPages(){
        return pagesStore;
    },

    getSinglePage(index){
        return pagesStore[index];
    },

    editPage(index, page){
        pagesStore[index] = page;
        save();
    },
    
    removePage(index) {
        pagesStore.splice(index, 1);
        save();
    }
}