import { Router } from "express";
import { healthcheck } from "../controllers/healthCheckController.js";

const router = Router()


// "/api/v1/healthcheck"
router.route("/").get(healthcheck)
router.route("/test").get(healthcheck)

export default router;