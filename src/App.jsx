import { useState } from "react";
import Heading from "./components/Heading";
import QRImage from "./components/QrImage";
import URLInput from "./components/URLInput";
import Download from "./components/Download";

function App() {
  /**
   * .toDataURL() method returns the dataURI of the QR code image
   * store the dataURI in generatedImgSource to pass in as a prop to QrImage Component
   * set dataURI in URLInput Component button element
   */
  const [generatedImgSource, setGeneratedImgSource] = useState(null);

  return (
    <div className="main-center">
      <Heading />
      <QRImage generatedImgSource={generatedImgSource} />
      <URLInput setGeneratedImgSource={setGeneratedImgSource} />
      {generatedImgSource && (
        <Download generatedImgSource={generatedImgSource} />
      )}
    </div>
  );
}

export default App;
