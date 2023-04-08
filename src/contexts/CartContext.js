import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [itemAmount, setItemAmount] = useState(0);
  const [total, setTotal] = useState(0);
  const [totalbag, setTotalbag] = useState(0);

  useEffect(() => {
    const totalbag = cart.reduce((accumulator, currenItem) => {
      return accumulator + currenItem.amount;
    }, 0);
    setTotalbag(totalbag);
  });

  useEffect(() => {
    const total = cart.reduce((accumulator, currenItem) => {
      return accumulator + currenItem.price * currenItem.amount;
    }, 0);
    setTotal(total);
  });

  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((accumulator, currenItem) => {
        return accumulator + currenItem.amount;
      }, 0);
      setItemAmount(amount);
    }
  }, [cart]);

  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 };
    const CartItem = cart.find((item) => {
      return item.id === id;
    });
    if (CartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: CartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };

  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(newCart);
  };

  const clrarCart = () => {
    setCart([]);
  };

  const increaseAmount = (id) => {
    const item = cart.find((item) => item.id === id);
    addToCart(item, id);
  };

  const decreaseAmount = (id) => {
    const item = cart.find((item) => {
      return item.id === id;
    });
    if (item) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: item.amount - 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    }
    if (item.amount < 2) {
      removeFromCart(id);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clrarCart,
        decreaseAmount,
        increaseAmount,
        itemAmount,
        total,
        totalbag,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
