import { Button } from '../ui/button';

export default function TaskPagination({
  totalItems,
  currentPage = 1,
  setCurrentPage,
  itemsPerPage = 3,
}: any) {
  const totalPage = Math.ceil(totalItems / itemsPerPage);
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage((prev: number) => prev - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPage) setCurrentPage((prev: number) => prev + 1);
  };

  return (
    <div className="flex justify-between items-center">
      <div>
        <p className="text-sm text-gray-700">
          Showing <span className="font-medium">{startItem}</span> to{' '}
          <span className="font-medium">{endItem}</span> of{' '}
          <span className="font-medium">{totalItems}</span> entries
        </p>
      </div>

      <div>
        <Button
          onClick={handlePrev}
          disabled={currentPage <= 1}
          variant="ghost"
        >
          previous
        </Button>
        {currentPage}
        <Button
          onClick={handleNext}
          disabled={currentPage >= totalPage}
          variant="ghost"
        >
          next
        </Button>
      </div>
    </div>
  );
}
