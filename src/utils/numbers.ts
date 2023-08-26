/**
 * Generate a random integer between min and max, inclusive.
 *
 * @param {number} min - The minimum value (inclusive).
 * @param {number} max - The maximum value (inclusive).
 * @returns {number} - A random integer between min and max, inclusive.
 *
 * @example
 * const randomNum = randomInt(1, 10);  // Generates a random integer between 1 and 10
 */
export function randomInt(min: number, max: number): number {
  const xmin = Math.ceil(min);
  const xmax = Math.floor(max);
  return Math.floor(Math.random() * (xmax - xmin + 1)) + min;
}

/**
 * Format a number to a whole number with comma separators.
 *
 * @param {number} number - The number to be formatted.
 * @returns {string} - The formatted number as a string with no decimals.
 *
 * @example
 * const decimalNumber = 2450000.5678;
 * const wholeNumber = formatWholeNumber(decimalNumber);  // Outputs "2,450,000"
 */
export const formatWholeNumber = (number: number): string => {
  return number.toLocaleString(undefined, {
    maximumFractionDigits: 0,
  });
};

/**
 * Format a number to a decimal number with comma separators and a maximum of 2 decimal places.
 *
 * @param {number} number - The number to be formatted.
 * @returns {string} - The formatted number as a string with 2 decimal places.
 *
 * @example
 * const decimalNumber = 2450000.5678;
 * const formattedDecimalNumber = formatDecimalNumbers(decimalNumber);  // Outputs "2,450,000.57"
 */
export const formatDecimalNumbers = (number: number): string => {
  return number.toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });
};
