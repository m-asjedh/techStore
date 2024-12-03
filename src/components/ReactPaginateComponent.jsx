/* eslint-disable react/prop-types */
import ReactPaginate from "react-paginate";

const ReactPaginateComponent = ({ pageCount, onPageChange }) => {
  return (
    <ReactPaginate
      className="flex justify-center items-center mt-8 space-x-6 p-3 mx-auto "
      previousLabel={"Previous"}
      nextLabel={"Next"}
      pageCount={pageCount}
      onPageChange={onPageChange}
      containerClassName={"pagination"}
      previousLinkClassName={" text-black p-2 rounded border border-black "}
      nextLinkClassName={" text-black p-2 rounded border border-black"}
      disabledClassName={"text-black cursor-not-allowed"}
      activeClassName={"bg-black text-white p-2 rounded"}
      pageLinkClassName={"bg-white text-black p-2 rounded"}
      breakClassName={"pagination__break"}
    />
  );
};

export default ReactPaginateComponent;
