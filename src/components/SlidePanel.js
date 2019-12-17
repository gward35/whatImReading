import styled from 'vue-styled-components'
import PanelButton from './PanelButton'

const Panel = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding: 20px;
  min-height: 100%;
  width: 400px;
  background-color: #e7e7e7;
  box-shadow: 0 2px 2px #030027;
`

let SlidePanel = {
  name: 'SlidePanel',
  props: ['text'],
  components: {
    Panel,
    PanelButton,
  },
  methods: {
    handleClick() {
      this.$emit('click')
    },
  },
  template: `<Panel class="panel"><PanelButton @click="handleClick" text="Close"></PanelButton>{{ text }}</Panel>`,
}

export default SlidePanel
