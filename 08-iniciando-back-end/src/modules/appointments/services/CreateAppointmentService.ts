import { startOfHour } from 'date-fns';
import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import Appointment from '../infra/typeorm/entities/Appointment';
import IAppointmentsRepository from '../repositories/IAppointmentsRepository';
// import AppointmentsRepository from '../infra/typeorm/repositories/AppointmentsRepository';

/**
 * [x]Recebimento das informações
 * [/]Tratativa de erros/excessões
 * [ ]Acesso ao repositório
 */

interface IRequestDTO {
  provider_id: string;
  date: Date;
}

/**
 * Dependency Inversion [SOLID]
 */
@injectable()
class CreateAppointmentService {
  // Se eu coloco private a variável já é criada antes de ser puxada aqui
  // É como se estivesse colocando antes do constructor o seguinte codigo:
  // private appointmentsRepository: IAppointmentsRepository
  constructor(
    @inject('AppointmentsRepository')
    private appointmentsRepository: IAppointmentsRepository,
  ) {}

  public async execute({
    date,
    provider_id,
  }: IRequestDTO): Promise<Appointment> {
    const appointmentDate = startOfHour(date);

    const findAppointmentInSameDate = await this.appointmentsRepository.findByDate(
      appointmentDate,
    );

    if (findAppointmentInSameDate) {
      throw new AppError('This appointment is already booked');
    }

    const appointment = await this.appointmentsRepository.create({
      provider_id,
      date: appointmentDate,
    });

    return appointment;
  }
}

export default CreateAppointmentService;
