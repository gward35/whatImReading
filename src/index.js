import Vue from 'vue'
import axios from 'axios'
import StyledTitle from './components/StyledTitle'
import SlidePanel from './components/SlidePanel'
import PanelButton from './components/PanelButton'
import WeatherCard from './components/WeatherCard'

new Vue({
  el: '#app',
  components: {
    StyledTitle,
    SlidePanel,
    PanelButton,
    WeatherCard,
  },
  data() {
    return {
      data: null,
      show: false,
    }
  },
  mounted() {
    axios
      .get(
        'http://api.openweathermap.org/data/2.5/group?id=4366164,5037649,5391811&units=imperial&appid=ab309905673fcd9e124e789edcc7ab70'
      )
      .then(res => {
        this.data = res.data.list
        console.log(this.data)
      })
  },
})
