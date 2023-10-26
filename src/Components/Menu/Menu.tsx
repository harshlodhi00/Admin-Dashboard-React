import { Link } from "react-router-dom";
import "./Menu.scss";
import { menu } from "../../data";

const Menu = () => {
  return (
    <div className="menu">
      {menu.map((item) => (
        <div className="item" key={item.id}>
          <span className="title">{item.title.toUpperCase()}</span>
          {item.listItems.map((ListItem) => (
            <Link key={ListItem.id} to={ListItem.url} className="listItems">
              <img src={ListItem.icon} alt="" />
              <span className="listItemTitle">{ListItem.title}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Menu;
