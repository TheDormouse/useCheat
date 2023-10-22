# useKonamiCode

A React hook for detecting when the [Konami Code](https://en.wikipedia.org/wiki/Konami_Code) is entered, as well as enabling custom cheat codes.

## Installation

With npm:

```shell
npm install usecheat
```

With yarn:

```shell
yarn add usecheat
```

## Usage

### useKonamiCode

The `useKonamiCode` hook listens for the specific sequence of keypresses that make up the Konami Code. When the correct sequence is entered, it returns `true`.

```javascript
const { useKonamiCode } = require("usecheat");

function MyComponent() {
  const konamiCodeEntered = useKonamiCode();

  if (konamiCodeEntered) {
    // Konami code sequence detected, do something cool!
  }

  // ...rest of your component
}
```

### useCheat

The `useCheat` hook allows you to define your own cheat code. Pass the sequence of key codes that should be detected as an array. When the correct sequence is entered, it returns `true`.

```javascript
const { useCheat } = require("usecheat");

function MyComponent() {
  // Define your own cheat code as an array of key codes
  const customCheatCode = [70, 65, 73, 82]; // 'F', 'A', 'I', 'R'
  const cheatCodeEntered = useCheat(customCheatCode);

  if (cheatCodeEntered) {
    // Custom cheat code sequence detected, unlock a feature maybe?
  }

  // ...rest of your component
}
```

## Running Tests

To run tests, use the following command:

\*\*shell
npm test

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[ISC](https://choosealicense.com/licenses/isc/)
