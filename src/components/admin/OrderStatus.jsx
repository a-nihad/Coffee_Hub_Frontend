import Button from "../Button";
import { useOrder } from "../../services/useOrder";

function OrderStatus({ customer, id, onClose }) {
  const { updateOrder } = useOrder();

  return (
    <div className="w-[320px] space-y-3 rounded-lg border bg-white p-5 shadow-lg sm:w-[460px] sm:p-8">
      <h1 className="text-lg font-semibold md:text-xl">Update order status</h1>

      <p className="text-color_text text-sm">
        Are you sure you want to Upadte {customer}'s order?
      </p>

      <div className="flex justify-end gap-3">
        <Button
          variation="secondary"
          className="rounded-md px-3 py-1"
          onClick={() =>
            updateOrder({ orderStatus: "pending", _id: id }, onClose())
          }
        >
          Pending
        </Button>
        <Button
          className="rounded-md px-3 py-1"
          onClick={() =>
            updateOrder({ orderStatus: "completed", _id: id }, onClose())
          }
        >
          Completed
        </Button>
        <Button
          variation="danger"
          className="rounded-md px-3 py-1"
          onClick={() =>
            updateOrder({ orderStatus: "cancelled", _id: id }, onClose())
          }
        >
          Cancelled
        </Button>
      </div>
    </div>
  );
}

export default OrderStatus;
