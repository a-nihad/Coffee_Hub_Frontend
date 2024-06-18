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
    <section className="space-y-2 p-10 px-20">
      <header className="flex items-center justify-between px-5 text-2xl font-semibold">
        <h1> List of Products </h1>
        <Modal>
          <Modal.Open windowName="product">
            <Button
              variation="special"
              className="bg-color_secondary w-60 rounded-md border py-2 text-base"
            >
              Product
            </Button>
          </Modal.Open>
          <Modal.Window name="product">{<ProductForm />}</Modal.Window>
        </Modal>
      </header>

      <header className="bg-color_primary text-color_white grid grid-cols-[80px_1.5fr_1fr_1fr_1fr_1.2fr] rounded-md px-5 py-2 text-center">
        <h1 className="text-left"> No </h1>
        <h1 className="text-left"> Name </h1>
        <h1> Price </h1>
        <h1> Category </h1>
        <h1> Availability Status </h1>
        <h1></h1>
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
