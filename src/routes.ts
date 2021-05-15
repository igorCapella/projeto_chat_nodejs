import { request, Router } from "express";
import { MessagesController } from "./controllers/MessagesController";
import { SettinsController } from "./controllers/SettingsController";
import { UsersController } from "./controllers/UsersController";
/**
 * Tipos de parâmetros
 * Routes Params => Parâmetros de rotas
 * http://localhost:3333/settings/1
 * 
 * Query Params => Filtros e buscas
 * http://localhost:3333/settings/1?search=algumacoisa
 * 
 * Body Params => {
 * 
 * }
 */

const routes = Router();

const settingController = new SettinsController();
const usersController = new UsersController();
const messagesController = new MessagesController();

routes.post("/settings", settingController.create);
routes.get("/settings/:username", settingController.findByUsername);
routes.put("/settings/:username", settingController.update);

routes.post("/users", usersController.create);

routes.post("/messages", messagesController.create);
routes.get("/messages/:id", messagesController.showByUser);

export { routes };