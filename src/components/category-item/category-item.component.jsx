import "./category-item.styles.scss";
import React from "react";

export default function CategoryItem({ category }) {
  return (
    <div  className="category-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${category.imageUrl})`,
        }}
      />
      <div className="category-body-container">
        <h2>{category.title}</h2>
        <p>shop now</p>
      </div>
    </div>
  );
}
