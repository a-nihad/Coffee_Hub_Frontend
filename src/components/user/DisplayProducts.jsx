import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { addToCart } from "../../redux/reducers/cartSlice";
import { useProduct } from "../../services/useProduct";
import Button from "../Button";

function DisplayProducts() {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const { getProducts, searchProducts } = useProduct();
  const { products } = useSelector((state) => state.product);
  const { isAuthenticated } = useSelector((state) => state.user);

  const search = searchParams.get("search");

  useEffect(() => {
    if (search && search.length > 2) {
      const delayTimeOutId = setTimeout(() => {
        searchProducts(search);
      }, 500);

      return () => clearTimeout(delayTimeOutId);
    } else {
      getProducts();
    }
  }, [search]);

  return (
    <div className="grid items-center justify-center gap-5 p-10 sm:grid-cols-2 md:gap-10 md:px-20 md:py-10 lg:grid-cols-3">
      {products &&
        products.map((product) => (
          <div
            key={product._id}
            className="relative flex h-full max-w-[450px] flex-col items-center rounded-xl bg-color_white p-10 shadow-xl transition-all duration-300 hover:scale-105"
          >
            <span className="absolute right-0 top-5 rounded-l-xl bg-color_secondary_light px-5 py-2 text-center text-sm font-semibold uppercase text-color_primary_dark">
              {product.category}
            </span>
            <span className="aspect-square w-4/6 overflow-hidden rounded-3xl">
              <img src={product.image.url} alt="" className="h-full w-full" />
            </span>

            <section className="flex flex-col items-center gap-2 text-center">
              <h1 className="text-xl font-semibold capitalize text-color_secondary">
                {product.name}
              </h1>
              <p className="text-sm font-thin text-color_gray md:font-normal">
                {product.description}
              </p>
              <h1 className="pt-5 text-2xl font-extrabold text-color_primary_dark">
                ₹{product.price}
              </h1>

              <Button
                variation="primary"
                disabled={!isAuthenticated || product.availability < 1}
                className="rounded-lg px-5 py-2 text-color_white"
                onClick={() =>
                  dispatch(addToCart({ ...product, product: product._id }))
                }
              >
                {product.availability > 0 ? "Add to cart 👉" : "Out of stock"}
              </Button>
            </section>
          </div>
        ))}
    </div>
  );
}

export default DisplayProducts;
