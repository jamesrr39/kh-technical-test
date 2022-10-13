# kh-technical-test

Implementation of a browser based game points system.

Uses React, Redux, Typescript, esbuild, prettier and also has a unit test for testing calculating the correct score.

## Notes

'E' definition in sketch, but not in points table. Can be added to `allItemsMap` if needed though.

No custom hooks - not needed here.

Test for calculateScore.

No favicon

Bootstrap because it's nice to get something working quickly. If optimising for load time/minimal bundle size, it could be removed and the parts we want to keep could be copied in.

Scroll bars not applied to the letters grid or player items table; there are not that many items, so scrolling is unlikely, even on small screens (tested in developer tools).

Uses standard HTML markup. The tab key can be used to navigate.
