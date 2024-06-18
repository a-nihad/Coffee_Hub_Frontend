import { format } from "date-fns";
import { useEffect } from "react";
import { useSelector } from "react-redux";

import { useOrder } from "../services/useOrder";

function ViewOrders() {
  const { ordersList } = useSelector((state) => state.order);
  const { viewOrders } = useOrder();

  useEffect(() => {
    viewOrders();
  }, []);

  return (
    <section className="space-y-2 p-10 px-20">
      <header className="bg-color_primary text-color_white grid grid-cols-[80px_1.5fr_1.5fr_1fr_1fr_1fr] rounded-md px-5 py-2 text-center">
        <h1 className="text-left"> No </h1>
        <h1 className="text-left"> Name </h1>
        <h1 className="text-left"> Product - Quantity </h1>
        <h1> Order status </h1>
        <h1> Total price </h1>
        <h1> Order date </h1>
      </header>

      <body className="space-y-2">
        {ordersList &&
          ordersList?.map((order, index) => (
            <div
              key={index}
              className="bg-color_white grid grid-cols-[80px_1.5fr_1.5fr_1fr_1fr_1fr] rounded-md px-5 py-2 text-center shadow-sm"
            >
              <h1 className="text-left"> {index + 1} </h1>
              <h1 className="text-left font-semibold capitalize">
                {order.customer}
              </h1>
              <div className="text-left capitalize">
                {order.products &&
                  order.products.map((product) => (
                    <div key={product._id} className="grid grid-cols-2">
                      <h1> {product.product?.name} </h1>
                      <h1> {product.quantity} </h1>
                    </div>
                  ))}
              </div>
              <h1
                className={`uppercase ${order.orderStatus === "pending" ? "text-green-600" : order.orderStatus === "completed" ? "text-color_danger" : ""}`}
              >
                {order.orderStatus}
              </h1>
              <h1> {order.totalPrice} </h1>
              <h1> {format(order.createdAt, "MMMM d, yyyy")} </h1>
            </div>
          ))}
      </body>
    </section>
  );
}

export default ViewOrders;
