import { useSelector } from "react-redux";

import Button from "../components/Button";
import { useOrder } from "../services/useOrder";
import CartItem from "../components/user/CartItem";

function Cart() {
  const { createOrder } = useOrder();
  const { cart } = useSelector((state) => state.cart);

  return (
    <div className="relative m-auto w-11/12 rounded-xl bg-color_secondary_light px-5 py-10 sm:px-10 lg:px-20 xl:w-9/12">
      <header className="flex justify-between border-b border-color_primary pb-1 font-semibold md:text-xl">
        <h1> Your Cart </h1>
        <h1>{cart.length} Items</h1>
      </header>

      {cart.length > 0 ? (
        <div className="space-y-2 pt-5">
          <div className="grid grid-cols-[3fr_1fr_1.3fr_1fr] items-center gap-5 rounded-md bg-color_primary p-2 px-5 text-center text-sm text-color_light md:grid-cols-[1.5fr_1fr_2fr_1fr_1fr] md:text-base">
            <h1 className="text-left"> Name </h1>
            <h1 className="hidden md:block"> Category </h1>
            <h1> Price </h1>
            <h1> </h1>
            <h1 className="flex justify-center gap-1">
              Total <span className="hidden md:flex"> Price </span>
            </h1>
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
        <h1 className="p-20 text-center md:text-xl"> Your Cart is empty 😜 </h1>
      )}
    </div>
  );
}

export default Cart;
