const cheesify = () => {
  // TODO: Add the image replacement script here
  document.querySelectorAll('img').forEach( (img) => {
    img.src = `https://source.unsplash.com/${img.width}x${img.height}/?cheese&${Math.random()}`;
    img.srcset = img.src;
  })

  document.querySelectorAll("img").forEach((img) => {
    img.src = `https://source.unsplash.com/${img.width}x${
      img.height
    }/?cheese&${Math.random()}`;
    img.srcset = img.src;
  });
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "cheesify") cheesify();
});

// TODO: Write a function to listen for messages on the content page using chrome.runtime.onMessage
