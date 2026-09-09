const BlackBackground = (props) => {
  const data = props.data;
  // console.log(data);
  return (
    <section id="industries">
      <div className="wrap">
        <div className="section-head">
          <p className="route-tag">{data.blockHeading.subHeading}</p>
          <h2>{data.blockHeading.heading}</h2>
        </div>
        <div className="grid-3">
          {data.lists.map((list, index) => {
            return (
              <div key={index} className="card industry-card">
                <h3>{list.heading}</h3>
                <p>{list.content}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default BlackBackground;
