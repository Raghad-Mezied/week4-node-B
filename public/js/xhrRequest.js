// eslint-disable-next-line no-unused-vars
const xhrRequest = (method, url, value, cb) => {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        //   const data = xhr.response
      } else {

      }
    } else {
    }
  };
  xhr.open(method, url);
  xhr.send(value);
};
