import ReactPaginate from 'react-paginate';
import styles from './paginator.module.css';

const Paginator = ({ handlePageClick, itemsPerPage, pageCount }) => {
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel=">"
      onPageChange={handlePageClick}
      pageRangeDisplayed={itemsPerPage}
      marginPagesDisplayed={itemsPerPage}
      pageCount={pageCount}
      previousLabel="<"
      renderOnZeroPageCount={null}
      containerClassName={styles.pagination}
      pageLinkClassName={styles.link}
      previousLinkClassName={styles.link}
      nextLinkClassName={styles.link}
      activeLinkClassName={styles.link_acive}
      disabledLinkClassName={styles.disabled}
    />
  );
};

export default Paginator;
