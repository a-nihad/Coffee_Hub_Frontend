import { HiPencilSquare, HiTrash } from "react-icons/hi2";
import { format } from "date-fns";

import Modal from "../Modal";
import Button from "../Button";
import OrderStatus from "./OrderStatus";
import ConfirmDelete from "../ConfirmDelete";
import { useOrder } from "../../services/useOrder";

function Order({ order, index }) {
  const { deleteOrder } = useOrder();
  const { customer, products, orderStatus, totalPrice, createdAt, _id } = order;

  return (
    <div className="bg-color_white grid grid-cols-[80px_1.5fr_1.5fr_1fr_1fr_1fr_1.2fr] rounded-md px-5 py-2 text-center shadow-sm">
      <h1 className="text-left"> {index + 1} </h1>
      <h1 className="text-left font-semibold capitalize"> {customer} </h1>
      <div className="text-left text-sm capitalize">
        {products &&
          products.map((product) => (
            <div key={product._id} className="grid grid-cols-2">
              <h1> {product.product?.name} </h1>
              <h1> {product.quantity} </h1>
            </div>
          ))}
      </div>
      <h1
        className={`uppercase ${orderStatus === "pending" ? "text-green-600" : orderStatus === "completed" ? "text-color_danger" : ""}`}
      >
        {orderStatus}
      </h1>
      <h1> {totalPrice} </h1>
      <h1> {format(createdAt, "MMMM d, yyyy")} </h1>

      <div className="flex justify-center gap-5">
        <Modal>
          <Modal.Open windowName="product">
            <Button className="flex h-max items-center gap-2 rounded-md px-3 py-1">
              <HiPencilSquare size={18} />
              Edit
            </Button>
          </Modal.Open>
          <Modal.Window name="product">
            {<OrderStatus customer={customer} id={_id} />}
          </Modal.Window>

          <Modal.Open windowName="product_delete">
            <Button
              variation="secondary"
              className="flex h-max items-center gap-1 rounded-md px-2 py-1"
            >
              <HiTrash size={18} />
              Delete
            </Button>
          </Modal.Open>
          <Modal.Window name="product_delete">
            {
              <ConfirmDelete
                resourceName="Order"
                onConfirm={() => deleteOrder(_id)}
              />
            }
          </Modal.Window>
        </Modal>
      </div>
    </div>
  );
}

export default Order;
