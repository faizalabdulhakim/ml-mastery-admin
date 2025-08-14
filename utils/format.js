/**
 * Formats an array of items into a comma-separated string
 * @param {Array} items - Array of items to format
 * @returns {string} - Formatted string with commas and spaces
 */
export const formatArrayWithCommas = (items) => {
  if (!Array.isArray(items) || items.length === 0) {
    return '';
  }
  
  return items.join(', ');
};

/**
 * Formats an array for display with proper comma separation
 * @param {Array} items - Array of items to format
 * @returns {string} - Comma-separated string with space after each comma
 */
export const formatArrayWithCommaSpace = (items) => {
  if (!Array.isArray(items) || items.length === 0) {
    return '';
  }
  
  return items.join(', ');
};

export default formatArrayWithCommas;
