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
    <div className="flex flex-wrap justify-center gap-10 p-10">
      {products &&
        products.map((product) => (
          <div
            key={product._id}
            className="bg-color_primary_dark flex w-[280px] flex-col items-center rounded-xl p-5 pt-2 shadow-xl"
          >
            <h1 className="w-full border-b p-1 text-center text-sm uppercase">
              {product.category}
            </h1>
            <h1 className="text-color_white mt-3 text-xl font-semibold capitalize">
              {product.name}
            </h1>
            <h1 className="text-color_gray"> {product.description} </h1>
            <h1 className="text-color_light text-2xl font-bold">
              ₹{product.price}
            </h1>
            <div className="pt-4 text-sm">
              <Button
                disabled={!isAuthenticated || product.availability < 1}
                className="text-color_white rounded-lg px-5 py-2"
                onClick={() =>
                  dispatch(addToCart({ ...product, product: product._id }))
                }
              >
                {product.availability > 0 ? "ADD TO CART" : "OUT OF STOCK"}
              </Button>
            </div>
          </div>
        ))}
    </div>
  );
}

export default DisplayProducts;
