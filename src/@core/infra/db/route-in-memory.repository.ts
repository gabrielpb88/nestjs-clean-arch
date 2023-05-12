import { RouteRepository } from '@core/domain/interfaces/route.repository';
import { Route } from '@core/domain/entities/route.entity';

export class RouteInMemoryRepository implements RouteRepository {
  items: Route[] = [];
  async insert(route: Route): Promise<void> {
    this.items.push(route);
  }

  async findAll(): Promise<Route[]> {
    return this.items;
  }
}
