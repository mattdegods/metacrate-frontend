# Duppies NextJS Template

## Included

- Web3 Support
  - Wallet Providers
  - Auth Based RPC
  - Helper Functions
    - Transactions with Retry
    - Sending Dust
    - Getting Dust Balance
    - Getting User DeGods (Staked, Wallet, Both)
- Styling Guide Enforcement
- Duppies Color Palette
- Duppies Fonts
- Typescript Support

## Automatic style formatting

If your VS Code is not already setup to format on save, apply the following to your settings JSON to allow for proper code styling on save. Make sure to remove any formatters (prettier) or format on saves from the settings as well. 

```JSON
"eslint.format.enable": true,
"editor.codeActionsOnSave": {
  "source.fixAll.eslint": true
},
```

## Getting Started

First, run the development server:

```bash
npm i
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.
