import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

import { useOrder } from "../services/useOrder";
import Order from "../components/admin/Order";

function OrderManagement() {
  const [searchParams] = useSearchParams();
  const { getOrders, searchOrders } = useOrder();
  const { orders } = useSelector((state) => state.order);

  const search = searchParams.get("search");

  useEffect(() => {
    if (search && search.length > 2) {
      const delayTimeOutId = setTimeout(() => {
        searchOrders(search);
      }, 500);

      return () => clearTimeout(delayTimeOutId);
    } else {
      getOrders();
    }
  }, [search]);

  return (
    <section className="space-y-2 p-10 px-20">
      <header className="bg-color_primary text-color_white grid grid-cols-[80px_1.5fr_1.5fr_1fr_1fr_1fr_1.2fr] rounded-md px-5 py-2 text-center">
        <h1 className="text-left"> No </h1>
        <h1 className="text-left"> Customer name </h1>
        <h1 className="text-left"> Product - Quantity </h1>
        <h1> Order status </h1>
        <h1> Total price </h1>
        <h1> Order date </h1>
        <h1></h1>
      </header>

      <body className="space-y-2">
        {orders &&
          orders?.map((order, index) => (
            <Order key={order._id} order={order} index={index} />
          ))}
      </body>
    </section>
  );
}

export default OrderManagement;
