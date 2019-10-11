

const adder = new Vue({
  el: '#adder',
  data: {
    guest: 'Manideep',
    
  },
  computed: {
    result: function () {
      
      return `your string length ${this.guest.length}, `
    }
  }
})
