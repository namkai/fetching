function helper(arr: (0 | 1)[], vel: number): boolean {
  if (vel === 0) return true;
  if (arr.length === 0) return false;
  if (arr[0] === 1) return false;

  return (
    helper(arr.slice(vel), vel) ||
    helper(arr.slice(vel + 1), vel + 1) ||
    helper(arr.slice(vel - 1), vel - 1)
  );
}

export default function canStopBall(arr: (0 | 1)[], vel: number): boolean {
  return helper(arr.slice(vel), vel);
}
