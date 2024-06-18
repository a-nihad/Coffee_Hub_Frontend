import { useState } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import Instance from "../api/axios";
import { setToken, setUser } from "../redux/reducers/userSlice";

export const useAuth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const register = async (values) => {
    try {
      setIsLoading(true);
      const { data, status } = await Instance.post("/register", values);

      if (status === 201) {
        toast.success(data.message);
        dispatch(setUser(data.user));
        navigate("/verifyOtp");
      }
    } catch (err) {
      toast.error(err.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  const verifyOtp = async (values) => {
    try {
      setIsLoading(true);
      const { data, status } = await Instance.post("/verifyOtp", values);

      if (status === 200) {
        toast.success(data.message);
        dispatch(setToken(data.token));
        navigate("/");
        return data;
      }
    } catch (err) {
      toast.error(err.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (values) => {
    try {
      setIsLoading(true);
      const { data, status } = await Instance.post("/login", values);

      if (status === 200) {
        toast.success(data.message);

        if (data.status === "pending") {
          dispatch(setUser(data.user));
          navigate("/verifyOtp");
        } else {
          dispatch(setUser(data.user));
          dispatch(setToken(data.token));
          navigate("/");
        }
      }
    } catch (err) {
      toast.error(err.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  const resend = async (values) => {
    try {
      setIsLoading(true);
      const { data, status } = await Instance.post("/resendOtp", values);

      if (status === 200) toast.success(data.message);
    } catch (err) {
      toast.error(err.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, register, verifyOtp, login, resend };
};
