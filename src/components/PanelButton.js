import styled from 'vue-styled-components'

const Button = styled.button`
  position: relative;
  padding: 10px;
  color: #fff;
  border-color: #ff4947;
  background-color: #f07079;
  box-shadow: 2px 2px 5px #f07079;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: #ff4947;
  }
`

let PanelButton = {
  name: 'PanelButton',
  props: ['text'],
  components: {
    Button,
  },
  methods: {
    handleClick() {
      this.$emit('click')
    },
  },
  template: `<Button @click="handleClick">{{ text }}</Button>`,
}

export default PanelButton
