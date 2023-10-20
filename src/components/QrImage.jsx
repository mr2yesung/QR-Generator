function QrImage({ generatedImgSource }) {
  // todo: set default effect when generatedImgSource is null (in App.jsx or QrImage.jsx)
  return <img src={generatedImgSource} />;
}

export default QrImage;
