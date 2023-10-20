import PropTypes from "prop-types";

Download.propTypes = {
  generatedImgSource: PropTypes.string,
};

function Download({ generatedImgSource }) {
  return (
    <a href={generatedImgSource} download="Your Generated QR Code">
      Download
    </a>
  );
}

export default Download;
