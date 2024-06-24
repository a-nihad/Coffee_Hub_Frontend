import { useSelector } from "react-redux";

import Button from "../components/Button";
import { useOrder } from "../services/useOrder";
import CartItem from "../components/user/CartItem";

function Cart() {
  const { createOrder } = useOrder();
  const { cart } = useSelector((state) => state.cart);

  return (
    <div className="relative m-auto w-8/12 rounded-xl px-10 py-10">
      <header className="flex justify-between border-b border-color_primary pb-3 text-xl font-semibold">
        <h1> Your Cart </h1>
        <h1>{cart.length} items</h1>
      </header>

      {cart.length > 0 ? (
        <div className="space-y-2 pt-5">
          <div className="grid grid-cols-[1.5fr_1fr_2fr_1fr_1fr] gap-5 rounded-md bg-color_primary p-2 px-5 text-center text-color_light">
            <h1 className="text-left"> Name </h1>
            <h1> Category </h1>
            <h1> Price </h1>
            <h1> </h1>
            <h1> Total Price </h1>
          </div>

          {cart.map((item) => (
            <CartItem key={item._id} item={item} />
          ))}

          <div className="flex items-center justify-end gap-5 pt-5">
            <hr className="w-full bg-color_primary pt-1" />

            <Button
              onClick={() => createOrder({ products: cart })}
              variation="secondary"
              className="w-2/3 rounded-lg py-2"
            >
              Order
            </Button>
          </div>
        </div>
      ) : (
        <h1 className="p-20 text-center text-xl"> Your Cart is empty </h1>
      )}
    </div>
  );
}

export default Cart;
