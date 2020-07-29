A React component to load a Brightcove Player in the browser written in ES5 for compatibility

## Installation

No matter how you use this component, the only place it is available is npm.

```sh
npm install --save brightcove-react-player
```

or

```sh
yarn add brightcove-react-player
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
  console.log(success.ref, success.type);
  // Supported actions
  // As a property of the component instance:
  console.log(reactPlayerLoader.player);
};

reactPlayerLoader = ReactDOM.render(
  <ReactPlayerLoader accountId="1234678" onSuccess={onSuccess} />,
  document.getElementById("fixture")
);
```

All Available Option in the player by which you can play around.

1. Callbacks:

- [Use of Promises or Callbacks](#use-of-promises-or-callbacks)
  - [Success](#success)
  - [Failure](#failure)

2. All parems supported by player

   - [Parameters](#parameters)
   - [`accountId`\*](#accountid%5C)
   - [`adConfigId`](#adconfigid)
   - [`applicationId`](#applicationid)
   - [`catalogSearch`](#catalogsearch)
   - [`catalogSequence`](#catalogsequence)
   - [`deliveryConfigId`](#deliveryconfigid)
   - [`embedId`](#embedid)
   - [`embedOptions`](#embedoptions)
     - [`embedOptions.pip`](#embedoptionspip)
     - [`embedOptions.playlist`](#embedoptionsplaylist)
     - [`embedOptions.responsive`](#embedoptionsresponsive)
     - [`embedOptions.tagName`](#embedoptionstagname)
     - [`embedOptions.unminified`](#embedoptionsunminified)
   - [`embedType`](#embedtype)
   - [`onEmbedCreated`](#onembedcreated)
   - [`onFailure`](#onfailure)
   - [`onSuccess`](#onsuccess)
   - [`options`](#options)
   - [`playerUrl`](#playerurl)
   - [`playerId`](#playerid)
   - [`playlistId`](#playlistid)
   - [`playlistVideoId`](#playlistvideoid)
   - [`Promise`](#promise)
   - [`refNode`\*](#refnode%5C)
   - [`refNodeInsert`](#refnodeinsert)
   - [`videoId`](#videoid)

3. events in the player which you can get from ref of the player(on success callback ref):

```
"loadstart","suspend","abort","error","emptied","stalled","loadedmetadata","loadeddata","canplay","canplaythrough","playing","waiting","seeking","seeked","ended","durationchange","timeupdate","progress","play","pause","ratechange","volumechange"
```

4. controls with ref(Like: ref.play())

```
  play()
  pause()
  controls()
  focus()
  currentSrc()
  autoplay()
  getChild("controlBar" or "textTrackDisplay" or "errorDisplay" or "closeButton" or "bigPlayButton" or "playToggle" or "textTrackSettings") // you can write any name of the child it should work
  language()
  languages()
  audioTracks()
  requestFullscreen()
  exitFullscreen()
  isFullscreen()
  muted(ref.muted()?false:true)
  volume(ref.volume()-.1)
  buffered()
  duration()
  bufferedEnd()
  currentTime(ref.currentTime()+5) // You can find % by currentTime / duration
  remainingTime()
  getCache()
  scrubbing()
  remoteTextTrackEls()
  textTracks()
  addRemoteTextTrack()
  tech_.featuresNativeTextTracks()
  textTrackSettings.getValues()
  errors.getAll()
  clearTimeout(fn) // used to clear the to interval of player
```

Note: these methods depends upon perameters passed on initialization. So these may or may not be available.

onSuccess (success , playerWrapperRef ) : takes in 2 parameters, success being the callback function and playerWrapperRef the ref value

onFailure (failure , playerWrapperRef ) : takes in 2 parameters, failure being the callback function and playerWrapperRef the ref value

## Props

### `attrs`

Type: `Object`

Provides attributes (props) to the component element.

For example, you may want to customize the `className` of the component (by default, `"brightcove-react-player"`) by setting props on the component like so:

```jsx
<ReactPlayerLoader wrapperClassName="my-custom-class" />
```

Rest all props can be passed as per brightcove-player

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
    onSuccess(success, wrapperRef) {
      // two ways to get the underlying player/iframe at this point.
      const { ref } = success;
      console.log(ref, success, wrapperRef);
    },
  }),
  document.getElementById("fixture")
);
```

Again,
onSuccess (success , playerWrapperRef ) : takes in 2 parameters, success being the callback function and playerWrapperRef the ref value

onFailure (failure , playerWrapperRef ) : takes in 2 parameters, failure being the callback function and playerWrapperRef the ref value

A React component to load a Brightcove Player in the browser.

## Brightcove Player Support

This library supports all features of [@brightcove/player-loader](https://github.com/brightcove/player-loader#brightcove-player-support) [npm link](https://www.npmjs.com/package/@brightcove/player-loader).

You can use this wrapper however you want.
