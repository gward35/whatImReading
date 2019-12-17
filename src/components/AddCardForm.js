import styled from 'vue-styled-components'

const CardForm = styled.form`
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 4px;
  border-bottom: 5px solid #dc9e82;
  background-color: #e7e7e7;
  box-shadow: 2px 1px 4px 1px #d2d2d2;
  padding: 20px;
`

let AddCardForm = {
  name: 'AddCardForm',
  components: {
    CardForm,
  },
  template: `<CardForm class="form"><label for="add-city">Add City</label><input type="text" id="add-city value="" /></CardForm>`,
}

export default AddCardForm
