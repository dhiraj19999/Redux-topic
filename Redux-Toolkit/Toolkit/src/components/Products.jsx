import { useEffect } from "react";
import { add } from "../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/productSlice";
import { useNavigate } from "react-router-dom";
const Products = () => {
  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.product);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchProducts());
    console.log(data);
  }, []);
  if (status == "Loading") {
    return <h1>...Loading</h1>;
  }
  return (
    <>
      <div
        style={{ display: "grid", gridTemplateColumns: "auto,auto,auto,auto" }}
      >
        {data &&
          data.map((el) => {
            return (
              <div key={el.id}>
                <img style={{ width: "100px" }} src={el.image} />
                <h3>{el.title}</h3>
                <h5>Price:{el.price}</h5>
                <button onClick={() => navigate(`/single/${el.id}`)}>
                  See more
                </button>
                <button onClick={() => dispatch(add(el))}>Add to cart</button>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Products;
