const { renderHook, act } = require("@testing-library/react-hooks");
const { useCheat, useKonamiCode } = require("./useKonamiCode"); // Adjusting the import

describe("useCheatCode hook", () => {
  let map = {};

  beforeEach(() => {
    map = {};
    window.addEventListener = jest.fn((event, cb) => {
      map[event] = cb;
    });
    window.removeEventListener = jest.fn();
  });

  function simulateKeydown(keyCode) {
    act(() => {
      if (map.keydown) {
        map.keydown({ keyCode: keyCode, preventDefault: jest.fn() });
      }
    });
  }

  it("detects the Konami code", () => {
    const konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
    const { result } = renderHook(() => useKonamiCode());

    konamiCode.forEach((keyCode) => simulateKeydown(keyCode));

    expect(result.current).toBe(true);
  });

  it("does not detect incorrect code sequence", () => {
    const incorrectSequence = [38, 40, 38, 40, 37, 39, 37, 39, 66, 65];
    const { result } = renderHook(() => useKonamiCode());

    incorrectSequence.forEach((keyCode) => simulateKeydown(keyCode));

    expect(result.current).toBe(false);
  });

  // Test case for useCheat with a custom sequence
  it("detects custom cheat code", () => {
    const customCode = [70, 65, 73, 82]; // e.g., 'F', 'A', 'I', 'R'
    const { result } = renderHook(() => useCheat(customCode));

    customCode.forEach((keyCode) => simulateKeydown(keyCode));

    expect(result.current).toBe(true);
  });

  // More tests can be added here for other cheat codes or cases
});
