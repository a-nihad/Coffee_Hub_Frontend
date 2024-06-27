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
    <div className="relative m-auto w-11/12 rounded-xl bg-color_secondary_light px-5 py-10 sm:px-10 lg:px-20 xl:w-9/12">
      <section className="space-y-2">
        <header className="grid grid-cols-[30px_1.5fr_.8fr_1fr] rounded-md bg-color_primary px-5 py-2 text-center text-color_white md:grid-cols-[40px_1.5fr_1fr_1fr_1fr]">
          <h1 className="text-left"> No </h1>
          <h1 className="text-left"> Product </h1>
          <h1> Price </h1>
          <h1> Status </h1>
          <h1 className="hidden md:block"> Date </h1>
        </header>

        <body className="space-y-2">
          {ordersList &&
            ordersList?.map((order, index) => (
              <div
                key={index}
                className="grid grid-cols-[30px_1.5fr_.8fr_1fr] rounded-md bg-color_white px-5 py-2 text-center text-sm shadow-sm md:grid-cols-[40px_1.5fr_1fr_1fr_1fr] md:text-base"
              >
                <h1 className="text-left"> {index + 1} </h1>
                <div className="text-left capitalize">
                  {order.products &&
                    order.products.map((product) => (
                      <div
                        key={product._id}
                        className="gmd:rid flex justify-between pr-2 md:grid-cols-2"
                      >
                        <h1> {product.product?.name} </h1>
                        <p> {product.quantity} </p>
                      </div>
                    ))}
                </div>
                <h1> {order.totalPrice} </h1>
                <div
                  className={`uppercase ${order.orderStatus === "pending" ? "text-green-600" : order.orderStatus === "completed" ? "text-color_danger" : ""}`}
                >
                  {order.orderStatus}
                  <h1 className="text-xs text-color_primary md:hidden">
                    {format(order.createdAt, "d MMMM yyyy")}
                  </h1>
                </div>
                <h1 className="hidden md:block">
                  {format(order.createdAt, "d MMMM yyyy")}
                </h1>
              </div>
            ))}
        </body>
      </section>
    </div>
  );
}

export default ViewOrders;
