import { useEffect, useState } from "react";
import QRCode from "qrcode";
import Heading from "./components/Heading";
import QRImage from "./components/QrImage";
import URLInput from "./components/URLInput";
import Footer from "./components/Footer";

const defaultQRURL = "https://www.google.com/";

function App() {
  /**
   * .toDataURL() method returns the dataURI of the QR code image
   * store the dataURI in generatedImgSource to pass in as a prop to QrImage Component
   * set dataURI in URLInput Component button element
   */
  const [generatedImgSource, setGeneratedImgSource] = useState("");

  async function generateQRCode(URL = defaultQRURL) {
    try {
      // QRCode.toDataURL() does not require network connection
      // tested using developer tools in chrome
      setGeneratedImgSource(await QRCode.toDataURL(URL));
    } catch (err) {
      console.error(err);
    }
  }

  // generate default google QR Code with defaultQRURL
  useEffect(() => {
    generateQRCode();
  }, []);

  return (
    <>
      <div className="flex-item">
        <header>
          <Heading />
        </header>
        <main>
          <QRImage generatedImgSource={generatedImgSource} />
          <URLInput
            generateQRCode={generateQRCode}
            generatedImgSource={generatedImgSource}
          />
        </main>
      </div>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
