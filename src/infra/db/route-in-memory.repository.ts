import { RouteRepository } from '@domain/interfaces/route.repository';
import { Route } from '@domain/entities/route.entity';

export class RouteInMemoryRepository implements RouteRepository {
  items: Route[] = [];
  async insert(route: Route): Promise<void> {
    this.items.push(route);
  }
}
