const getPageNumbers = (
  currentPage: number,
  totalPages: number,
  maxVisiblePages: number,
): (number | "ellipsis")[] => {
  const pages: (number | "ellipsis")[] = [];

  if (totalPages <= maxVisiblePages) {
    // Если страниц мало, показываем все
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
  } else {
    // Вычисляем границы
    const leftBound = Math.max(
      1,
      currentPage - Math.floor(maxVisiblePages / 2),
    );
    const rightBound = Math.min(totalPages, leftBound + maxVisiblePages - 1);

    // Корректируем leftBound, если rightBound достиг максимума
    const adjustedLeftBound = Math.max(1, rightBound - maxVisiblePages + 1);

    // Добавляем первую страницу и многоточие если нужно
    if (adjustedLeftBound > 2) {
      pages.push(1);
      pages.push("ellipsis");
    } else if (adjustedLeftBound === 2) {
      pages.push(1);
    }

    // Добавляем основные страницы
    for (let i = adjustedLeftBound; i <= rightBound; i++) {
      pages.push(i);
    }

    // Добавляем последнюю страницу и многоточие если нужно
    if (rightBound < totalPages - 1) {
      pages.push("ellipsis");
      pages.push(totalPages);
    } else if (rightBound === totalPages - 1) {
      pages.push(totalPages);
    }
  }

  return pages;
};

export { getPageNumbers };
