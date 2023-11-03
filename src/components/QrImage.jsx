import PropTypes from "prop-types";

QrImage.propTypes = {
  generatedImgSource: PropTypes.string,
};

function QrImage({ generatedImgSource }) {
  return <img src={generatedImgSource} alt="QR Code" />;
}

export default QrImage;
