const app = Vue.createApp({
    data() {
        return {
            showBooks: true,
            title: 'Titel',
            description: 'test',
            age: 40,
            x: 0,
            y: 0,
            books: [
                { title: 'book1', author: 'You', img: 'assets/1.jpg', isFav: true },
                { title: 'book2', author: 'Me', img: 'assets/2.jpg', isFav: false },
                { title: 'book3', author: 'Us', img: 'assets/3.jpg', isFav: true },
            ],
            url: 'https://google.com',
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
        },
        toggleFav(book) {
            console.log(book.isFav)
            book.isFav = !book.isFav
        }
    }
})

app.mount('#app')