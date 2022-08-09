import { client } from "../client.js";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
const ShoppingCartContext = createContext({});
export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}





export function ShoppingCartProvider({ children }) {
  const [database, setDatabase] = useState([]);

  // console.log(database);
  const fetchData = useCallback(async () => {
    const response = await client.getEntries({ content_type: "eCommerce" });
    const responseData = response.items;
    cleanupDataProduct(responseData);
  }, []);

  const cleanupDataProduct = (rawData) => {
    const cleanData = rawData.map((pd) => {
      const { sys, fields } = pd;
      const { id } = sys;
      const productName = fields.productName;
      const productImage = fields.productImage.fields.file.url;
      const productPrice = fields.productPrice;
      const updatedProduct = { id, productName, productImage, productPrice };
      return updatedProduct;
    });

    setDatabase(cleanData);
    //  console.log(products);
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  const popularProduct = database.slice(0, 10);
  const superDeal = database.slice(10, 20);
  const featureProduct = database.slice(20, 30);

  // ==================================cart functions ================================
  const [cartItem, setCartItem] = useState([]);
  function getItemQuantity(id) {
    return cartItem.find((item) => item.id === id)?.quantity || 0;
  }

  function increaseCartQuantity(id) {
    setCartItem((currItem) => {
      // console.log(currItem);
      if (currItem.find((item) => item.id === id) == null) {
        return [...currItem, { id, quantity: 1 }];
      } else {
        return currItem.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function decreaseCartQuantity(id) {
    setCartItem((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function removeFromCart(id) {
    setCartItem((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  }

  function clearCart() {
    setCartItem([]);
  }

  const cartQuantity = cartItem.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );


  // firebase auth

 


  return (
    <ShoppingCartContext.Provider
      value={{
        database,
        popularProduct,
        superDeal,
        featureProduct,
        removeFromCart,
        decreaseCartQuantity,
        increaseCartQuantity,
        getItemQuantity,
        cartQuantity,
        cartItem,
        clearCart,
       
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}

// =========================================================
