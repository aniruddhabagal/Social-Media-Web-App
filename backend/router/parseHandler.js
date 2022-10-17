function handleError(middleware, req, res, next) {
    middleware(req, res, (err) => {
      if (err) {
        console.error(err);
        return res.status(400).send({msg:"Format not correct"}); // Bad request
      }
      next();
    });
  }

module.exports=handleError
