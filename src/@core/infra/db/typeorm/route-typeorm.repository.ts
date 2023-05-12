import { RouteRepository } from '@domain/interfaces/route.repository';
import { Repository } from 'typeorm';
import { Route } from '@domain/entities/route.entity';

export class RouteTypeormRepository implements RouteRepository {
  constructor(private readonly routeTypeormRepo: Repository<Route>) {}

  async findAll(): Promise<Route[]> {
    return this.routeTypeormRepo.find();
  }

  async insert(route: Route): Promise<void> {
    await this.routeTypeormRepo.save(route);
    return;
  }
}
