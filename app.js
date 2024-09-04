const app = Vue.createApp({
    data() {
        return {
            showBooks: true,
            title: 'Titel',
            description: 'test',
            age: 40
        }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        }
    }
})

app.mount('#app')