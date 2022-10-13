# kh-technical-test

Implementation of a browser based game points system.

Uses React, Redux, Typescript, esbuild, prettier and also has a unit test for testing calculating the correct score.

## Run locally

- Install `node` and `yarn`, and run `yarn` in the project directory to install dependencies.
- Then `yarn start`, which builds the HTML, JS and CSS into the `dist` folder and watches the project files for changes, and rebuilds.
- Then run a simple file server of your choice on the `dist` directory. If you have Python 3 installed, `python3 -m http.server --directory dist 9000` works. Navigate to http://localhost:9000 and the application will be waiting for you.

## Other build targets

- `yarn build`: builds the application, the same as `yarn start`, except it does not watch the project files for changes when it has finished.
- `yarn lint`: runs prettier. There is also `yarn lint:fix`, which fixes errors in place, if possible.
- `yarn test`: runs test suite. This is not an extensive suite, considering how small the application is.

There is also a github workflow set up to lint, test, build and deploy the project to https://jamesrr39.github.io/kh-technical-test/

## Notes

- 'E' definition in sketch, but not in points table, so it's left out of the UI for now. If desired, it can be added alongside the other `Item` definitions and added to `allItemsMap`, which would pull it into the application.
- No custom hooks - not needed here.
- Test for calculateScore and testing via Jest.
- No favicon - this can be added later.
- Bootstrap because it's nice to get something working quickly. If optimising for load time/minimal bundle size, it could be removed and the parts we want to keep could be copied in.
- Scroll bars not applied to the letters grid or player items table; there are not that many items, so scrolling is unlikely, even on small screens (tested in developer tools).
- Uses standard HTML markup. The tab key can be used to navigate.
- Tested in the device emulator - the layout works on iPad!
