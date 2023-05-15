import React from "react";
import styles from "./foodApp.module.css";
import { useDispatch, useSelector } from "react-redux";
import foodBg from "../../assets/food.jpg";
import { CartItem, CartState, addItem, removeItem, updateItemCount } from './foodStore/reducer';

const initialState = { id: "", name: "", count: 0, amount: 0 };
const FoodApp: React.FC = () => {
  const cartState = useSelector((state:{cart:CartState})=>state.cart?.items);
  const dispatch = useDispatch();
  const selectedRecords: CartItem[] = [];
  const foodItems: CartItem[] = [
    {
      id: "1",
      name: "Mutton Biriyani",
      count: 0,
      amount: 250,
    },
    {
      id: "2",
      name: "Chicken Biriyani",
      count: 0,
      amount: 200,
    },
    {
      id: "3",
      name: "Grill Chicken with Mayo",
      count: 0,
      amount: 350,
    },
    {
      id: "4",
      name: "Peppy Panneer Pizza",
      count: 0,
      amount: 300,
    },
    {
      id: "5",
      name: "Butter Naan & Panneer butter masala",
      count: 0,
      amount: 150,
    },
  ];

  const handleAddItem = (data:CartItem) => {
    const newItem = {
      id: data.id,
      name: data.name,
      count: data.count,
      amount: data.amount
    };
    dispatch(addItem(newItem));
  };

  const handleRemoveItem = (itemId: string) => {
    dispatch(removeItem(itemId));
  };

  const handleUpdateQuantity = (itemId: string, count: number) => {
    dispatch(updateItemCount({ id: itemId, count }));
  };
console.log({cartState})
  return (
    <div
      className={styles.parent}
      style={{
        backgroundImage: `url(${foodBg})`,
      }}
    >
      <div className={styles.container}>
        <h2 className={styles.title}>FOOD APP</h2>
        <div className={styles.card}>
          {foodItems.map((item,idx) => {
            return (
              <div className={styles.foodCard} key={item.id}>
                <div className={styles.foodContent}>
                  <label className={styles.foodName}>{item.name}</label>
                  <label className={styles.amount}>{item.amount}Rs</label>
                </div>
                <div className={styles.buttonArea}>
                  <input
                  key={idx}
                    className={styles.foodCount}
                    type='number'
                    defaultValue={item.count}
                    onChange={() => {handleUpdateQuantity(item.id,item.count)}}
                    min={0}
                    max={100}
                  />
                  <div className={styles.buttonSection}>
                  <button className={styles.addButton} onClick={() =>{handleAddItem(item)}}>
                    Add +
                  </button>
                  <button className={styles.clearButton} onClick={() => {handleRemoveItem(item.id)}}> 
                    Clear
                  </button>
                </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.container}>
        <h2 className={styles.title}>CART DATA</h2>
        <div className={styles.card}>
          <div className={styles.resultCard}>
            {!!selectedRecords.length &&
              selectedRecords.map((cart: any) => {
                return (
                  <div className={styles.resultContent} key={cart.id}>
                    <div style={{ display: "flex" }}>
                      <label className={styles.foodName}>Food Name :</label>
                      <label className={styles.resultValue}>{cart.name}</label>
                    </div>
                    <div style={{ display: "flex" }}>
                      <label className={styles.foodName}>Food ID :</label>
                      <label className={styles.resultValue}>{cart.id}</label>
                    </div>
                    <div style={{ display: "flex" }}>
                      <label className={styles.foodName}>Amount :</label>
                      <label className={styles.resultValue}>{cart.amount}Rs</label>
                    </div>
                    <div style={{ display: "flex" }}>
                      <label className={styles.foodName}>Count :</label>
                      <label className={styles.resultValue}>{cart.count}</label>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodApp;
