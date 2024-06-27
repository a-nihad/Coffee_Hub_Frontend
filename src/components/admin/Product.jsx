import { HiPencilSquare, HiTrash } from "react-icons/hi2";

import Modal from "../Modal";
import Button from "../Button";
import ProductForm from "./ProductForm";
import ConfirmDelete from "../ConfirmDelete";
import { useProduct } from "../../services/useProduct";

function Product({ product, index }) {
  const { name, price, category, availability, _id } = product;

  const { deleteProduct } = useProduct();

  return (
    <div
      className={`grid grid-cols-[30px_3fr_1.3fr_1fr] items-center rounded-md bg-color_white px-5 py-2 text-center shadow-sm md:grid-cols-[30px_1.5fr_1fr_1fr_1fr_1.2fr] ${availability < 1 && "text-color_danger"}`}
    >
      <h1 className="flex aspect-square items-center justify-center rounded-full bg-color_secondary_light text-left">
        {index + 1}
      </h1>
      <div className="flex flex-col pl-5 text-left capitalize">
        <h1> {name} </h1>
        <h1 className="text-sm md:hidden"> {category} </h1>
      </div>
      <h1 className="hidden md:block"> {category} </h1>
      <h1> {price} </h1>
      <h1> {availability > 0 ? availability : "SOLD OUT"} </h1>
      <div className="hidden justify-center gap-5 md:flex">
        <Modal>
          <Modal.Open windowName="product">
            <Button variation="icon" className="h-max">
              <HiPencilSquare size={18} />
            </Button>
          </Modal.Open>
          <Modal.Window name="product">
            {<ProductForm product={product} />}
          </Modal.Window>

          <Modal.Open windowName="product_delete">
            <Button variation="icon" className="h-max">
              <HiTrash size={18} />
            </Button>
          </Modal.Open>
          <Modal.Window name="product_delete">
            {
              <ConfirmDelete
                resourceName="Product"
                onConfirm={() => deleteProduct(_id)}
              />
            }
          </Modal.Window>
        </Modal>
      </div>
    </div>
  );
}

export default Product;
