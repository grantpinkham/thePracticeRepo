Vue.createApp({
  data() {
    return {
      verse1: 'i got pros!,',
      verse2: 'in different area codes ',
      verse3: ' ... area codes ... ',
      verse4: 'pros!'
    }
  },
  methods: {
    fullVerse() {
      return `${this.verse1} \n ${this.verse2} ${this.verse3} ${this.verse4}`
    }
  }
}).mount('#app')