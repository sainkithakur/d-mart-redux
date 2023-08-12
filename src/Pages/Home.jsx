import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../Redux/Action/Index";
import { Link } from "react-router-dom";

function Home() {
  
  const [product, setProduct] = useState([]);
  const dispatch = useDispatch();
  const send = (item) => {
    // console.log(e);
    dispatch(add(item));


  };

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProduct(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, []);

  return (
    <>


      <h1 className="heading">All Products</h1>
      <div className=" css ">
        {product.map((item) => {
          return (
            <div key={item.id}>
            <div className=" cart">
              <img className="img1" src={item.image}  alt="blog" />
              <div className="p-6">
                <h2 style={{}}>{item.category}</h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  {item.title}
                </h1>
                <p className="leading-relaxed mb-3">{item.description}</p>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  ${item.price}
                </h1>

                <div className="flex items-center flex-wrap">
                  <button onClick={() => send(item)} className="btn">
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
            </div>
            
          );
        })}
        
        <Link to="/login" type="button" className="px-3 py-2 h-10 w-24 font-semibold rounded dark:bg-red-800 dark:text-white logout ">Log Out</Link>
      </div>
    </>
  );
}

export default Home;
