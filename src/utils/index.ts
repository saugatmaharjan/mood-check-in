type Range = [number, number];

export function clamp(value: number, [min, max]: Range): number {
  return Math.min(Math.max(value, min), max);
}

export function interpolate(
  value: number,
  [min, max]: Range,
  [newMin, newMax]: Range,
): number {
  // First, clamp the value within the original range
  const clampedValue = clamp(value, [min, max]);

  // Calculate the percentage of the value within the original range
  const percentage = (clampedValue - min) / (max - min);

  // Map the percentage to the new range
  const newValue = newMin + percentage * (newMax - newMin);

  return newValue;
}
