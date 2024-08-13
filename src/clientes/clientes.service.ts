import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { Cliente } from './entities/cliente.entity';

@Injectable()
export class ClientesService {
  private readonly clientes: Cliente[] = [];
  private id_cliente = 1;

  create(createClienteDto: CreateClienteDto) {
    //return 'This action adds a new cliente';
    const newCliente = {
      id_cliente: this.id_cliente,
      nome: createClienteDto.nome,
      fone: createClienteDto.fone
    };
    this.id_cliente = this.id_cliente + 1

    this.clientes.push(newCliente);

    return newCliente;
  }

  findAll() {
    //return `This action returns all clientes`;
    return this.clientes;
  }

  findOne(id: number) {
    //return `This action returns a #${id} cliente`;
    const cliente = this.clientes.find((clientes) => clientes.id_cliente == id);
    if(!cliente){
      throw new NotFoundException('Cliente não encontrado!');
    }
    return cliente;
  }

  update(id: number, updateClienteDto: UpdateClienteDto) {
    //return `This action updates a #${id} cliente`;
    const cliente = this.findOne(id);
    cliente.nome = updateClienteDto.nome;
    cliente.fone = updateClienteDto.fone;
    return;
  }

  remove(id: number) {
    //return `This action removes a #${id} cliente`;
    this.findOne(id);
    const clienteIndex = this.clientes.findIndex((cliente) => cliente.id_cliente == id);
    this.clientes.splice(clienteIndex, 1);
    return;
  }
}
