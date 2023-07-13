import axios from "axios";
import { useState } from "react";
import image from "../assets/1z.jpg";
import { ColouredSquare, Rotate, SquaresContainer } from "./Main.styled";
import SimplePercentages from "./SimplePercentages";
// import { PercentageBar, PercentageFill } from "./Main.styled";

// const titles = {
//   abstractIAC: "Abstract Ideas and Concepts",
//   abstractNRA: "Abstract, Non-representational Art",
//   bible: "Bible",
//   classical: "Classical Mythology and Ancient History",
//   history: "History",
//   human: "Human being, Man in general",
//   literature: "Literature",
//   nature: "Nature",
//   religion: "Religion and Magic",
//   scc: "Society, Civilization, Culture",
// };

let emptyDataArray = [
  {
    name: "Abstract Ideas and Concepts",
    value: 0,
  },
  {
    name: "Abstract, Non-representational Art",
    value: 0,
  },
  { name: "Bible", value: 0 },
  {
    name: "Classical Mythology and Ancient History",
    value: 0,
  },
  { name: "History", value: 0 },
  {
    name: "Human being, Man in general",
    value: 0,
  },
  { name: "Literature", value: 0 },
  { name: "Nature", value: 0 },
  {
    name: "Religion and Magic",
    value: 0,
  },
  {
    name: "Society, Civilization, Culture",
    value: 0,
  },
];

let formData = new FormData();
let url = "https://europe-west1-proven-fort-392507.cloudfunctions.net/icon_class";

formData.append("image", image);

const Main = () => {
  //   const [data, setData] = useState({
  //     abstractIAC: 0,
  //     abstractNRA: 0,
  //     bible: 0,
  //     classical: 0,
  //     history: 0,
  //     human: 0,
  //     literature: 0,
  //     nature: 0,
  //     religion: 0,
  //     scc: 0,
  //   });
  const [isLoading, setIsLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  console.log(String(isLoading));
  const [data, setData] = useState(emptyDataArray);
  const [img, setImg] = useState();
  const [displayImage, setDisplayImage] = useState();

  const handleChange = (e) => {
    console.log(e.target.files[0]);
    setImg({ image: e.target.files[0] });
    setDisplayImage(URL.createObjectURL(e.target.files[0]));
    setData(emptyDataArray);
  };

  const uploadHandler = () => {
    const fd = new FormData();
    fd.append("image", img.image);
    setIsLoading(true);
    axios
      .post(url, fd, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res.data),
          setData([
            {
              name: "Abstract Ideas and Concepts",
              value: res.data["Abstract Ideas and Concepts"],
            },
            {
              name: "Abstract, Non-representational Art",
              value: res.data["Abstract, Non-representational Art"],
            },
            { name: "Bible", value: res.data["Bible"] },
            {
              name: "Classical Mythology and Ancient History",
              value: res.data["Classical Mythology and Ancient History"],
            },
            { name: "History", value: res.data["History"] },
            {
              name: "Human being, Man in general",
              value: res.data["Human being, Man in general"],
            },
            { name: "Literature", value: res.data["Literature"] },
            { name: "Nature", value: res.data["Nature"] },
            {
              name: "Religion and Magic",
              value: res.data["Religion and Magic"],
            },
            {
              name: "Society, Civilization, Culture",
              value: res.data["Society, Civilization, Culture"],
            },
          ]);
        setIsLoading(false);
        setIsLoaded(true);
      });
  };

  return (
    <div className="Main">
      {/* <img src={image} /> */}
      <div className="buttons">
        <label htmlFor="file--upload" className="custom-file-upload">
          Upload
        </label>
        <input className="input" id="file--upload" type="file" onChange={(e) => handleChange(e)} />
        {/* <div className="icon">
          {data.map((el, i) => (
            <ColouredSquare key={i} index={i}></ColouredSquare>
          ))}
        </div> */}
        <button className="upload--button" onClick={() => uploadHandler()}>
          Generate
        </button>
      </div>
      <div className="output--container">
        <div className="output--image--container">
          {displayImage ? <img className="output--image" src={displayImage} alt="img" /> : null}
        </div>
        <SquaresContainer>
          {data.map((el, i) => (
            <Rotate key={i}>
              <ColouredSquare
                //   key={i}
                index={i}
                isloading={String(isLoading)}
              ></ColouredSquare>
            </Rotate>
          ))}
        </SquaresContainer>
        <SimplePercentages data={data} isLoaded={isLoaded} />
      </div>
    </div>
  );
};

export default Main;
