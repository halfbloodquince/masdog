import { PercentageBar, PercentageFill } from "./Main.styled";

const SimplePercentages = ({ data, isLoaded }) => {
  return (
    <div className="output--content--container">
      {isLoaded
        ? data.map((el, i) => (
            <div className="mapped--data" key={i}>
              <div className="bar--container">
                <PercentageBar>
                  <PercentageFill index={i} percentage={el.value > 0 ? el.value.toFixed(2) : el.value} />
                </PercentageBar>
              </div>
              <div className="results--container">
                <div className="element--title">{el.name}</div>
                <div className="element--number">
                  {el.value > 0 ? (el.value * 100).toFixed(0) : el.value}%
                </div>
              </div>
            </div>
          ))
        : null}
    </div>
  );
};

export default SimplePercentages;
