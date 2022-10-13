# kh-technical-test

Implementation of a browser based game points system.

Uses React, Redux, Typescript, esbuild, prettier and also has a unit test for testing calculating the correct score.

## Notes

- 'E' definition in sketch, but not in points table, so it's left out of the UI for now. If desired, it can be added alongside the other `Item` definitions and added to `allItemsMap`, which would pull it into the application.
- No custom hooks - not needed here.
- Test for calculateScore and testing via Jest.
- No favicon - this can be added later.
- Bootstrap because it's nice to get something working quickly. If optimising for load time/minimal bundle size, it could be removed and the parts we want to keep could be copied in.
- Scroll bars not applied to the letters grid or player items table; there are not that many items, so scrolling is unlikely, even on small screens (tested in developer tools).
- Uses standard HTML markup. The tab key can be used to navigate.
