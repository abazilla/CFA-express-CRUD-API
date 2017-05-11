exports.mw = function(req, res, next) {
  console.log('Secret code: 1312')
  next()
}

exports.myLogger = function (req, res, next) {

  // console.log(`Method: ${req.method}, Url: '${req.originalUrl}', Date: ${Date()}`)
  console.log(res.statusCode, "**********")
  next()
}
