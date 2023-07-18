import React, { useState } from "react";

export default function Products({addItem}) {

  const [products] = useState([
    {
      name: "boat",
      cost: "$4.20",
      image:
        "https://fastly.picsum.photos/id/21/3008/2008.jpg?hmac=T8DSVNvP-QldCew7WD4jj_S3mWwxZPqdF0CNPksSko4",
    },
    {
      name: "flower",
      cost: "$4.20",
      image:
        "https://fastly.picsum.photos/id/28/4928/3264.jpg?hmac=GnYF-RnBUg44PFfU5pcw_Qs0ReOyStdnZ8MtQWJqTfA",
    },
  ]);


  return (
    <>
      <h1>Products</h1>
      <div className="products">
        {products.map((product, index) => (
          <div className="product" key={index}>
            <h3>{product.name}</h3>
            <h4>{product.cost}</h4>
            <img height={"100px"} src={product.image} alt={product.name} />
            <button onClick={() => addItem(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </>
  );
}
