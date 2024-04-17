import express from 'express';
let src;
(function (_src) {
  let App;
  (function (_App) {
    const app = express();
    const port = 3000;
    app.get('/:date', (req, res) => {
      debugger;
      res.send(req.query.date);
    });
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  })(App || (App = _src.App || (_src.App = {})));
})(src || (src = {}));