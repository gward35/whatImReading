import Vue from 'vue'
import styled from 'vue-styled-components'

const StyledTitle = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #ff4947;
  &:hover,
  &:focus {
    color: #f07079;
  }
`

new Vue({
  el: '#app',
  components: {
    StyledTitle,
  },
  template: '<StyledTitle> Hi </StyledTitle>',
})
