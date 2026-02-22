// Common stop words to exclude
const STOP_WORDS = new Set([
  'the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for',
  'of', 'with', 'by', 'from', 'up', 'about', 'into', 'through', 'during',
  'is', 'are', 'was', 'were', 'be', 'been', 'being', 'have', 'has', 'had',
  'do', 'does', 'did', 'will', 'would', 'could', 'should', 'may', 'might',
  'can', 'could', 'must', 'shall', 'i', 'you', 'he', 'she', 'it', 'we',
  'they', 'them', 'this', 'that', 'these', 'those', 'as', 'if', 'so', 'than',
  'what', 'which', 'who', 'whom', 'why', 'where', 'when', 'how', 'all', 'each',
  'every', 'both', 'few', 'more', 'most', 'other', 'some', 'such', 'no', 'nor',
  'not', 'only', 'own', 'same', 'so', 'too', 'very', 'just', 'my', 'your', 'his',
  'her', 'its', 'our', 'their', 'there', 'here', 'am', 'email', 'phone', 'address',
  'name', 'contact', 'info', 'information', 'etc', ''
]);

export const extractKeywords = (text) => {
  if (!text) return [];

  // Convert to lowercase and split into words
  const words = text
    .toLowerCase()
    // Remove special characters but keep alphanumeric and hyphens
    .replace(/[^\w\s-+#]/g, ' ')
    .split(/\s+/)
    .filter(word => word.length > 2); // Only words longer than 2 characters

  // Remove duplicates and stop words
  const keywords = [...new Set(words)]
    .filter(word => !STOP_WORDS.has(word) && word.trim().length > 0);

  return keywords;
};
