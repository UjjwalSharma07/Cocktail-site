import React from "react";

import Loading from "../components/Loading";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCocktails } from "../redux/features/cocktailSlice";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [modifiedCocktails, setmodifiedCocktails] = useState([]);
  const { loading, cocktails, error } = useSelector((state) => ({
    ...state.app,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCocktails());
  }, [dispatch]);

  useEffect(() => {
    if (cocktails) {
      const newCocktails = cocktails.map((item) => {
        const {
          idDrink,
          strDrink,
          strCategory,
          strAlcoholic,
          strGlass,
          strInstructions,
          strDrinkThumb,
          dateModified,
        } = item;
        return {
          id: idDrink,
          imag: strDrinkThumb,
          category: strCategory,
          name: strDrink,
          alcoholic: strAlcoholic,
          glass: strGlass,
          info: strInstructions,
          modified: dateModified,
        };
      });
      setmodifiedCocktails(newCocktails);
    } else {
      setmodifiedCocktails([]);
    }
  }, [cocktails]);

  if (loading) {
    return <Loading />;
  }
  if(!cocktails){
    return(
      
        <h2>No cocktail Found with this Name.</h2>
      
    )
  }
  if (error) {
    return <p>{error.message}</p>;
  }
  return (
    <>
      
      <div className="container d-flex align-content-center flex-wrap mt-4">
       
          {modifiedCocktails.map((item) => (
          
              <div className="card m-2 p-2 " key={item.id} style={{ width: "18rem" }}>
                <img src={item.imag} className="card-img-top" alt={item.name} />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <h6 className="card-title">{item.category}</h6>
                  <h6 className="card-title">{item.glass}</h6>
                  <p className="card-text">
                    {item.alcoholic}
                  </p>
                  <Link to={`/products/${item.id}`} className="btn btn-dark">
                    Details
                  </Link>

              </div>
            </div>
          ))}
       
      </div>
    </>
  );
};

export default HomePage;
