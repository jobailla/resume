export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `This application has been updated. ` +
    `Reload to display the latest version?`
  )
  if (answer === true) {
    window.location.reload()
  }
}

const addScript = (url) => {
  const script = document.createElement("script");
  script.src = url;
  script.async = true;
  document.body.appendChild(script);
};

const onClientEntry = () => {
  addScript("https://kit.fontawesome.com/e0a8da67ca.js");
};

onClientEntry();
