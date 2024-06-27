import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

import Modal from "../components/Modal";
import Button from "../components/Button";
import Product from "../components/admin/Product";
import { useProduct } from "../services/useProduct";
import ProductForm from "../components/admin/ProductForm";

function ProductManagement() {
  const [searchParams] = useSearchParams();
  const { getProducts, searchProducts } = useProduct();
  const { products } = useSelector((state) => state.product);

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
    <section className="relative m-auto w-11/12 space-y-2 rounded-xl bg-color_secondary_light px-5 pb-10 sm:px-10 lg:px-20 xl:w-9/12">
      <div className="flex items-center justify-between px-5 pb-2 pt-10 font-semibold md:text-2xl">
        <h1> List of Products </h1>
        <Modal>
          <Modal.Open windowName="product">
            <Button
              variation="special"
              className="w-32 rounded-md border bg-color_secondary py-2 text-sm md:w-60"
            >
              New Product
            </Button>
          </Modal.Open>
          <Modal.Window name="product">{<ProductForm />}</Modal.Window>
        </Modal>
      </div>

      <header className="grid grid-cols-[30px_3fr_1.3fr_1fr] rounded-md bg-color_primary px-5 py-2 text-center text-color_white md:grid-cols-[30px_1.5fr_1fr_1fr_1fr_1.2fr]">
        <h1 className="text-left"> No </h1>
        <h1 className="pl-5 text-left"> Products </h1>
        <h1 className="hidden md:block"> Category </h1>
        <h1> Price </h1>
        <h1> Availability </h1>
        <h1 className="hidden md:block"></h1>
      </header>

      <body className="space-y-2">
        {products &&
          products?.map((product, index) => (
            <Product key={product._id} product={product} index={index} />
          ))}
      </body>
    </section>
  );
}

export default ProductManagement;
