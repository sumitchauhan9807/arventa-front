const TaggedLists = (props) => {
  const data = props.data;
  // console.log(data);
  return (
    <section id="testimonials">
      <div className="wrap">
        <div className="section-head">
          <p className="route-tag">{data.blockHeading.subHeading}</p>
          <h2>{data.blockHeading.heading}</h2>
          <p>{data.blockHeading.content}</p>
        </div>
        <div className="grid-3">
          {data.lists.map((list, index) => {
            return (
              <div key={index} className="testi-card">
                <p className="testi-quote">{list.content}</p>
                <p className="testi-role mono">{list.tags}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default TaggedLists;
