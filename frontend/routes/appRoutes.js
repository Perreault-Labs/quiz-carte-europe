import express from "express";
const router = express.Router();

router.get("/app/countries", (req, res) => {
  res.render("app/quizCountries.ejs");
});

router.get("/app/capitals", (req, res) => {
  res.render("app/quizCapitals.ejs");
});

router.get("/app/info", (req, res) => {
  if (!req.query.name || !parseInt(req.query.group)) 
    return res.send("error")
    

  res.render("app/info.ejs");
});
router.get("/app/finish", (req, res) => {
  res.render("app/finish.ejs");
});

export default router;
