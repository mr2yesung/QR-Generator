import QRCode from "qrcode";
import { useState } from "react";
import PropTypes from "prop-types";
import Download from "./Download";

URLInput.propTypes = {
  onSetGeneratedImgSource: PropTypes.func,
  generatedImgSource: PropTypes.string,
};

function URLInput({ onSetGeneratedImgSource, generatedImgSource }) {
  /**
   * currentInputURL stores the data of user input dynamically
   * currentInputURL needs to be a string
   */
  const [currentInputURL, setCurrentInputURL] = useState("");

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
    <form onSubmit={handleSubmitGenerateQR} className="mb-3">
      <input
        type="text"
        name="url"
        placeholder="Enter your URL"
        value={currentInputURL}
        onChange={handleSetCurrentInputURL}
        className="form-control"
        aria-label="Enter your URL"
      />
      <div className="btn-container">
        <button type="submit" className="btn btn-outline-dark">
          Generate
        </button>
        <Download generatedImgSource={generatedImgSource} />
      </div>
    </form>
  );
}

export default URLInput;
