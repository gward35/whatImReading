import styled from "vue-styled-components";

const Card = styled.div`
  position: relative;
  padding: 20px;
  color: #2c2637;
  border-radius: 4px;
  border-bottom: 5px solid #c16e70;
  background-color: #e7e7e7;
  box-shadow: 2px 1px 4px 1px #d2d2d2;
  margin-right: 30px;
  margin-bottom: 30px;
  flex: 1 1 30%;
  &:nth-child(even) {
    margin-right: 0;
  }
`;

let BookCard = {
  name: "BookCard",
  props: ["data"],
  components: {
    Card,
  },
  template: `<Card><slot name="header"></slot><slot name="content"></slot></Card>`,
};

export default BookCard;
