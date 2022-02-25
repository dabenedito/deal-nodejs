import { Router } from 'express';
import CursoController from './app/controllers/CursoController';
import VideoController from "./app/controllers/VideoController";
import VideoAtualController from './app/controllers/VideoAtualController'
const routes = Router();

routes.get('/cursos', CursoController.index)
routes.post('/cursos', CursoController.store)
routes.get('/cursos/:id', CursoController.show)
routes.put('/cursos/:id', CursoController.update)
routes.delete('/cursos/:id', CursoController.delete)

routes.get('/videos', VideoController.index)
routes.post('/videos', VideoController.store)
routes.get('/videos/:id', VideoController.show)
routes.put('/videos/:id', VideoController.update)
routes.delete('/videos/:id', VideoController.delete)

routes.get('/movies/:videoName', VideoAtualController.movies)
routes.get('/', VideoAtualController.getIndex)

export default routes;