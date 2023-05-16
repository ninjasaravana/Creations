import React, { useCallback, useMemo, useState } from "react";
import styles from "./foodApp.module.css";
import { useDispatch, useSelector } from "react-redux";
import foodBg from "../../assets/food.jpg";
import money from "../../assets/money.png";
import clearCartIcon from "../../assets/clear.png";
import {
  CartItem,
  CartState,
  addItem,
  clearCart,
  removeItem,
  updateItemCount,
} from "./redux/reducer";

const FoodApp: React.FC = () => {
  const cartState = useSelector(
    (state: { cart: CartState }) => state.cart.items
  );
  const dispatch = useDispatch();
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

  const initialStateCount = foodItems
    .map((food) => {
      return { [food.id]: food.count };
    })
    .reduce((result, obj) => {
      return { ...result, ...obj };
    }, {});

  const [count, setCount] = useState(initialStateCount);
  const handleAddItem = (data: CartItem) => {
    const newItem = {
      id: data.id,
      name: data.name,
      count: count[data.id],
      amount: data.amount,
    };
    dispatch(addItem(newItem));
  };

  const handleRemoveItem = useCallback(
    (itemId: string) => {
      dispatch(removeItem(itemId));
      setCount((data) => {
        return { ...data, [itemId]: 0 };
      });
      return;
    },
    [dispatch]
  );

  const handleUpdateQuantity = useCallback(
    (itemId: string, count: number) => {
      setCount((data) => {
        return { ...data, [itemId]: count };
      });
      dispatch(updateItemCount({ id: itemId, count }));
    },
    [dispatch]
  );
  const handleClearCart = useCallback(() => {
    setCount(initialStateCount);
    dispatch(clearCart());
  }, [dispatch, initialStateCount]);

  const totalAmount = useMemo(() => {
    let total = 0;
    cartState.map((item) => {
      total = total + item.amount * item.count;
      return total;
    });
    return total;
  }, [cartState]);

  return (
    <div
      className={styles.parent}
      style={{
        backgroundImage: `url(${foodBg})`,
      }}
    >
      <div className={styles.container}>
        <h2 className={styles.title}>FOOD APP</h2>
        <div className={styles.clearCart}>
          <img
            className={styles.clearCartIcon}
            src={clearCartIcon}
            alt='Clear Cart'
            onClick={handleClearCart}
            title='Clear Cart'
          />
          <div className={styles.strike}></div>
        </div>
        <div className={styles.card}>
          {foodItems.map((item) => {
            return (
              <div className={styles.foodCard} key={item.id}>
                <div className={styles.foodContent}>
                  <label className={styles.foodName}>{item.name}</label>
                  <label className={styles.amount}>₹{item.amount}</label>
                </div>
                <div className={styles.buttonArea}>
                  <input
                    className={styles.foodCount}
                    type='number'
                    value={count[item.id]}
                    defaultValue={0}
                    onChange={(e) => {
                      handleUpdateQuantity(item.id, parseInt(e.target.value));
                    }}
                    min={0}
                    max={100}
                  />
                  <div className={styles.buttonSection}>
                    <button
                      className={styles.addButton}
                      title={
                        !(count[item.id] > 0) ? "Add atleast on item" : "Add"
                      }
                      onClick={() => {
                        handleAddItem(item);
                      }}
                      disabled={!(count[item.id] > 0)}
                    >
                      Add +
                    </button>
                    <button
                      className={styles.clearButton}
                      onClick={() => {
                        handleRemoveItem(item.id);
                      }}
                    >
                      Clear
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles.totalCard}>
          <h2 className={styles.total}>
            Total : {!!totalAmount ? totalAmount : 0}
          </h2>
          <img className={styles.moneyIcon} src={money} alt='money' />
        </div>
      </div>
      <div className={styles.container}>
        <h2 className={styles.title}>CART DATA</h2>
        <div className={styles.card}>
          <div className={styles.resultCard}>
            {!!cartState.length ? (
              cartState.map((cart: any) => {
                return (
                  <div className={styles.resultContent} key={cart.id}>
                    <div>
                      <div style={{ display: "flex" }}>
                        <label className={styles.resultName}>Food Name :</label>
                        <label className={styles.resultValue}>
                          {cart.name}
                        </label>
                      </div>
                      <div style={{ display: "flex" }}>
                        <label className={styles.resultName}>Food ID :</label>
                        <label className={styles.resultValue}>{cart.id}</label>
                        <label className={styles.resultName}>Cost :</label>
                        <label className={styles.resultValue}>
                          ₹{cart.amount}
                        </label>
                        <label className={styles.resultName}>Quantity :</label>
                        <label className={styles.resultValue}>
                          {cart.count}
                        </label>
                      </div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <label
                        className={styles.resultName}
                        style={{ fontSize: 20, fontWeight: "bolder" }}
                      >
                        Total :
                      </label>
                      <label
                        className={styles.resultValue}
                        style={{ fontSize: 20, fontWeight: "bolder" }}
                      >
                        ₹{cart.amount * cart.count}
                      </label>
                    </div>
                  </div>
                );
              })
            ) : (
              <div style={{ display: "flex", alignSelf: "center" }}>
                <label className={styles.noData}>No item</label>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodApp;
