import React, { useRef, useEffect } from "react";
import brightcovePlayerLoader from "@brightcove/player-loader";

const ReactPlayerLoader = function ({
  wrapperProps = {},
  wrapperClassName = "",
  accountId,
  onSuccess,
  onFailure,
  baseUrl,
  videoId,
  catalogSearch,
  catalogSequence,
  playlistId,
  playlistVideoId,
  ...rest
}) {
  const divRef = React.useRef();

  useEffect(
    function () {
      divRef.current.innerHTML = "";
      const options = {
        accountId,
        videoId,
        catalogSearch,
        catalogSequence,
        playlistId,
        playlistVideoId,
        refNode: divRef.current,
        ...rest,
      };

      brightcovePlayerLoader(options)
        .then(function (success) {
          onSuccess(divRef, success);
        })
        .catch(function (error) {
          onFailure(divRef, error);
        });
    },
    [videoId, catalogSearch, catalogSequence, playlistId, playlistVideoId]
  );

  const props = Object.assign(
    {
      className: wrapperClassName
        ? wrapperClassName + " brightcove-react-player-loader"
        : "brightcove-react-player-loader",
    },
    wrapperProps,
    {
      ref: divRef,
    }
  );

  return React.createElement("div", props);
};

export default ReactPlayerLoader;
