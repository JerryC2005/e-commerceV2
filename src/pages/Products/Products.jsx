import { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://e-commercev2.onrender.com/api/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <>
      <header className="product-header">
        <h2>Products</h2>
      </header>

      <div className="container">
        <section className="product-grid">
          {products.map((product, index) => {
            return (
              <div className="product-card" key={index}>
                <img src={product.img} alt={product.name}/>
                <section className="product-section">
                  <h3 className="name">{product.name}</h3>
                  <p className="description">{product.description}</p>
                  <p className="price">${product.price}</p>
                </section>
              </div>
            );
          })}
        </section>
      </div>
    </>
  );
}
