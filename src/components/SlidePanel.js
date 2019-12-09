import styled from 'vue-styled-components'

const panelProps = { open: String }

const Panel = styled('div', panelProps)`
  position: relative;
  height: 100%;
  width: 400px;
  margin: 30px;
  background-color: #f07079;
  box-shadow: 2px 2px 5px #f07079;
  left: ${props => (props.open ? '0px' : '-400px')};
`

let SlidePanel = {
  name: 'SlidePanel',
  props: ['text'],
  components: {
    Panel,
  },
  methods: {
    handleClick() {
      this.$emit('click')
    },
  },
  template: `<Panel @click="handleClick">{{ text }}</Panel>`,
}

export default SlidePanel
