module.exports = async function (context, req) {
  const name = req.query.name || (req.body && req.body.name);
  context.res = {
    headers: { "Content-Type": "application/json" },
    body: {
      message: name
        ? `Hello, ${name}! Your input was received successfully.`
        : "Please provide a name in the query string or request body."
    }
  };
};
