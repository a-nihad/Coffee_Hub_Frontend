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
      className={`bg-color_white grid grid-cols-[80px_1.5fr_1fr_1fr_1fr_1.2fr] items-center rounded-md px-5 py-2 text-center shadow-sm ${availability < 1 && "text-color_danger"}`}
    >
      <h1 className="text-left"> {index + 1} </h1>
      <h1 className="text-left capitalize"> {name} </h1>
      <h1> {price} </h1>
      <h1> {category} </h1>
      <h1> {availability > 0 ? availability : "SOLD OUT"} </h1>
      <div className="flex justify-center gap-5">
        <Modal>
          <Modal.Open windowName="product">
            <Button className="flex items-center gap-2 rounded-md px-3 py-1">
              <HiPencilSquare size={18} />
              Edit
            </Button>
          </Modal.Open>
          <Modal.Window name="product">
            {<ProductForm product={product} />}
          </Modal.Window>

          <Modal.Open windowName="product_delete">
            <Button
              variation="secondary"
              className="flex items-center gap-1 rounded-md px-2 py-1"
            >
              <HiTrash size={18} />
              Delete
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
