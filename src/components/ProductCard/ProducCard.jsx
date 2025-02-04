// product card component
export default function ProductCard({ product }) {
  return (
    <div className="product-card">
        <img src={product.img} alt={product.name} />
        <section className="product-section">
            <h3 className="name">{product.name}</h3>
            <p className="description">{product.description}</p>
            <p className="price">${product.price}</p>
        </section>
    </div>
  );
}