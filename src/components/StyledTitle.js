import styled from 'vue-styled-components'

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #ff4947;
  &:hover,
  &:focus {
    color: #f07079;
  }
`

export default {
  name: 'StyledTitle',
  props: ['text'],
  components: {
    Title,
  },
  template: `<Title>{{ text }}</Title>`,
}
