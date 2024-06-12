import { Injectable } from '@nestjs/common';
import { CreateTicketInput } from './dto/create-ticket.input';
import { Ticket } from './entities/ticket.entity';

@Injectable()
export class TicketsService {
  private readonly tickets: Ticket[] = [];

  create(createTicketInput: CreateTicketInput) {
    this.tickets.push(createTicketInput);
    return createTicketInput;
  }

  findAll() {
    return this.tickets;
  }

  findOne(id: string) {
    return this.tickets.find((ticket) => ticket.id === id);
  }
}
