# Initials Extractor

**Initials Extractor** is a lightweight Node.js package that extracts initials from a full name. Ideal for generating user avatars, profile initials, or any other use case where name abbreviation is needed.



![Initials Extractor](assets/materialavatar.webp)

## Installation


To install the package, use npm:

```bash
npm install initials-extractor
```

## Usage

Here is a basic example of how to use initials-extractor:

```ts
import { getInitials } from 'initials-extractor';

const name1 = 'Adão Angelo João';
const initials1 = getInitials(name1);
console.log(initials1); // Output: "AJ"

const name2 = 'Bernardo Silva';
const initials2 = getInitials(name2);
console.log(initials2); // Output: "BS"

```

## API
### `getInitials(name: string): string`
Extracts the initials from a full name.

### Parameters:
 name (string): The full name from which initials are to be extracted.

### Returns:
string: The initials extracted from the name.

## TypeScript Definitions

This package is written in TypeScript and includes type definitions to ensure good integration with editors and development tools.

**"getInitials" Function Signature**

The getInitials function has the following signature:


```ts
export function getInitials(name: string): string;
```

## Project Setup

This project uses TypeScript for development. The source code is located in the src folder, and the compiled code is generated in the dist folder.


### Project Structure

```bash
initials-extractor/
├── dist/                  # Compiled code
├── src/                   # TypeScript source code
│   └── index.ts           # Main file
├── .npmignore             # Files ignored in publication
├── package.json           # npm configuration
├── tsconfig.json          # TypeScript configuration
└── README.md              # This file

```

## Contributing

If you would like to contribute to this project, please follow these steps:

1 - Fork the repository.
2 - Create a new branch (git checkout -b my-contribution).
3 - Make your changes.
4 - Commit your changes (git commit -am 'Add new feature').
5 - Push to the branch (git push origin my-contribution).
6 - Open a Pull Request.



## Contact

If you have any questions or suggestions, feel free to open an issue or send an email to adaobegginer@example.com


Thank you for using **initials-extractor!**

```csharp

This README provides comprehensive information on installation, usage, configuration, contribution, and licensing for the package.
```