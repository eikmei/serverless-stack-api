export function calculateCost(storage) {
  const rate = storage <= 10
    ? 0.08
    : storage <= 100
      ? 0.05
      : 0.02;

  return rate * storage * 100;
}