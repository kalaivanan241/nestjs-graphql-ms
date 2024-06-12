import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { InventoryService } from './inventory.service';
import { Inventory } from './entities/inventory.entity';
import { CreateInventoryInput } from './dto/create-inventory.input';

@Resolver(() => Inventory)
export class InventoryResolver {
  constructor(private readonly inventoryService: InventoryService) {}

  @Mutation(() => Inventory)
  createInventory(
    @Args('createInventoryInput') createInventoryInput: CreateInventoryInput,
  ) {
    return this.inventoryService.create(createInventoryInput);
  }

  @Query(() => [Inventory], { name: 'inventories' })
  findAll() {
    return this.inventoryService.findAll();
  }

  @Query(() => Inventory, { name: 'inventory' })
  findOne(@Args('id', { type: () => ID }) id: string) {
    return this.inventoryService.findOne(id);
  }
}
