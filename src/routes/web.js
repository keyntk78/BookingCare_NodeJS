import express from "express";

let router = express.Router();

let initWebRouter = (app) => {
  router.get("/", (req, res) => {
    return res.send("Hello key ");
  });

    router.get("/hoidanIT", (req, res) => {
    return res.send("Hello Kiet");
  });

  return app.use("/", router);
};

module.exports = initWebRouter;
