const createHeaders = () => {
  const apiKey = process.env.REQRES_API_KEY;

  if (!apiKey) {
    throw new Error('REQRES_API_KEY is not set');
  }

  return {
    'x-api-key': apiKey,
    'Content-Type': 'application/json'
  };
};

module.exports = { createHeaders };