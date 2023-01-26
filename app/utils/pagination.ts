type Pagination = {
  pageSize?: number;
  offset?: number;
};

type PaginationOut = {
  prevOffset: number;
  nextOffset: number;
  prevAvailable: boolean;
  nextAvailable: boolean;
  totalPages: number;
  currentPage: number;
  totalBooks: number;
};

//---------------------------
//---------------------------
export function calculateOffsets(
  offset: number,
  pageSize: number,
  totalRecords: number
): PaginationOut {
  // calc previous offset, can't be less than zero
  let prevOffset = offset - pageSize;
  let nextAvailable = true;
  let prevAvailable = true;
  if (prevOffset < 0) {
    prevOffset = 0;
    prevAvailable = false;
  }

  // calc next offset, can't be greater than total records
  let nextOffset = offset + pageSize;
  if (nextOffset >= totalRecords) {
    nextOffset = offset;
    nextAvailable = false;
  }

  return { prevOffset, nextOffset, prevAvailable, nextAvailable };
}
