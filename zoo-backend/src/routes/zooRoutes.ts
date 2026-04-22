import { Router } from "express";
const router = Router();
const zoos = [
  { name: "Arignar Anna Zoological Park", location: "Chennai", year: 1855 },
  { name: "National Zoological Park", location: "Delhi", year: 1959 },
  { name: "Mysuru Zoo", location: "Mysuru", year: 1892 }
];
router.get("/", (req, res) => {
  res.json(zoos);
});
export default router;
