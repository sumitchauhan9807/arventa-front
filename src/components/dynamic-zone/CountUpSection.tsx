import CountUp from 'react-countup';

const CountUpSection = (props) => {
  // console.log(props);
  return (
    <section id="stats">
      <div className="wrap stats-row">
        {props.countUpSection.map((item, index) => {
          return (
            <div key={index} className="stat-item">
              <div className="stat-num">
                {item.count && <CountUp decimals={item.count.toString().split('.')[1]?.length || 0} start={0} end={item.count} duration={2} enableScrollSpy scrollSpyOnce />}
                {item.afterCountText}
              </div>
              <div className="stat-label">{item.title}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default CountUpSection;
