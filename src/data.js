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
        "link": {"text": "About", "url": "about.html"}, 
        "pageTitle": "About Page",
        "content": "This is the about content",
        "published": true
    },
    {
        "link": {"text": "Contact", "url": "contact.html"},
        "pageTitle": "Contact Page",
        "content": "This is the contact content",
        "published": false
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