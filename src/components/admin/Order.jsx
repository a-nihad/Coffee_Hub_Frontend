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
    <div className="flex flex-col gap-3 rounded-md bg-color_white px-5 py-5 text-sm shadow-sm md:text-base">
      <header className="flex justify-between border-b text-left capitalize text-color_primary">
        {customer}
        <span className="lg:hidden">{format(createdAt, "d MMMM yyyy")}</span>
      </header>

      <body className="grid grid-cols-[30px_3fr_1.5fr_1.5fr] items-center text-center text-sm md:grid-cols-[30px_3fr_1.5fr_1.5fr_1.5fr] lg:grid-cols-[40px_1.5fr_1fr_1fr_1fr_1fr]">
        <h1 className="flex aspect-square items-center justify-center rounded-full bg-color_secondary_light text-left">
          {index + 1}
        </h1>
        <div className="pl-2 text-left capitalize md:pl-5">
          {products &&
            products.map((product) => (
              <div key={_id} className="flex gap-4">
                <h1> {product.product.name} - </h1>
                <span> {product.quantity} </span>
              </div>
            ))}
        </div>
        <h1> {totalPrice} </h1>
        <div
          className={`capitalize ${orderStatus === "pending" ? "text-green-600" : orderStatus === "completed" ? "text-color_danger" : ""}`}
        >
          {orderStatus}
        </div>
        <h1 className="hidden lg:block">{format(createdAt, "d MMMM yyyy")}</h1>

        <div className="hidden justify-center gap-2 md:flex">
          <Modal>
            <Modal.Open windowName="product">
              <Button
                variation="icon"
                disabled={orderStatus === "cancelled"}
                className="h-max"
              >
                <HiPencilSquare size={18} />
              </Button>
            </Modal.Open>
            <Modal.Window name="product">
              {<OrderStatus customer={customer} id={_id} />}
            </Modal.Window>

            <Modal.Open windowName="product_delete">
              <Button variation="icon" className="h-max">
                <HiTrash size={18} />
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
      </body>
    </div>
  );
}

export default Order;
