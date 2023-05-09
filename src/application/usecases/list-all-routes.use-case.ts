import { RouteRepository } from '@domain/interfaces/route.repository';
import { GeoLocation } from '@domain/entities/route.entity';

export class ListAllRoutesUseCase {
  constructor(private readonly repo: RouteRepository) {}
  async execute(): Promise<ListRouteOutput[]> {
    const routes = await this.repo.findAll();
    return routes.map((route) => route.toJSON());
  }
}

export interface ListRouteOutput {
  id: string;
  title: string;
  startPosition: GeoLocation;
  endPosition: GeoLocation;
  points?: GeoLocation[];
}
