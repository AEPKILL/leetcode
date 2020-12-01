const enum FIND_TARGET_INDEX {
  MIN,
  MAX,
  DONT_CARE
}

interface BinarySearchOptions<T> {
  findPosition?: FIND_TARGET_INDEX;
  /** arrs[i] > target */
  isGreater(source: T, target: T): boolean;
  /** arrs[i] < target */
  isLess(source: T, target: T): boolean;
}

function binarySearch<T>(
  arrs: T[],
  target: T,
  options: BinarySearchOptions<T>
) {
  if (!arrs.length) {
    return -1;
  }

  const {
    findPosition = FIND_TARGET_INDEX.DONT_CARE,
    isGreater,
    isLess
  } = options;

  let start = 0;
  let end = arrs.length - 1;
  let index = -1;
  while (start <= end) {
    const mid = Math.ceil((start + end) / 2);
    if (isGreater(arrs[mid], target)) {
      end = mid - 1;
    } else if (isLess(arrs[mid], target)) {
      start = mid + 1;
    } else {
      index = mid;
      if (findPosition === FIND_TARGET_INDEX.MIN) {
        end = mid - 1;
      } else if (findPosition === FIND_TARGET_INDEX.MAX) {
        start = mid + 1;
      } else {
        break;
      }
    }
  }

  return index;
}
