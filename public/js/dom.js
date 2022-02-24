const searchBtn = document.querySelector('#searchBtn');
const input = document.querySelector('#input');

const searchHandle = () => {
  const { value } = input;
  // eslint-disable-next-line no-undef
  xhrRequest('POST', '/search', value);
};

searchBtn.addEventListener('click', searchHandle)