const contentful = require("contentful");
const client = contentful.createClient({
  space: process.env.CTFL_SPACE,
  accessToken: process.env.CTFL_ACCESSTOKEN
});

module.exports = () => (
  client.getEntries({ content_type: 'siteIdentity', order: 'sys.createdAt' })
  .then((response) => response.items[0].fields)
  .catch(console.error)
);