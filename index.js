const React = require("react");
const brightcovePlayerLoader = require("@brightcove/player-loader").default;

const ReactPlayerLoader = function (params) {
  const wrapperProps = params.wrapperProps || {};
  const wrapperClassName = params.wrapperClassname || "";
  const accountId = params.accountId;
  const onSuccess = params.onSuccess || function () {};
  const onFailure = params.onFailure || function () {};
  const baseUrl = params.baseUrl;
  const videoId = params.videoId;
  const catalogSearch = params.catalogSearch;
  const catalogSequence = params.catalogSequence;
  const playlistId = params.playlistId;
  const playlistVideoId = params.playlistVideoId;
  const rest = Object.assign({}, params);

  delete rest.wrapperProps;
  delete rest.wrapperClassName;
  delete rest.accountId;
  delete rest.onSuccess;
  delete rest.onFailure;
  delete rest.baseUrl;
  delete rest.videoId;
  delete rest.catalogSearch;
  delete rest.catalogSequence;
  delete rest.playlistId;
  delete rest.playlistVideoId;

  const divRef = React.useRef();

  React.useEffect(
    function () {
      divRef.current.innerHTML = "";
      const options = Object.assign({}, rest, {
        accountId: accountId,
        videoId: videoId,
        catalogSearch: catalogSearch,
        catalogSequence: catalogSequence,
        playlistId: playlistId,
        playlistVideoId: playlistVideoId,
        refNode: divRef.current,
      });
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
