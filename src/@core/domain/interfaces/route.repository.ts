import { Route } from '@core/domain/entities/route.entity';

export interface RouteRepository {
  insert(route: Route): Promise<void>;
  findAll(): Promise<Route[]>;
}
