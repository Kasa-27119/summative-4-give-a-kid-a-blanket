import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import wooCommerceApi from "../wooCommerceApi";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filterCategory, setFilterCategory] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await wooCommerceApi.get("/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products", error);
      }
    };
    fetchProducts();
  }, []);

  const handleFilterChange = (e) => {
    setFilterCategory(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  const filteredAndSortedProducts = products
    .filter((product) =>
      filterCategory ? product.categories.some((cat) => cat.name === filterCategory) : true
    )
    .sort((a, b) => {
      if (sortOrder === "asc") {
        return a.prices.price - b.prices.price;
      } else if (sortOrder === "desc") {
        return b.prices.price - a.prices.price;
      }
      return 0;
    });

  return (
    <div className="product-section">
      <h2>Products</h2>

      <div className="products-filter-box">
        <div className="form-field">
          <label>Filter By Type</label>
          <select
            name="product-type"
            className="product-field"
            value={filterCategory}
            onChange={handleFilterChange}
          >
            <option value="">Select Type</option>
            <option value="Tops">Tops</option>
            <option value="Bottoms">Bottoms</option>
            <option value="Accessories">Accessories</option>
            <option value="Blankets">Blankets</option>
          </select>
        </div>

        <div className="form-field">
          <label>Sort By</label>
          <select
            name="sort-order"
            className="product-field"
            value={sortOrder}
            onChange={handleSortChange}
          >
            <option value="">Select Sort</option>
            <option value="asc">Price: Low to High</option>
            <option value="desc">Price: High to Low</option>
          </select>
        </div>
      </div>

      <ul className="products-box">
        {filteredAndSortedProducts.map((product) => (
          <li key={product.id} className="product-item full-corners">
            {product.images && product.images.length > 0 && (
              <img
                src={product.images[0].src}
                alt={product.images[0].alt || product.name}
                className="product-img full-corners"
              />
            )}
            <div className="product-top-box">
              <h4 className="blue-text">{product.name}</h4>
              <h4 className="bold-text">${product.prices.price / 100}</h4>
            </div>
            <div className="product-details">
              <h6 className="dark-blue-text">{product.categories[0]?.name || "Uncategorized"}</h6>
              <p className="brown-text">{product.description}</p>
            </div>
            <div className="product-btn-box">
              <button
                onClick={() => handleAddToCart(product)}
                className="primary-btn"
              >
                <h5>Add to Cart</h5>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
