// run `node index.js` in the terminal
console.log(`Hello Node.js v${process.versions.node}!`);

const axios = require('axios');

// access systems page with host name
const getHost = () => {
  try {
    return axios.get(
      'http://challenge.phosphorus.io/setup/system/system.html?system_hostname=CC8160',
      {
        auth: { username: 'root', password: 'password1' },
      }
    );
  } catch (error) {
    console.error(error);
  }
};

const countBreeds = async () => {
  const breeds = getBreeds()
    .then((response) => {
      if (response.data.message) {
        console.log(
          `Got ${Object.entries(response.data.message).length} breeds`
        );
      }
    })
    .catch((error) => {
      console.log(error);
    });
};
countBreeds();

const newOtion = {
  method: 'POST',
  foo: 'bar',
};
axios.post('https://site.com/', { foo: 'bar' });

// Params: Host Name, Model Name, Serial Number, Firmwarversion
const getModel = () => {
  try {
    return axios.get(
      'http://challenge.phosphorus.io/cgi-bin/admin/getparam.cgi?system_info_modelname=CC8160',
      {
        auth: { username: 'root', password: 'password1' },
      }
    );
  } catch (error) {
    console.error(error);
  }
};
const countModels = async () => {
  const models = getModelss()
    .then((response) => {
      if (response.data.message) {
        console.log(
          `Got ${Object.entries(response.data.message).length} models`
        );
      }
    })
    .catch((error) => {
      console.log(error);
    });
};
countModels();

const newModel = {
  method: 'POST',
  foo: 'bar',
};
axios.post('https://site.com/', { foo: 'bar' });
