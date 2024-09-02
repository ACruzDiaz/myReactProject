import {react, useEffect, useState } from "react";
import CategoryItem from "../CategoryItem/CategoryItem";
import './CategoryContainer.css';
import { useParams } from 'react-router-dom';

const CategoryContainer = ({data}) => {
  const [category, setCategory] = useState([]);

  useEffect(()=>{
      const categories = data.map(el => el.category);
      const countOccurrences = (arr) => {
        return arr.reduce((acc, item) => {
          acc[item] = (acc[item] || 0) + 1;
          return acc;
        }, {});
      };
      setCategory(countOccurrences(categories));
    }, []);

  return (
    <section className="categoryContainer">
      {Object.entries(category).map(([key, value], index)=> (<CategoryItem categoryName = {key} categoryQuantity = {value} key={index} />))}
    </section>
  )
}

export default CategoryContainer