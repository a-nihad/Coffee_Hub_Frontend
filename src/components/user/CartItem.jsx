import { useDispatch } from "react-redux";
import { HiMiniMinus, HiMiniPlus } from "react-icons/hi2";

import {
  decrementQuantity,
  incrementQuantity,
} from "../../redux/reducers/cartSlice";
import Button from "../Button";

function CartItem({ item }) {
  const dispatch = useDispatch();
  const { name, category, price, _id, quantity } = item;

  return (
    <div className="grid grid-cols-[3fr_1fr_1.3fr_1fr] items-center gap-5 rounded-lg border bg-color_white p-2 px-5 text-center text-sm md:grid-cols-[1.5fr_1fr_2fr_1fr_1fr] md:text-base">
      <div className="flex flex-col text-left">
        <h1 className="text-left capitalize"> {name} </h1>
        <p className="text-sm text-color_primary md:hidden"> {category} </p>
      </div>
      <p className="hidden md:block"> {category} </p>
      <h1>{price}</h1>
      <div className="flex gap-3">
        <Button
          onClick={() => dispatch(decrementQuantity(_id))}
          className="h-max rounded-full p-1"
          variation="primary"
        >
          <HiMiniMinus />
        </Button>
        <h1> {quantity} </h1>
        <Button
          variation="primary"
          onClick={() => dispatch(incrementQuantity(_id))}
          className="h-max rounded-full p-1"
        >
          <HiMiniPlus />
        </Button>
      </div>
      <h1>{quantity * price}</h1>
    </div>
  );
}

export default CartItem;
