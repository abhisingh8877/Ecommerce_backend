const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
      // pass req, res, next — not (req, res, next)
      return Promise
        .resolve(requestHandler(req, res, next))
        .catch(next)
    }
  }
  
  module.exports={ asyncHandler }