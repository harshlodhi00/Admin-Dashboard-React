import Single from "../../Components/Single/Single";
import { singleUser } from "../../data";
import "./SingleUserPage.scss";

const SingleUserPage = () => {
  return (
    <div className="SingleUserPage">
      <Single {...singleUser} />
    </div>
  );
};

export default SingleUserPage;
