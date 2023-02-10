const logReq = (req, res, next) => {
    console.log('middleware 1', req.path);
    next();
}

module.exports = logReq;