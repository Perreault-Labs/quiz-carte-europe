import express from "express";
const router = express.Router();

router.get("/admin", (req, res) => {
  res.send("Admin Page");
});

export default router;
