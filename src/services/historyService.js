const STORAGE_KEY = 'visitedItems';

export const getHistory = () => {
  const history = localStorage.getItem(STORAGE_KEY);

  if (!history) {
    return [];
  }

  return JSON.parse(history);
};

export const addToHistory = (item) => {
  const history = getHistory();

  // Si ya visitó ese mismo ítem, eliminarlo para volver a colocarlo como el más reciente.
  const historyWithoutItem = history.filter(
    (historyItem) =>
      !(historyItem.id === item.id && historyItem.entity === item.entity)
  );

  const newHistory = [
    item,
    ...historyWithoutItem
  ];

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(newHistory)
  );
};