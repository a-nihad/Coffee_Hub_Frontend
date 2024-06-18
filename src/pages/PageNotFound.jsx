import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-color_light flex h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="text-color_primary_dark text-9xl font-bold">404</h1>
        <p className="mb-8 mt-4 text-2xl font-light md:text-3xl">
          Sorry, we couldn't find the page you're looking for.
        </p>

        <Button
          onClick={() => navigate("/")}
          variation="secondary"
          className="rounded-md px-5 py-2"
        >
          👈 Go back home
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
