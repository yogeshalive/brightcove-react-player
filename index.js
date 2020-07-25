const React = require("react");
const brightcovePlayerLoader = require("@brightcove/player-loader").default;

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

  React.useEffect(
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
          onSuccess(success, divRef);
        })
        .catch(function (error) {
          onFailure(error, divRef);
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

module.exports = ReactPlayerLoader;
