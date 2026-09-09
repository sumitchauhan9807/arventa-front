const SVG = (props) => {
  const data = props.data;
  // console.log(data);

  return (
    <section id="why" className="on-lime">
      <div className="wrap">
        <div className="section-head" style={{ maxWidth: '760px' }}>
          <p className="route-tag">{data.blockHeading.subHeading}</p>
          <h2 style={{ fontSize: '38px' }}>{data.blockHeading.heading}</h2>
        </div>
        <div className="grid-4">
          {data.lists.map((list, index) => {
            return (
              <div key={index} className="why-item">
                <span dangerouslySetInnerHTML={{ __html: list.svg }}></span>
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
export default SVG;
