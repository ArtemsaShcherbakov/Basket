import { getPageNumbers } from "./Pagination.utils";

import {
  StyledPaginationContainer,
  StyledPaginationList,
  StyledPaginationItem,
  StyledPageButton,
  StyledNavigationIcon,
  StyledEllipsis,
} from "./Pagination.styles";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  maxVisiblePages?: number;
  showFirstLast?: boolean;
  showPrevNext?: boolean;
  size?: "small" | "medium" | "large";
  className?: string;
}

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  maxVisiblePages = 5,
  showFirstLast = true,
  showPrevNext = true,
  size = "medium",
  className,
}: PaginationProps) => {
  const pageNumbers = getPageNumbers(currentPage, totalPages, maxVisiblePages);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      onPageChange(page);
    }
  };

  return (
    <StyledPaginationContainer size={size} className={className}>
      {showFirstLast && (
        <StyledPaginationList>
          <StyledPaginationItem>
            <StyledPageButton
              onClick={() => handlePageChange(1)}
              disabled={currentPage === 1}
              size={size}
              aria-label="Первая страница"
              title="Первая страница"
            >
              <StyledNavigationIcon direction="first" />
            </StyledPageButton>
          </StyledPaginationItem>
        </StyledPaginationList>
      )}

      {showPrevNext && (
        <StyledPaginationList>
          <StyledPaginationItem>
            <StyledPageButton
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              size={size}
              aria-label="Предыдущая страница"
              title="Предыдущая страница"
            >
              <StyledNavigationIcon direction="prev" />
            </StyledPageButton>
          </StyledPaginationItem>
        </StyledPaginationList>
      )}

      <StyledPaginationList>
        {pageNumbers.map((page, index) => (
          <StyledPaginationItem key={`${page}-${index}`}>
            {page === "ellipsis" ? (
              <StyledEllipsis size={size} aria-hidden="true">
                •••
              </StyledEllipsis>
            ) : (
              <StyledPageButton
                onClick={() => handlePageChange(page)}
                active={currentPage === page}
                size={size}
                aria-label={`Страница ${page}`}
                aria-current={currentPage === page ? "page" : undefined}
              >
                {page}
              </StyledPageButton>
            )}
          </StyledPaginationItem>
        ))}
      </StyledPaginationList>

      {showPrevNext && (
        <StyledPaginationList>
          <StyledPaginationItem>
            <StyledPageButton
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              size={size}
              aria-label="Следующая страница"
              title="Следующая страница"
            >
              <StyledNavigationIcon direction="next" />
            </StyledPageButton>
          </StyledPaginationItem>
        </StyledPaginationList>
      )}

      {showFirstLast && (
        <StyledPaginationList>
          <StyledPaginationItem>
            <StyledPageButton
              onClick={() => handlePageChange(totalPages)}
              disabled={currentPage === totalPages}
              size={size}
              aria-label="Последняя страница"
              title="Последняя страница"
            >
              <StyledNavigationIcon direction="last" />
            </StyledPageButton>
          </StyledPaginationItem>
        </StyledPaginationList>
      )}
    </StyledPaginationContainer>
  );
};

export { Pagination };
