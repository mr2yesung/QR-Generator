function Download({ generatedImgSource }) {
  return (
    <a href={generatedImgSource} download="Your Generated QR Code">
      Download
    </a>
  );
}

export default Download;
