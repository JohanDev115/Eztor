export function generateID(array) {
  if (!array.length) {
    return 1
  }
  const idList = array.map(item => item.id)
  const maxId = Math.max(...idList);
  return maxId + 1;
}