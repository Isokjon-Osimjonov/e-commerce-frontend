import React, { useState } from "react";
import "./CreateNewProduct.css";
import api from "../../auth/api";
import { AiOutlineClose } from "react-icons/ai";

function CreateNewProduct() {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productStock, setProductStock] = useState();
  const [productDiscount, setProductDiscount] = useState();
  const [productDeliveryTime, setProductDelivery] = useState();
  const [productBrand, setProductBrand] = useState("");

  const createNewProductHandler = async (e) => {
    e.preventDefault();
    await api.post("products/newproduct", {
      productName,
      productPrice,
      productDiscount,
      productDescription,
      productStock,
      productDeliveryTime,
      productCategory,
      productBrand,
    });
  };
  const [img, setImg] = useState();
  const handlePreviewPicture = (e) => {
    const file = e.target.files[0];
    file.preview = URL.createObjectURL(file);
    console.log(file);
    setImg(file);
  };
  const [tags, setTags] = useState([]);

  const removeTags = (indexToRemove) => {
    setTags([...tags.filter((_, index) => index !== indexToRemove)]);
  };

  const addTags = (e) => {
    if (e.target.value !== "") {
      setTags([...tags, e.target.value]);
      e.target.value = "";
    }
  };

  return (
    <div className="create--newproduct--main--container">
      <div className="left">
        <input
          className="new__product--input"
          type="text"
          required
          placeholder="Product Name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <input
          className="new__product--input"
          type="text"
          required
          placeholder="Product Description"
          value={productDescription}
          onChange={(e) => setProductDescription(e.target.value)}
        />
        <input
          className="new__product--input"
          type="text"
          required
          placeholder="Product Brand"
          value={productBrand}
          onChange={(e) => setProductBrand(e.target.value)}
        />
        <input
          className="new__product--input"
          type="number"
          required
          placeholder="Product Stock"
          value={productStock}
          onChange={(e) => setProductStock(e.target.value)}
        />{" "}
        <input
          className="new__product--input"
          type="number"
          required
          placeholder="Product Price"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
        />
        <input
          className="new__product--input"
          type="number"
          required
          placeholder="Product Discount"
          value={productDiscount}
          onChange={(e) => setProductDiscount(e.target.value)}
        />
        <input
          className="new__product--input"
          type="date"
          required
          placeholder="Product DeliveryTime"
          value={productDeliveryTime}
          onChange={(e) => setProductDelivery(e.target.value)}
        />
        <div className="container">
          <input
            required
            type="tel"
            className="input_tags"
            maxLength={13}
            minLength={13}
            onKeyUp={(event) => (event.key === "Enter" ? addTags(event) : null)}
            // defaultValue={""}
          />
          <ul className="tags">
            {Array.isArray(tags) &&
              tags?.map((tag, index) => {
                return index <= 1 && tag.length === 13 ? (
                  <li
                    value={productCategory}
                    onChange={(e) => setProductCategory(e.target.value)}
                    key={index}
                  >
                    <span>{tag}</span>
                    <AiOutlineClose onClick={() => removeTags(index)} />
                  </li>
                ) : (
                  <></>
                );
              })}
          </ul>
        </div>
      </div>

      <div className="right">
        <div className="img--contaier">
          <div className="img--div">
            {img && <img src={img.preview} className="img--preview " />}
          </div>
          <input
            type="file"
            id="image"
            accept="image/*"
            // className="new__product--input "
            onChange={handlePreviewPicture}
          />
          <label for="image">Choose a Photo</label>
        </div>

        {/* <select
          name=""
          id=""
          value={productCategory}
          onChange={(e) => setProductCategory(e.target.value)}
          className="product--category--selector"
        >
          <option>books</option>
          <option>kanselariya</option>
        </select> */}
        <button
          type="submit"
          onClick={createNewProductHandler}
          className="create--btn"
        >
          Create
        </button>
      </div>
    </div>
  );
}

export default CreateNewProduct;
