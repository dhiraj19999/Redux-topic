import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const SinglePage = () => {
  const { id } = useParams();

  const [data, setData] = useState({});
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`).then((res) =>
      res.json().then((res) => setData(res))
    );
    console.log(data);
  }, []);

  return (
    <>
      {data && (
        <div key={data.id}>
          <img style={{ width: "100px" }} src={data.image} />
          <h3>{data.title}</h3>
          <h5>Price:{data.price}</h5>
        </div>
      )}
    </>
  );
};

export default SinglePage;
