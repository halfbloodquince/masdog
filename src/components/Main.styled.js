import { keyframes, styled } from "styled-components";

const colours = [
  "red",
  "#ff9872",
  "#ffcd16",
  "black",
  "#ff5a94",
  "#e338aa",
  "#bf8abc",
  "#7b00ff",
  "#280aa1",
  "#073b6c",
];

// const squareAnimation = keyframes`
// 0% {
//     transform: rotate(0deg)
// }

// 25% {
//     transform: rotate(90deg);
//     border-radius: 30%;
// }

// 50% {
//     transform: rotate(180deg);
//     border-radius: 50%;
// }

// 75% {
//     transform: rotate(270deg);
//     border-radius: 30%;
// }
// 100% {
//     transform: rotate(360deg);
//     border-radius: 0px;
// }
// `;

export const PercentageBar = styled.div`
  width: 200px;
  height: 15px;
  border: 1px solid black;
  display: flex;
  justify-content: start;
`;

const fillPercetage = (percentage) => keyframes`
0% {
width: 0%;
}
100% {
  width: ${percentage * 100}%;
}

`;

export const PercentageFill = styled.div`
  width: ${(props) => `${props.percentage * 100}%`};
  /* width: 20px; */
  background-color: ${(props) => colours[props.index]};
  /* background-color: orangered; */
  height: 100%;
  animation: ${(props) => fillPercetage(props.percentage)} 3s linear forwards;
`;

const rotate = keyframes`
   from {
     transform: rotate(0deg);
   }

   to {
     transform: rotate(360deg);
  }
`;

export const ColouredSquare = styled.div`
  width: 10px;
  height: 10px;
  background-color: ${(props) => colours[props.index]};
  animation: ${(props) => (props.isloading == "true" ? rotate : "")} 3s linear infinite;
  /* animation: ${rotate} 3s linear infinite; */
  transform-origin: center;
`;

export const SquaresContainer = styled.div`
  /* position: absolute;
  left: 50%; */
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 4%;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

// Here we create a component that will rotate everything we pass in over two seconds
export const Rotate = styled.div`
  /* animation: ${rotate} 2s linear infinite; */
  transform-origin: center;
`;
