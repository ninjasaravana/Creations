import React, { useCallback, useState, useEffect } from "react";
import styles from "./Product.module.css";

type product = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}[];

const Product: React.FC = () => {
  const [products, setProducts] = useState<product>([]);
  const [desc, setDesc] = useState<number | null>(null);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((data) => data.json())
      .then((data) => {
        // console.log(data);
        setProducts(data.products);
      });
  }, []);

  const showDescription = (id: number) => {
    if (id !== desc) {
      setDesc(id);
    } else {
      setDesc(null);
    }
  };

  const handlePrice = (event: any) => {
    console.log(event.target.value);
    if (event.target.value === "Price Low to High") {
      let sorted = [...products].sort((a, b) => a.price - b.price);
      console.log({ sorted });
      setProducts(sorted);
    }
    if (event.target.value === "Price High to Low") {
      let sorted = [...products].sort((a, b) => b.price - a.price);
      console.log({ sorted });
      setProducts(sorted);
    }
  };

  return (
    <div className={styles.App}>
      <select onChange={handlePrice}>
        <option>Select</option>
        <option>Price Low to High</option>
        <option>Price High to Low</option>
      </select>

      {products.length > 0 && (
        <div>
          {products.map((data, idx) => (
            <div className={styles.cardContainer} key={idx}>
              <div className={styles.imageContainer}>
                <img
                  className={styles.productImage}
                  src={data.images[0]}
                  alt={data.title}
                />
              </div>
              <div className={styles.productContainer}>
                <p> {data.title}</p>
                <span> {data.brand}</span>
                <span> {data.price}</span>
                <button
                  className={styles.buttonStyle}
                  onClick={() => showDescription(data.id)}
                >
                  {" "}
                  Description
                </button>
                {desc === data.id && (
                  <span className={styles.description}>{data.description}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Product;
