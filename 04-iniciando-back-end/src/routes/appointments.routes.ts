import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import { parseISO } from 'date-fns';

import AppointmentsRepository from '../repositories/AppointmentsRepository';
import CreateAppointmentService from '../services/CreateAppointmentService';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const appointmentsRouter = Router();

// SoC: Separation of Concerns (Separação de preocupações)
// DTO - Data Transfer Objects

appointmentsRouter.use(ensureAuthenticated); // Aplica o middleware em todas as rotas sequentes

// Função da Rota: Receber a requisição, chamar outro arquivo, devolver uma resposta
appointmentsRouter.get('/', async (request, response) => {
  const appointmentsRepository = getCustomRepository(AppointmentsRepository);
  const appointments = await appointmentsRepository.find();

  return response.json(appointments);
});

appointmentsRouter.post('/', async (request, response) => {
  const { provider_id, date } = request.body;

  const parsedDate = parseISO(date);

  const createAppointment = new CreateAppointmentService();

  const appointment = await createAppointment.execute({
    date: parsedDate,
    provider_id,
  });

  return response.json(appointment);
});

export default appointmentsRouter;

// Repositorios fica tudo que é responável por mexer nos dados da aplicação