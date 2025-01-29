import { useEffect, useState } from "react";

export default function Products() {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [productType, setProductType] = useState("");
    const [sortOrder, setSortOrder] = useState(""); // Default sort order
  

  useEffect(() => {
    fetch("https://e-commercev2.onrender.com/api/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        console.log(data);
        setFilteredProducts(data);
      });
  }, []);

  useEffect(() => {
    // Filter products based on selected type
    const filtered = products.filter((product) => {
      return productType ? product.product_type === productType : true; // Use 'product_type' for filtering
    });

    // Sort filtered products based on selected sort order
    // Sort filtered products based on selected sort order
    const sorted = filtered.sort((a, b) => {
      if (sortOrder === "asc") {
        return Number(a.price) - Number(b.price); // Lowest to Highest
      } else if (sortOrder === "desc") {
        return Number(b.price) - Number(a.price); // Highest to Lowest
      }
      return 0; // No sorting if sortOrder is empty
    });

    setFilteredProducts(sorted);
  }, [productType, sortOrder, products]);

  const handleTypeChange = (event) => {
    setProductType(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };


  return (
    <>
      <header className="product-header">
        <h2>Products</h2>
      </header>

      <div className="container">
        <label>
          Product Type:
          <select value={productType} onChange={handleTypeChange}>
            <option value="">All</option>
            <option value="Yu-Gi-Oh!">Yu-Gi-Oh</option>
            <option value="Pokemon">Pokémon</option>
            <option value="Dragon Ball Super">Dragon Ball Super</option>
          </select>
        </label>

        <label>
          Sort By Price:
          <select value={sortOrder} onChange={handleSortChange}>
            <option value="">Default</option>
            <option value="asc">Lowest to Highest</option>
            <option value="desc">Highest to Lowest</option>
          </select>
        </label>
      </div>

      <div className="container">
        <section className="product-grid">
        {filteredProducts.map((product, index) => {
            return (
              <div className="product-card" key={index}>
                <img src={product.img} alt={product.name} />
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
