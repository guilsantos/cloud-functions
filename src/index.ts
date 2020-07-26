import * as escapeHtml from 'escape-html'

/**
 * HTTP Cloud Function.
 *
 * @param {Object} req Cloud Function request context.
 *                     More info: https://expressjs.com/en/api.html#req
 * @param {Object} res Cloud Function response context.
 *                     More info: https://expressjs.com/en/api.html#res
 */
export const helloHttp = (req, res) => {
  const request = {
    body: req.body,
    query: req.query
  }
  console.log('req', request)
  res.send(`Hello ${escapeHtml(req.query.name || req.body.name || 'World')}!`);
};