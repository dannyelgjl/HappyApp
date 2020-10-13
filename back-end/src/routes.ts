import { Router } from "express";
import { getRepository } from "typeorm";
import Orphanage from "./models/Orphanage";

import OrphanagesController from "./controllers/OrphanagesController";

const routes = Router();

routes.post("/orphanages", OrphanagesController.create);

export default routes;
