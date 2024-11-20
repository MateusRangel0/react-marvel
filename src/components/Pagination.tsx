import { DEFAULT_PAGE_SIZE } from "@/constants/list.constants";
import Button from "./Button";

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
      <div className="flex w-auto">
        <Button
          onClick={() => props.onPageChange(currentPage - 1)}
          disabled={isFirstPage}
          type="button"
          className="px-4"
        >
          Previous
        </Button>
      </div>
      <div className="hidden items-center justify-center sm:flex">
        <span className="text-sm font-semibold text-gray-300">
          Page {currentPage} of {pageCount}
        </span>
      </div>
      <div className="flex w-auto justify-end">
        <Button
          onClick={() => props.onPageChange(currentPage + 1)}
          disabled={isLastPage}
          type="button"
          className="px-4"
        >
          Next
        </Button>
      </div>
    </nav>
  );
}
