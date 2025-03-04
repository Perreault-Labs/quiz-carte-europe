import express from "express";
const router = express.Router();

router.get("/app", (req, res) => {
  res.render("app/quiz.ejs");
});
router.get("/app/info", (req, res) => {
  res.render("app/info.ejs");
});
router.get("/app/finish", (req, res) => {
  res.render("app/finish.ejs");
});

export default router;
