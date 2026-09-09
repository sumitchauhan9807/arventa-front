const ProductsSection = (props) => {
  // console.log(props);
  return (
    <section id="products">
      <div className="glow glow-bottom" />
      <div className="wrap">
        <div className="section-head">
          <p className="route-tag">{props.blockHeading.subHeading}</p>
          <h2>{props.blockHeading.heading}</h2>
          <p>{props.blockHeading.content}</p>
        </div>
        <div className="grid-2">
          {props.proudctsLists.map((product, index) => {
            if (product.active) {
              return (
                <div key={index} className="card product-card" style={{ borderColor: 'var(--accent)' }}>
                  <p className="product-tag mono">{product.blockHeading.subHeading}</p>
                  <h3 className="product-name">{product.blockHeading.heading}</h3>
                  <p className="desc">{product.blockHeading.content}.</p>
                  <p className="built-for">
                    <strong>{product.boldText}</strong> {product.text}
                  </p>
                  <a href={product.button.link} target="_blank" rel="noopener" className="btn btn-fill">
                    {product.button.name}
                  </a>
                </div>
              );
            } else {
              return (
                <div key={index} className="card product-card callcon">
                  <p className="product-tag mono">{product.blockHeading.subHeading}</p>
                  <h3 className="product-name">{product.blockHeading.subHeading}</h3>
                  <p className="desc">{product.blockHeading.subHeading}</p>
                  <p className="built-for">
                    <strong>{product.boldText}</strong> {product.text}
                  </p>
                  <a href={product.button.link} className="btn btn-outline">
                    {product.button.name}
                  </a>
                </div>
              );
            }
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
