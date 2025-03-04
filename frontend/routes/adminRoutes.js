import express from "express";
const router = express.Router();

router.get("/admin", (req, res) => {
  res.render("admin/dashboard.ejs");
});
router.get("/admin/login", (req, res) => {
  res.render("admin/login.ejs");
});

export default router;
