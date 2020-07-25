import React, { useRef, useEffect } from "react";
import brightcovePlayerLoader from "@brightcove/player-loader";

const ReactPlayerLoader = ({
  wrapperProps,
  wrapperClassName,
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
}) => {
  const divRef = React.useRef();

  useEffect(() => {
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
  }, [videoId, catalogSearch, catalogSequence, playlistId, playlistVideoId]);

  return (
    <div
      className={`${wrapperClassName} brightcove-react-player-loader`}
      {...wrapperProps}
      ref={divRef}
    />
  );
};

export default ReactPlayerLoader;
