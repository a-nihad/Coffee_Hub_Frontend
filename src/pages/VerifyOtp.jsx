import { useState } from "react";
import { useSelector } from "react-redux";
import BeatLoader from "react-spinners/BeatLoader";

import Input from "../components/Input";
import Button from "../components/Button";
import { useAuth } from "../services/useAuth";

function VerifyOtp() {
  const [value, setValue] = useState("");
  const { user } = useSelector((state) => state.user);

  const { isLoading, verifyOtp, resend } = useAuth();

  const handleClick = () => {
    const values = {
      email: user.email,
      otp: Number(value),
    };
    if (value) verifyOtp(values);
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <section className="bg-color_white w-96 space-y-4 rounded-xl p-10 text-center shadow-2xl">
        <div className="flex flex-col items-center gap-2 p-4">
          <img src="email.jpeg" alt="mail_icon" className="w-[130px]" />

          <h1 className="text-xl font-semibold sm:text-2xl">Verify with OTP</h1>
          <h2 className="text-xs text-slate-500">
            Please enter the One-Time Password (OTP) sent to your registered
            email below.
          </h2>
        </div>

        <Input
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        <Button
          onClick={handleClick}
          variation="secondary"
          className="w-full rounded-md py-2"
        >
          {isLoading ? (
            <BeatLoader color="#ffffff" loading={true} size={10} />
          ) : (
            "Submit"
          )}
        </Button>

        <p className="mt-2 text-sm text-slate-500">
          Didn't receive the OTP?
          <button
            onClick={() => resend({ email: user.email })}
            className="text-color_primary pl-2 underline"
          >
            Resend
          </button>
        </p>
      </section>
    </div>
  );
}

export default VerifyOtp;
