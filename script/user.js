

const data = {
  name: 'John Doe',
  email: 'johndoe@example.com',
};

axios.post('https://example.com/api/users', data)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });