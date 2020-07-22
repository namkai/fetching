import canStopBall from "./canStopBall";

describe("canStopBall", () => {
  it("should return true if the ball can successfully slow down", () => {
    expect(canStopBall([0, 1, 0, 0, 1, 0, 0], 3)).toEqual(true);
    expect(canStopBall([1, 0], 1)).toEqual(true);
  });

  it("should return false if the ball cannot slow down in time", () => {
    expect(canStopBall([0, 1, 0, 0, 1, 0], 3)).toEqual(false);
    expect(canStopBall([0], 1)).toEqual(false);
  });
});
