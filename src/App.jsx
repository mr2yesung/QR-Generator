import { useEffect, useState } from "react";
import QRCode from "qrcode";
import Heading from "./components/Heading";
import QRImage from "./components/QrImage";
import URLInput from "./components/URLInput";
import Footer from "./components/Footer";

const DEFAULTQRURL = "https://yskim-qr-generator.vercel.app/";

function App() {
  const [generatedImgSource, setGeneratedImgSource] = useState("");

  async function generateQRCode(URL = DEFAULTQRURL) {
    try {
      setGeneratedImgSource(await QRCode.toDataURL(URL));
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(function () {
    generateQRCode();
  }, []);

  return (
    <>
      <div>
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
