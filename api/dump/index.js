module.exports = async function (context, req) {
  context.res = {
    status: 200,
    body: {
      method: req.method,
      url: req.originalUrl,
      headers: req.headers,
      query: req.query,
      body: req.body
    }
  };
};
