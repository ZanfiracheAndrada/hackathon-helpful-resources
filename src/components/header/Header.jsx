import { NavLink } from "react-router-dom";
import logo from "../../assets/icons/logo.jpg";
import "./header.scss";

const Header = props => {
  return (
    <div className="header">
      <div className="header__container">
        <NavLink to="/" className="header__title-container">
          <div className="header__icon-container">
            <img src={logo} alt="Logo" className="header__icon" />
          </div>
          <h1 className="header__title">Synapse - Helpful Resources</h1>
        </NavLink>
        <input
          className="header__search"
          type="text"
          onChange={props.handleChange}
          value={props.searchTerm}
          placeholder="Search Topics"
        />
      </div>
    </div>
  );
};
export default Header;
