import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import AppointmentsController from '../controllers/AppointmentsController';

const appointmentsRouter = Router();
const appointmentsController = new AppointmentsController();

// SoC: Separation of Concerns (Separação de preocupações)
// DTO - Data Transfer Objects

appointmentsRouter.use(ensureAuthenticated); // Aplica o middleware em todas as rotas sequentes

// Função da Rota: Receber a requisição, chamar outro arquivo, devolver uma resposta
// appointmentsRouter.get('/', async (request, response) => {
//   const appointments = await appointmentsRepository.find();

//   return response.json(appointments);
// });

appointmentsRouter.post('/', appointmentsController.create);

export default appointmentsRouter;

// Repositorios fica tudo que é responável por mexer nos dados da aplicação
