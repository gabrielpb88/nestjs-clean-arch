import { Route } from 'src/@core/domain/entities/route.entity';

export interface RouteRepository {
  insert(route: Route): Promise<void>;
  findAll(): Promise<Route[]>;
}
