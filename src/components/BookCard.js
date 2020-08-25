import styled from "vue-styled-components";

const Card = styled.div`
  position: relative;
  padding: 20px;
  color: #000;
  border: 1px solid #000;
  background-color: #ffc09f;
  flex: 1 1 19%;
  max-width: 19%;
  margin-right: 3%;
  margin-bottom: 3%;

  &:nth-child(4n) {
    margin-right: 0;
  }

  &:last-child {
    margin-right: 0;
  }

  @media screen and (max-width: 1169px) {
    &:nth-child(3n) {
      margin-right: 0;
    }

    &:nth-child(4n) {
      margin-right: 3%;
    }
  }
`;

let BookCard = {
  name: "BookCard",
  props: ["data"],
  components: {
    Card,
  },
  template: `<Card><slot name="image"></slot><slot name="header"></slot><slot name="content"></slot></Card>`,
};

export default BookCard;
