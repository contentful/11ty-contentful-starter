const contentful = require("contentful");
const client = contentful.createClient({
  space: process.env.CTFL_SPACE,
  accessToken: process.env.CTFL_ACCESSTOKEN
});

module.exports = () => (
  client.getEntries({ content_type: 'siteIdentity' })
  .then((response) => response.items)
  .catch(console.error)
);