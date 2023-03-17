const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageButtons = [];

  for (let i = 1; i <= totalPages; i++) {
    const isActive = currentPage === i;

    pageButtons.push(
      <button
        key={i}
        className={isActive ? 'active' : ''}
        onClick={() => onPageChange(i)}
      >
        {i}
      </button>
    );
  }

  return <div className='pagination'>{pageButtons}</div>;
};

export default Pagination;
