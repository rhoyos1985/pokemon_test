import React from 'react';
import Pagination from 'bulma-pagination-react';

const POSTS_PER_PAGE = 10;

const Pager = ({ items, currentPage, perPage = POSTS_PER_PAGE, paginate }) => {
  const pages = Math.ceil(items.length / perPage);

  return (
    <Pagination
      pages={pages}
      currentPage={currentPage}
      onChange={page => paginate(page)}
    />
  );
};

export default Pager;
