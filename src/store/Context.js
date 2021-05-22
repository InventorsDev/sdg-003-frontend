import { createContext} from "react";

export default createContext([
  {
    products: [],
    cart: [],
    addProductToCart: (product) => {},
    removeProductFromCart: (productID) => {},
    clearCart: () => {},
  },
]);

// export const DataProvider = (props) => {
//   const [products, setProducts] = useState([
//
//   ])

//   return (
//     <DataContext.Provider value={{ products }}>
//       {props.children}
//     </DataContext.Provider>
//   );
// };

