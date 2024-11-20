import { DEFAULT_PAGE_SIZE } from "@/constants/list.constants";

type Props = {
  currentPage: number;
  itemsQuantity?: number;
  itemsPerPage?: number;
  onPageChange: (page: number) => void;
};

export default function Pagination(props: Props) {
  const { currentPage, itemsQuantity = 0, itemsPerPage = DEFAULT_PAGE_SIZE } = props;
  const pageCount: number = Math.ceil(itemsQuantity / itemsPerPage);
  const isFirstPage: boolean = currentPage === 1;
  const isLastPage: boolean = currentPage === pageCount;

  return (
    <nav className="flex items-center justify-between py-4 sm:px-0">
      <div className="ml-4 flex w-0 flex-1">
        <button
          className={
            'relative inline-flex items-center rounded-md bg-white px-4 py-2 text-base font-bold ring-1 ring-inset ring-gray-200 hover:bg-gray-50 focus-visible:outline-offset-0 ' +
            (isFirstPage ? 'text-gray-400' : 'text-red-600')
          }
          onClick={() => props.onPageChange(currentPage - 1)}
          disabled={isFirstPage}
        >
          Previous
        </button>
      </div>
      <div className="hidden items-center justify-center sm:flex">
        <span className="text-sm font-semibold text-gray-300">
          Page {currentPage} of {pageCount}
        </span>
      </div>
      <div className="mr-4 flex w-0 flex-1 justify-end ">
        <button
          className={
            'relative inline-flex items-center rounded-md bg-white px-4 py-2 text-base font-bold ring-1 ring-inset ring-gray-200 hover:bg-gray-50 focus-visible:outline-offset-0 ' +
            (isLastPage ? 'text-gray-400' : 'text-red-600')
          }
          onClick={() => props.onPageChange(currentPage + 1)}
          disabled={isLastPage}
        >
          Next
        </button>
      </div>
    </nav>
  );
}
