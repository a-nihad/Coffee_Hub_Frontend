import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  orderLoading,
  setOrders,
  setViewOrder,
} from "../redux/reducers/orderSlice";
import { AxiosPrivate } from "../api/axios";

export const useOrder = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.user);

  const axiosInstance = AxiosPrivate(token);

  const getOrders = async () => {
    try {
      dispatch(orderLoading(true));
      const { data, status } = await axiosInstance.get("/orders");

      if (status === 200) {
        dispatch(setOrders(data.orders));
      }
    } catch (err) {
      toast.error(err.response.data.message);
    } finally {
      dispatch(orderLoading(false));
    }
  };

  const createOrder = async (value) => {
    try {
      dispatch(orderLoading(true));
      const { data, status } = await axiosInstance.post("/orders", value);

      if (status === 201) {
        toast.success(data.status);
        navigate("/");
        getOrders();
      }
    } catch (err) {
      toast.error(err.response.data.message);
    } finally {
      dispatch(orderLoading(false));
    }
  };

  const updateOrder = async (value) => {
    try {
      dispatch(orderLoading(true));
      const { data, status } = await axiosInstance.put(
        `/orders/${value._id}`,
        value,
      );

      if (status === 200) {
        toast.success(data.status);
        getOrders();
      }
    } catch (err) {
      toast.error(err.response.data.message);
    } finally {
      dispatch(orderLoading(false));
    }
  };

  const deleteOrder = async (id) => {
    try {
      dispatch(orderLoading(true));
      const { data, status } = await axiosInstance.delete(`/orders/${id}`);

      if (status === 200) {
        toast.success(data.status);
        getOrders();
      }
    } catch (err) {
      toast.error(err.response.data.message);
    } finally {
      dispatch(orderLoading(false));
    }
  };

  const viewOrders = async () => {
    try {
      dispatch(orderLoading(true));
      const { data, status } = await axiosInstance.get("/orders/view");

      if (status === 200) {
        dispatch(setViewOrder(data.order));
      }
    } catch (err) {
      toast.error(err.response.data.message);
    } finally {
      dispatch(orderLoading(false));
    }
  };

  const searchOrders = async (value) => {
    try {
      dispatch(orderLoading(true));
      const { data, status } = await axiosInstance.get(
        `/orders?search=${value}`,
      );

      if (status === 200) {
        dispatch(setOrders(data.orders));
      }
    } catch (err) {
      toast.error(err.response.data.message);
    } finally {
      dispatch(orderLoading(false));
    }
  };

  return {
    getOrders,
    createOrder,
    updateOrder,
    deleteOrder,
    viewOrders,
    searchOrders,
  };
};
