import {react, useEffect, useState } from "react";
import CategoryItem from "../CategoryItem/CategoryItem";
import useFetch from "../../../hooks/useFetch";
import './CategoryContainer.css';

const CategoryContainer = () => {
  const url = '/bookList.json';
  const [category, setCategory] = useState([]);
  const {data, isPending, error} = useFetch(url);

  useEffect(()=>{
      if(!isPending){
      const categories = data.books.map(el => el.category);
      // const categoriesSet =  [...new Set(categories)];

      const countOccurrences = (arr) => {
        return arr.reduce((acc, item) => {
          acc[item] = (acc[item] || 0) + 1;
          return acc;
        }, {});
      };
      setCategory(countOccurrences(categories));

      }
    }, [data]);


  return (
    <section>
      {!isPending ? Object.entries(category).map(([key, value], index)=> (<CategoryItem categoryName = {key} categoryQuantity = {value} key={index} />)) : <h1>Cargando...</h1>}
    </section>
  )
}

export default CategoryContainer