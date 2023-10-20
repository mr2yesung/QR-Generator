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
    <form onSubmit={handleSubmitGenerateQR}>
      <input
        type="text"
        name="url"
        placeholder="Enter your URL"
        value={currentInputURL}
        onChange={handleSetCurrentInputURL}
      />
      <button type="submit">Generate</button>
    </form>
  );
}

export default URLInput;
