const videoElement = document.getElementById("video");
const button = document.getElementById("button");

// Prompt to select media stream, pass to video element, then play
async function selectMediaStrea() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    console.log("Something went wrong", error);
  }
}

button.addEventListener("click", async () => {
  //Disable the button
  button.disabled = true;
  // Start pic in pic
  await videoElement.requestPictureInPicture();
  // Reset btn
  button.disabled = false;
});

// On load
selectMediaStrea();
