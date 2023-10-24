import PropTypes from "prop-types";

Download.propTypes = {
  generatedImgSource: PropTypes.string,
};

function Download({ generatedImgSource }) {
  return (
    <a
      href={generatedImgSource}
      download="Your Generated QR Code"
      className="btn btn-primary"
      role="button"
    >
      Download PNG
    </a>
  );
}

export default Download;
