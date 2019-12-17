import styled from 'vue-styled-components'

const CardButton = styled.button`
  position: absolute;
  bottom: 30px;
  right: 30px;
  width: 60px;
  height: 60px;
  border: 0;
  border-radius: 50%;
  background-color: #151e3f;
  color: #fff;
  padding: 5px 0 10px 0;
  font-weight: 600;
  font-size: 2rem;
`

let AddCardButton = {
  name: 'AddCardButton',
  components: {
    CardButton,
  },
  methods: {
    handleClick() {
      this.$emit('click')
    },
  },
  template: `<CardButton @click="handleClick">+</CardButton>`,
}

export default AddCardButton
