import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const [totalCart, setTotalCart] = useState(0)
  const { cart } = useSelector(state => state)

  useEffect(() => {
    setTotalCart(cart.reduce((acc: any, curr: any) => acc + curr.price, 0))

  }, [cart])
  console.log(cart, totalCart)
  return <div>Cart Page</div>;
};

export default Cart;
