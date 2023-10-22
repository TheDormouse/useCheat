const { useState, useEffect } = require("react");

const useCheat = (cheatCodeSequence) => {
  const [codeDetected, setCodeDetected] = useState(false);

  useEffect(() => {
    let keySequence = [];
    const expectedSequence = cheatCodeSequence.join(""); // Transform array to string for comparison

    const keyHandler = (e) => {
      keySequence.push(e.keyCode);
      keySequence = keySequence.slice(-cheatCodeSequence.length); // Keep only the number of key presses we are interested in
      if (keySequence.join("") === expectedSequence) {
        setCodeDetected(true);
      }
    };

    window.addEventListener("keydown", keyHandler);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("keydown", keyHandler);
    };
  }, [cheatCodeSequence]); // Dependency array ensures effect is updated if sequence changes

  return codeDetected;
};

const useKonamiCode = () => useCheat([38, 38, 40, 40, 37, 39, 37, 39, 66, 65]); // Key codes for the Konami sequence

module.exports = { useCheat, useKonamiCode }; // Exporting for use in other files
