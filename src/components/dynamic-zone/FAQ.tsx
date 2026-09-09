const FAQ = (props) => {
  // console.log(props);
  return (
    <section id="faq">
      <div className="wrap wrap-narrow">
        <div className="section-head">
          <p className="route-tag">{props.blockHeading.subHeading}</p>
          <h2>{props.blockHeading.heading}</h2>
        </div>
        <div className="faq-list">
          {props.qna.map((item, index) => {
            return (
              <details key={index} className="faq-item">
                <summary>
                  {item.question}
                  <span className="faq-icon" />
                </summary>
                <p className="faq-answer">{item.answer}</p>
              </details>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default FAQ;
