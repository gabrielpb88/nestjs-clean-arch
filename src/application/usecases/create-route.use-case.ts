import { GeoLocation, Route } from '@domain/entities/route.entity';
import { RouteRepository } from '@domain/interfaces/route.repository';

export class CreateRouteUseCase {
  constructor(private readonly routeRepo: RouteRepository) {}

  async execute(input: CreateRouteInput): Promise<CreateRouteOutput> {
    const route = new Route(input);
    await this.routeRepo.insert(route);
    return Object.assign({}, route);
  }
}

export interface CreateRouteInput {
  title: string;
  startPosition: GeoLocation;
  endPosition: GeoLocation;
  points?: GeoLocation[];
}

export interface CreateRouteOutput {
  title: string;
  startPosition: GeoLocation;
  endPosition: GeoLocation;
  points?: GeoLocation[];
}
