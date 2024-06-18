import { Formik, Form } from "formik";
import { useSelector } from "react-redux";
import BeatLoader from "react-spinners/BeatLoader";

import Button from "../Button";
import InputForm from "../InputForm";
import { useProduct } from "../../services/useProduct";
import { productValidation } from "../../utils/Validations";

function ProductForm({ onClose, product }) {
  const { createProduct, updateProduct } = useProduct();
  const { isLoading } = useSelector((state) => state.product);

  const initialValues = {
    name: "",
    description: "",
    price: "",
    category: "",
    availability: "",
  };

  const submitForm = async (values) => {
    if (product) {
      await updateProduct(values);
    } else {
      await createProduct(values);
    }
    onClose();
  };

  return (
    <div className="bg-color_white w-[400px] rounded-xl border p-10 shadow-2xl">
      <h1 className="text-center text-xl font-semibold"> Create Product </h1>
      <Formik
        initialValues={product ? product : initialValues}
        validationSchema={productValidation}
        onSubmit={submitForm}
      >
        <Form className="mt-5 grid gap-2">
          <InputForm label="Name" name="name" />
          <InputForm label="Description" name="description" />
          <InputForm label="Price" type="number" name="price" />
          <InputForm label="Category" name="category" />
          <InputForm label="Availability" type="number" name="availability" />

          <Button
            type="submit"
            variation="secondary"
            className="mt-3 rounded-md py-2"
          >
            {isLoading ? (
              <BeatLoader color="#ffffff" loading={true} size={10} />
            ) : product ? (
              "Update Product"
            ) : (
              "Add Product"
            )}
          </Button>
        </Form>
      </Formik>
    </div>
  );
}

export default ProductForm;
