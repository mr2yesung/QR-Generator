import { useState } from "react";
import Heading from "./components/Heading";
import QRImage from "./components/QrImage";
import URLInput from "./components/URLInput";
import Download from "./components/Download";
import Footer from "./components/Footer";

const defaultGoogleQRURI =
  "data:image/png;base64,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";

function App() {
  /**
   * .toDataURL() method returns the dataURI of the QR code image
   * store the dataURI in generatedImgSource to pass in as a prop to QrImage Component
   * set dataURI in URLInput Component button element
   */
  const [generatedImgSource, setGeneratedImgSource] =
    useState(defaultGoogleQRURI);

  return (
    <>
      <div className="flex-item">
        <header>
          <Heading />
        </header>
        <main>
          <QRImage generatedImgSource={generatedImgSource} />
          <URLInput onSetGeneratedImgSource={setGeneratedImgSource} />
          <Download generatedImgSource={generatedImgSource} />
        </main>
      </div>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
