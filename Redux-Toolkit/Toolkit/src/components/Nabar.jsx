import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
const Navbar = () => {
  const { data, status } = useSelector((state) => state.product);

  return (
    <>
      <div style={{ display: "flex", gap: "40px", marginTop: "20px" }}>
        <Link to={"/"}> Home</Link>
        <Link to="/cart"> Cart</Link>

        <span>cart Items :{data.length}</span>
      </div>
    </>
  );
};

export default Navbar;
