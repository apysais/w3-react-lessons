import React from 'react';
import { useData } from './DataContext';

function Paginate() {
  const { data, page, setPage, totalPages, prevPage } = useData();
  
  const current_page = prevPage.current;

  const handle_pagination = (current_page) => {
    if (current_page < 1) {
      setPage(1);
    } else if (current_page > totalPages) {
      setPage(totalPages);
    } else {
      setPage(current_page);
    }
    prevPage.current = current_page;
  }

  return (
    <div>
      <button onClick={() => handle_pagination(page - 1)}>Previous</button>
      <span> Page {current_page} </span>
      <button onClick={() => handle_pagination(page + 1)}>Next</button>
    </div>
  );
}

export default Paginate;