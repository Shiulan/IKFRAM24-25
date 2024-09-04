const app = Vue.createApp({
    data() {
        return {
            title: 'Titel',
            description: 'test',
            age: 40
        }
    },
    methods: {
        changeTitle(param1) {
            // this.title = 'Title from method'
            this.title = param1
        }
    }
})

app.mount('#app')