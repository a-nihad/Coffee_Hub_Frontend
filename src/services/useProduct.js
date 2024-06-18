import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";

import { AxiosPrivate } from "../api/axios";
import { productLoading, setProducts } from "../redux/reducers/productSlice";

export const useProduct = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.user);

  const axiosInstance = AxiosPrivate(token);

  const getProducts = async () => {
    try {
      dispatch(productLoading(true));
      const { data, status } = await axiosInstance.get("/products");

      if (status === 200) {
        dispatch(setProducts(data.products));
      }
    } catch (err) {
      toast.error(err.response.data.message);
    } finally {
      dispatch(productLoading(false));
    }
  };

  const createProduct = async (value) => {
    try {
      dispatch(productLoading(true));
      const { data, status } = await axiosInstance.post("/products", value);

      if (status === 201) {
        toast.success(data.status);
        getProducts();
      }
    } catch (err) {
      toast.error(err.response.data.message);
    } finally {
      dispatch(productLoading(false));
    }
  };

  const updateProduct = async (value) => {
    try {
      dispatch(productLoading(true));
      const { data, status } = await axiosInstance.put(
        `/products/${value._id}`,
        value,
      );

      if (status === 200) {
        toast.success(data.status);
        getProducts();
      }
    } catch (err) {
      toast.error(err.response.data.message);
    } finally {
      dispatch(productLoading(false));
    }
  };

  const deleteProduct = async (id) => {
    try {
      dispatch(productLoading(true));
      const { data, status } = await axiosInstance.delete(`/products/${id}`);

      if (status === 200) {
        toast.success(data.status);
        getProducts();
      }
    } catch (err) {
      toast.error(err.response.data.message);
    } finally {
      dispatch(productLoading(false));
    }
  };

  const searchProducts = async (value) => {
    try {
      dispatch(productLoading(true));
      const { data, status } = await axiosInstance.get(
        `/products?search=${value}`,
      );

      if (status === 200) {
        dispatch(setProducts(data.products));
      }
    } catch (err) {
      toast.error(err.response.data.message);
    } finally {
      dispatch(productLoading(false));
    }
  };

  return {
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct,
    searchProducts,
  };
};
