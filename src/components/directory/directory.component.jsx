import React from "react";
import "./directory.styles.scss";
import CategoryItem from "../category-item/category-item.component";

export default function Directory({ categories }) {
  return (
    <div className="directory-container">
      {categories.map((category) => {
        return (
          <CategoryItem key={category.id} category={category}></CategoryItem>
        );
      })}
    </div>
  );
}
