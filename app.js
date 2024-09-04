const app = Vue.createApp({
    data() {
        return {
            showBooks: true,
            title: 'Titel',
            description: 'test',
            age: 40,
            x: 0,
            y: 0
        }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },
        handleEvent(event, param1) {
            console.log(event, event.type)
            if(param1){
                console.log(param1)
            }
        },
        handleMouseMove(event) {
            this.x = event.offsetY
            this.y = event.offsetY
        }
    }
})

app.mount('#app')