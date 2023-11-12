import { useState } from "react";

const usePagination = (perPageRecords, totalPageRecords) => {
  const totalPages = Math.ceil(totalPageRecords / perPageRecords);
  const [startPageIndex, setStartPageIndex] = useState(0);
  const [endPageIndex, setEndPageIndex] = useState(perPageRecords - 1);
  const [currentPageIndex, setcurrentPageIndex] = useState(1);


  // 20 / 5 = 4
  /*
  s = 
  e = 5 * 1 -1 = 5-1 = 4
  c = 5 * 1 - 5 = 0
  spi = 1
  epi = 4 
  // perpage record = 5 ,totalrecords = 20
  totalpages = 20 / 5 = 4
  startPageIndex = 0;
  endPageIndex = 4
  currentPageIndex = 1
const displayPosts = [];
for(i = 0; i < 4; i++){
  displayPosts.push({key=> data[i].id}:value({data[i].title}))
  displayPosts.push({key=> data[i].id}:value({data[i].title}))
  displayPosts.push({key=> data[i].id}:value({data[i].title}))
  displayPosts.push({key=> data[i].id}:value({data[i].title}))
  displayPosts.push({key=> data[i].id}:value({data[i].title}))

  // 1
  // 5 - 1 = 4
  5 * 1 - 5 = 0


}

*/
  const displayPage = (pageNo) => {
    setcurrentPageIndex(pageNo);
    let end_page_index = perPageRecords * pageNo - 1;
    let start_page_index = perPageRecords * pageNo - perPageRecords;
    setStartPageIndex(start_page_index);

    if (end_page_index > totalPageRecords) {
      setEndPageIndex(totalPageRecords - 1);
    } else {
      setEndPageIndex(end_page_index);
    }
  };

  return [
    totalPages,
    startPageIndex,
    endPageIndex,
    currentPageIndex,
    displayPage,
  ];
};

export default usePagination;

// Pagination Logic and Algorithm

// https://www.zacfukuda.com/blog/pagination-algorithm

