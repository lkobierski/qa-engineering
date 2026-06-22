const testData = {
  users: {
    existingUserId: 2,
    nonExistingUserId: 999
  },

  auth: {
    validEmail: 'eve.holt@reqres.in',
    validPassword: 'cityslicka',
    registerPassword: 'pistol'
  },

  newUser: {
    name: 'John Doe',
    job: 'QA Engineer'
  },

  updatedUser: {
    name: 'John Doe Updated',
    job: 'Senior QA Engineer'
  }
};

module.exports = { testData };