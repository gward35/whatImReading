import styled from "vue-styled-components";

const Card = styled.div`
  position: relative;
  padding: 20px;
  color: #000;
  border: 1px solid #5facbf;
  background-color: #c5e1e8;
  transition: border-bottom-right-radius 1s, box-shadow 0.8s, transform 1s;
  overflow: hidden;
  &:after {
    position: absolute;
    bottom: 0px;
    right: -20px;
    width: 0px;
    height: 0px;
    content: "";
    background: linear-gradient(145deg, #c5e1e8 0%, #a7d2dc 50%);
    box-shadow: -2px 2px 6px 2px #5facbf;
    transform: skew(8deg);
    transition: width 1s, height 1s;
  }
  &:hover {
    border-bottom-right-radius: 60px;
    box-shadow: 5px 0 20px 0 #5facbf;
    &:after {
      width: 65px;
      height: 45px;
      border-top-left-radius: 1px;
    }
  }

  @media screen and (max-width: 768px) {
    flex: 1 1 75%;
    max-width: 75%;
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
