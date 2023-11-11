import React from "react";
import Pagination from "@mui/material/Pagination";
import usePagination from "../hooks/usePagination";

const Pages = ({ data }) => {
  const [
    totalPages,
    startPageIndex,
    endPageIndex,
    currentPageIndex, // eslint-disable-line
    displayPage,
  ] = usePagination(5, data.length);

  return (
    <>
      {(() => {
        const displayPosts = [];
        for (let i = startPageIndex; i <= endPageIndex; i++) {
          displayPosts.push(
            <div key={data[i].id}>
              <h3>
                <span>{i + 1}</span> <span>. </span>
                {data[i].title} <p>{data[i].body}</p>
              </h3>
            </div>
          );
        }
        return displayPosts;
      })()}
      <Pagination
        color="primary"
        count={totalPages}
        onChange={(event, value) => displayPage(value)}
      />
    </>
  );
};

export default Pages;
