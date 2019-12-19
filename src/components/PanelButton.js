import styled from 'vue-styled-components'

const Button = styled.button`
  position: relative;
  padding: 10px;
  color: #fff;
  border-color: #f2f3d9;
  background-color: #151e3f;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover,
  &:focus {
    color: #151e3f;
    background-color: #f2f3d9;
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
