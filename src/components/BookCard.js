import styled from "vue-styled-components";

const Card = styled.div`
  position: relative;
  padding: 20px;
  color: #000;
  border: 1px solid #000;
  background-color: #ffc09f;

  @media screen and (max-width: 768px) {
    flex: 1 1 50%;
    max-width: 50%;
    margin-bottom: 30px;
    margin-right: 0;
  }

  @media screen and (min-width: 769px) and (max-width: 997px) {
    flex: 1 1 40%;
    max-width: 40%;
    margin-right: 30px;
    margin-bottom: 30px;

    &:nth-child(even) {
      margin-right: 0;
    }
  }

  @media screen and (min-width: 998px) and (max-width: 1194px) {
    flex: 1 1 19%;
    max-width: 19%;
    margin-right: 30px;
    margin-bottom: 30px;

    &:nth-child(3n) {
      margin-right: 0;
    }

    &:nth-child(4n) {
      margin-right: 30px;
    }
  }

  @media screen and (min-width: 1195px) {
    flex: 1 1 18%;
    max-width: 18%;
    margin-right: 30px;
    margin-bottom: 30px;

    &:nth-child(4n) {
      margin-right: 0;
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
