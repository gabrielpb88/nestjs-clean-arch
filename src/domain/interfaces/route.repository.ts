import { Route } from '@domain/entities/route.entity';

export interface RouteRepository {
  insert(route: Route): Promise<void>;
  findAll(): Promise<Route[]>;
}
