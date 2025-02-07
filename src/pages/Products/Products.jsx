import { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard/ProducCard";

export default function Products() {
    const [products, setProducts] = useState([]); // Default products
    const [filteredProducts, setFilteredProducts] = useState([]); // Default filtered products
    const [productType, setProductType] = useState(""); // Default product type
    const [sortOrder, setSortOrder] = useState(""); // Default sort order
  

  useEffect(() => {
    // Function to fetch products from the API
    async function fetchProducts(){
    try {
      // Fetch data from the API
      const response = await fetch("https://e-commercev2.onrender.com/api/products"); 

      // Check if the response status is not OK (e.g., 404, 500)
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // Parse the JSON response
      const data = await response.json();

      // Update state with fetched products
      setProducts(data);
      setFilteredProducts(data);

      // Log data for debugging purposes
      console.log(data);
    } catch (error) {
      // Handle errors (e.g., network issues, API failure)
      console.error("Failed to fetch products:", error);
    }
  };

  // Call the fetch function when the component mounts
  fetchProducts();

  }, []);

  useEffect(() => {
    // Filter products based on selected type
    const filtered = products.filter((product) => {
      return productType ? product.product_type === productType : true; // Use 'product_type' for filtering
    });

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
              // product card component
              <ProductCard product={product} key={index} />
            );
          })}
        </section>
      </div>
    </>
  );
}
