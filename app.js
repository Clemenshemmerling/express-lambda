const serverlessExpressMiddleware = require('@vendia/serverless-express/middleware')
app.use(serverlessExpressMiddleware.eventContext())

app.get('/v1', (req, res) => {
  res.json(req.apiGateway.event)
})