import React, { useState } from "react";
import "./inbox-content.styles.css";
import DATA from "../../data";
import CategoryBtn from "../category-buttons/category-button.component";

const InboxContent = () => {
  const [data] = useState(DATA);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageLimit] = useState(10);

  const indexOfLastPost = currentPage * pageLimit;
  const indexOfFirstPost = indexOfLastPost - pageLimit;

  let currentMessages = null;

  currentMessages = data.slice(indexOfFirstPost, indexOfLastPost);
  console.log(currentMessages);
  console.log(data);
  console.log(currentPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="inbox-content">
      <CategoryBtn paginate={paginate} />
      {currentMessages.map((data) => (
        <div>{data.name}</div>
      ))}
    </div>
  );
};

export default InboxContent;