import { Button } from '../ui/button';

interface TaskPaginationProps {
  totalItems: number;
  currentPage: number;
  setCurrentPageForCompleted: React.Dispatch<React.SetStateAction<number>>;
  setCurrentPageForInCompleted: React.Dispatch<React.SetStateAction<number>>;
  itemsPerPage: number;
  activeNav: string;
}

export default function TaskPagination({
  totalItems,
  currentPage = 1,
  setCurrentPageForCompleted,
  setCurrentPageForInCompleted,
  itemsPerPage = 3,
  activeNav,
}: TaskPaginationProps) {
  const totalPage = Math.ceil(totalItems / itemsPerPage);
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  // function for completed task
  const handlePrevForCompleted = () => {
    if (currentPage > 1) setCurrentPageForCompleted((prev: number) => prev - 1);
  };

  const handleNextForCompleted = () => {
    if (currentPage < totalPage)
      setCurrentPageForCompleted((prev: number) => prev + 1);
  };

  // function for incompleted task
  const handlePrevForInCompleted = () => {
    if (currentPage > 1)
      setCurrentPageForInCompleted((prev: number) => prev - 1);
  };

  const handleNextForInCompleted = () => {
    if (currentPage < totalPage)
      setCurrentPageForInCompleted((prev: number) => prev + 1);
  };
  return (
    <>
      {activeNav === 'Completed' ? (
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
              onClick={handlePrevForCompleted}
              disabled={currentPage <= 1}
              variant="ghost"
            >
              previous
            </Button>
            {currentPage}
            <Button
              onClick={handleNextForCompleted}
              disabled={currentPage >= totalPage}
              variant="ghost"
            >
              next
            </Button>
          </div>
        </div>
      ) : (
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
              onClick={handlePrevForInCompleted}
              disabled={currentPage <= 1}
              variant="ghost"
            >
              previous
            </Button>
            {currentPage}
            <Button
              onClick={handleNextForInCompleted}
              disabled={currentPage >= totalPage}
              variant="ghost"
            >
              next
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
