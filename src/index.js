import Vue from 'vue'
import StyledTitle from './components/StyledTitle'

new Vue({
  el: '#app',
  components: {
    StyledTitle,
  },
  mounted() {
    fetch(
      'http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=ab309905673fcd9e124e789edcc7ab70'
    )
      .then(res => {
        return res.json()
      })
      .then(data => {
        console.log(data)
      })
  },
})
