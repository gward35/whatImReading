import styled from 'vue-styled-components'

const Card = styled.div`
  position: relative;
  padding: 10px;
  color: #2c2637;
  border-radius: 4px;
  border-color: #2c2637;
  background-color: #e7e7e7;
  box-shadow: 2px 2px 5px #2c2637;
  &:hover,
  &:focus {
    background-color: #d2d2d2;
  }
`

let WeatherCard = {
  name: 'WeatherCard',
  props: ['weather-data'],
  components: {
    Card,
  },
  template: `<Card>{{ weather-data }}</Card>`,
}

export default WeatherCard
