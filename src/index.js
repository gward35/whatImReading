import Vue from 'vue'
import axios from 'axios'
import StyledTitle from './components/StyledTitle'
import SlidePanel from './components/SlidePanel'
import PanelButton from './components/PanelButton'
import WeatherCard from './components/WeatherCard'
import AddCardButton from './components/AddCardButton'
import AddCardForm from './components/AddCardForm'

new Vue({
  el: '#app',
  components: {
    StyledTitle,
    SlidePanel,
    PanelButton,
    WeatherCard,
    AddCardButton,
    AddCardForm,
  },
  data() {
    return {
      data: null,
      showPanel: false,
      showForm: false,
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
