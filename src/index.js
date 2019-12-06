import Vue from 'vue'
import StyledTitle from './components/StyledTitle'
import SlidePanel from './components/SlidePanel'

new Vue({
  el: '#app',
  components: {
    StyledTitle,
    SlidePanel,
  },
  data() {
    return {
      weatherData: null,
      panelOpen: false,
    }
  },
  methods: {
    showPanel() {
      console.log('lick')
      this.panelOpen = !this.panelOpen
    },
  },
  mounted() {
    fetch(
      'http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=ab309905673fcd9e124e789edcc7ab70'
    )
      .then(res => {
        return res.json()
      })
      .then(data => {
        this.weatherData = data
        console.log(data)
      })
  },
})
