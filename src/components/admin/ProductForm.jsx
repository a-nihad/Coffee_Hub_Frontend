import { useState } from "react";
import { Formik, Form } from "formik";
import { useSelector } from "react-redux";
import BeatLoader from "react-spinners/BeatLoader";

import Button from "../Button";
import InputForm from "../InputForm";
import { useProduct } from "../../services/useProduct";
import { productValidation } from "../../utils/Validations";

function ProductForm({ onClose, product }) {
  const [file, setFile] = useState();
  const { createProduct, updateProduct } = useProduct();
  const { isLoading } = useSelector((state) => state.product);

  const initialValues = {
    name: "",
    description: "",
    price: "",
    category: "",
    availability: "",
    image: "",
  };

  const submitForm = async (values) => {
    if (product) {
      await updateProduct(values);
    } else {
      values.image = file;
      await createProduct(values);
    }
    onClose();
  };

  const handleFile = (event) => {
    const file = event.currentTarget.files[0];

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setFile(reader.result);
    };
  };

  return (
    <div className="w-full rounded-xl border bg-color_white p-10 shadow-2xl sm:w-[400px]">
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

          <div>
            <input
              type="file"
              id="product_img"
              name="product_img"
              required={!product}
              onChange={handleFile}
              accept=".jpg, .jpeg, .png"
              className="cursor-pointer rounded-md border outline outline-color_white file:mr-3 file:cursor-pointer file:rounded-md file:border-none file:bg-color_light file:px-5 file:py-2 hover:outline hover:outline-color_primary_dark file:hover:text-color_primary_dark"
            />
          </div>

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
