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
    <div className="bg-color_white grid grid-cols-[1.5fr_1fr_2fr_1fr_1fr] gap-5 rounded-lg p-2 px-5 text-center">
      <h1 className="text-left capitalize"> {name} </h1>
      <p> {category} </p>
      <h1>{price}</h1>
      <div className="flex gap-3">
        <Button
          onClick={() => dispatch(decrementQuantity(_id))}
          className="h-max rounded-full p-1"
        >
          <HiMiniMinus />
        </Button>
        <h1> {quantity} </h1>
        <Button
          variation="secondary"
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
