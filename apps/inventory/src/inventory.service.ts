import { Injectable } from '@nestjs/common';
import { CreateInventoryInput } from './dto/create-inventory.input';
import { Inventory } from './entities/inventory.entity';

@Injectable()
export class InventoryService {
  private readonly inventories: Inventory[] = [];
  create(createInventoryInput: CreateInventoryInput) {
    this.inventories.push(createInventoryInput);
    return createInventoryInput;
  }

  findAll() {
    return this.inventories;
  }

  findOne(id: string) {
    const inventory = this.inventories.find((inventory) => inventory.id === id);
    if (!inventory) {
      throw new Error('Inventory not found');
    }
    return inventory;
  }
}
