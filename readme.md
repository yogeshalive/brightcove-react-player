A React component to load a Brightcove Player in the browser.

## Installation

No matter how you use this component, the only place it is available is npm.

```sh
npm install --save brightcove-react-player
```

## Standard Usage with JSX

Most React applications are using JSX and the toolchain provided by `create-react-app`.

After installing, `import` the module and use the `ReactPlayerLoader` component like any other component in your React application:

> **NOTE:** `React`/`ReactDOM` are **NOT** required, they are only used here to show a complete working example!

```js
import React from "react";
import ReactDOM from "react-dom";
import ReactPlayerLoader from "brightcove-react-player";

let reactPlayerLoader;
const onSuccess = function (success) {
  // The player object or iframe element (depending on embed type) can be
  // accessed in two ways.
  //
  // From the success object passed to the `onSuccess` callback:
  console.log(success.ref);

  // As a property of the component instance:
  console.log(reactPlayerLoader.player);
};

reactPlayerLoader = ReactDOM.render(
  <ReactPlayerLoader accountId="1234678" onSuccess={onSuccess} />,
  document.getElementById("fixture")
);
```

## Props

### `attrs`

Type: `Object`

Provides attributes (props) to the component element.

For example, you may want to customize the `className` of the component (by default, `"brightcove-react-player"`) by setting props on the component like so:

```jsx
<ReactPlayerLoader wrapperClassName={{ className: "my-custom-class" }} />
```

### Other Props

All props not specified above are passed with a few differences:

1. We cannot expose the Player Loader promise easily, so you must use the `onSuccess` and `onFailure` callbacks.
2. If you don't provide an `onFailure` callback, the failure will be handled by throwing an error.
3. We need to use `refNode` and `refNodeInsert` internally, so those props will be ignored.

All other prop changes, excluding props that are `function`'s, will cause a complete dispose/reload.

### ES Module (without JSX)

After installation, `import` the module in your JavaScript and use the `ReactPlayerLoader` component like any other component in your React application:

> **NOTE:** `React`/`ReactDOM` are **NOT** required, they are only used here to show a complete working example!

```js
import React from "react";
import ReactDOM from "react-dom";
import ReactPlayerLoader from "brightcove-react-player";

const reactPlayerLoader = ReactDOM.render(
  React.createElement(ReactPlayerLoader, {
    accountId: "any mumber",
    onSuccess(ref, success) {
      // two ways to get the underlying player/iframe at this point.
      console.log(ref, success);
    },
  }),
  document.getElementById("fixture")
);
```
