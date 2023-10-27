import Single from "../../Components/Single/Single";
import { singleProduct } from "../../data";
import "./SingleProductPage.scss";

const SingleProductPage = () => {
  return (
    <div className="SingleProductPage">
      <Single {...singleProduct} />
    </div>
  );
};

export default SingleProductPage;
