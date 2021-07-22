// From the movie "The Princess Bride"
Vue.createApp({
  data() {
    return {
      firstName: 'Inigo',
      lastName: 'Montoya'
    }
  },
  methods: {
    famousMovieQuote() {
      return `Hello. My name is ${firstName} ${lastName} You killed my father. Prepare to die.`
    }
  }
}).mount('#app')