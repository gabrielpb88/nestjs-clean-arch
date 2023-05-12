import { GeoLocation } from '@domain/entities/route.entity';

export class CreateRouteDto {
  title: string;
  startPosition: GeoLocation;
  endPosition: GeoLocation;
  points?: GeoLocation[];
}
