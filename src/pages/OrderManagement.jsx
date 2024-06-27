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
    <section className="relative m-auto w-11/12 rounded-xl bg-color_secondary_light px-5 pb-10 sm:px-10 lg:px-20 xl:w-9/12">
      <h1 className="py-5 text-center text-xl font-semibold"> ORDERS </h1>
      <header className="mb-2 grid grid-cols-[30px_3fr_1.5fr_1.5fr] rounded-md bg-color_primary px-5 py-2 text-center text-color_white md:grid-cols-[30px_3fr_1.5fr_1.5fr_1.5fr] lg:grid-cols-[40px_1.5fr_1fr_1fr_1fr_1fr]">
        <h1 className="text-left"> No </h1>
        <h1 className="pl-2 text-left md:pl-5"> Items </h1>
        <h1> Price </h1>
        <h1> Status </h1>
        <h1 className="hidden lg:block"> Date </h1>
        <h1 className="hidden md:block"></h1>
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
