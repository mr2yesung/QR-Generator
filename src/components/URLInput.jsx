import QRCode from "qrcode";
import { useState } from "react";
import PropTypes from "prop-types";

URLInput.propTypes = {
  onSetGeneratedImgSource: PropTypes.func,
};

function URLInput({ onSetGeneratedImgSource }) {
  /**
   * currentInputURL stores the data of user input dynamically
   * currentInputURL needs to be a string
   */
  const [currentInputURL, setCurrentInputURL] = useState(
    "https://www.google.com"
  );

  function handleSetCurrentInputURL(e) {
    setCurrentInputURL(e.target.value);
  }

  async function handleSubmitGenerateQR(e) {
    e.preventDefault();

    if (!currentInputURL) return;

    try {
      onSetGeneratedImgSource(await QRCode.toDataURL(currentInputURL));
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <form onSubmit={handleSubmitGenerateQR} className="input-group mb-3">
      <input
        type="text"
        name="url"
        placeholder="Enter your URL"
        value={currentInputURL}
        onChange={handleSetCurrentInputURL}
        className="form-control"
        aria-label="Enter your URL"
        aria-describedby="button-addon2"
      />
      <button type="submit" className="btn btn-outline-dark" id="button-addon2">
        Generate
      </button>
    </form>
  );
}

export default URLInput;
