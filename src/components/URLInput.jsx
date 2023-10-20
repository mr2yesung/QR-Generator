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

  async function generateQR(URL) {
    if (!URL) return;

    try {
      onSetGeneratedImgSource(await QRCode.toDataURL(URL));
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
      <input
        type="text"
        name="url"
        placeholder="Enter your URL"
        value={currentInputURL}
        onChange={handleSetCurrentInputURL}
      />
      <button onClick={() => generateQR(currentInputURL)}>Generate</button>
    </div>
  );
}

export default URLInput;
