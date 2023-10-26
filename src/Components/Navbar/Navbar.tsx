import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.svg" alt="" />
        <div>lamadmin</div>
      </div>
      <div className="icons">
        <img src="/search.svg" alt="" className="icons" />
        <img src="/app.svg" alt="" className="icons" />
        <img src="/expand.svg" alt="" className="icons" />
        <div className="notification">
          <img src="/notifications.svg" alt="" className="icons" />
          <span>1</span>
        </div>
        <div className="userProfile">
          <img
            src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
            className="icons"
          />
          <span>Jane</span>
        </div>
        <img src="/settings.svg" className="icons" alt="" />
      </div>
    </div>
  );
};

export default Navbar;
