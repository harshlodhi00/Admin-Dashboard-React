import { topDealUsers } from "../../data";
import "./TopBox.scss";

const TopBox = () => {
  return (
    <div className="TopBox">
      <h1>Top Deals</h1>

      {topDealUsers.map((item) => (
        <div className="list" key={item.id}>
          <div className="listItem">
            <img src={item.img} alt="" />
            <div className="userDetail">
              <span className="userName">{item.username}</span>
              <span className="userEmail">{item.email}</span>
            </div>
          </div>
          <span className="amount">$ {item.amount}</span>
        </div>
      ))}
    </div>
  );
};

export default TopBox;