import styled from 'vue-styled-components'

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #151e3f;
  &:hover,
  &:focus {
    color: #030027;
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
