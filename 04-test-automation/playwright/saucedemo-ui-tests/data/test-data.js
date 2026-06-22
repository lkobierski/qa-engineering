const testData = {
  users: {
    standardUser: {
      username: 'standard_user',
      password: 'secret_sauce'
    },

    lockedOutUser: {
      username: 'locked_out_user',
      password: 'secret_sauce'
    },

    problemUser: {
      username: 'problem_user',
      password: 'secret_sauce'
    },

    performanceGlitchUser: {
      username: 'performance_glitch_user',
      password: 'secret_sauce'
    },

    invalidUser: {
      username: 'invalid_user',
      password: 'invalid_password'
    }
  },

  messages: {
    lockedOutUserError: 'Epic sadface: Sorry, this user has been locked out.',
    invalidCredentialsError: 'Epic sadface: Username and password do not match any user in this service',
    missingUsernameError: 'Epic sadface: Username is required',
    missingPasswordError: 'Epic sadface: Password is required'
  },

  products: {
    backpack: {
      name: 'Sauce Labs Backpack',
      price: '$29.99'
    },

    bikeLight: {
      name: 'Sauce Labs Bike Light',
      price: '$9.99'
    },

    boltTShirt: {
      name: 'Sauce Labs Bolt T-Shirt',
      price: '$15.99'
    }
  },

  sortOptions: {
    nameAsc: 'az',
    nameDesc: 'za',
    priceAsc: 'lohi',
    priceDesc: 'hilo'
  }
};

module.exports = { testData };