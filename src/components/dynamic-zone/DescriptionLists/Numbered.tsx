const Numbered = (props) => {
  const data = props.data;
  // console.log(data);
  return (
    <section id="how" className="on-grey">
      <div className="wrap">
        <div className="section-head">
          <p className="route-tag">{data.blockHeading.subHeading}</p>
          <h2>{data.blockHeading.heading}</h2>
        </div>
        <div className="steps">
          {data.lists.map((list, index) => {
            return (
              <div key={index} className="step">
                <div className="step-num mono">0{index+1}</div>
                <h3>{list.heading}</h3>
                <p>{list.content}</p>
                <div className="step-line" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Numbered;
