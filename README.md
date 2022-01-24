# Sign in with Ethereum authentication flow

Based on this excellent tutorial from Nader Dabit: https://mirror.xyz/sha.eth/i6ry1Mxez53z91ef375sMe2rO1NvK2ipACyzKA4SR9g
### How it works

Using React, ethers.js, Web3Modal, and WalletConnect, sign into an app and authenticate the user on the server, in our case using a Next.js SSR route, using either a browser wallet or a mobile wallet. This codebase also works on mobile devices, legeraging WalletConnect to connect to your mobile wallet of choice.

![Example of ](demo.gif)

### Run locally

To run this project locally, follow these steps.

1. Clone the project locally, change into the directory, and install the dependencies:

```sh
git clone git@github.com:dabit3/sign-in-with-ethereum-authentication-flow.git

cd sign-in-with-ethereum-authentication-flow

# install using NPM or Yarn
npm install

# or

yarn
```

2. Start the app

```sh
npm run build && npm start
```