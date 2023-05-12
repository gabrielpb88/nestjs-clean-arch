import { Module } from '@nestjs/common';
import { RoutesController } from './routes.controller';
import { RouteInMemoryRepository } from '@infra/db/in-memory/route-in-memory.repository';
import { CreateRouteUseCase } from '@application/usecases/create-route.use-case';
import { RouteRepository } from '@domain/interfaces/route.repository';
import { ListAllRoutesUseCase } from '@application/usecases/list-all-routes.use-case';

@Module({
  controllers: [RoutesController],
  providers: [
    {
      provide: RouteInMemoryRepository,
      useClass: RouteInMemoryRepository,
    },
    {
      provide: CreateRouteUseCase,
      useFactory: (routeRepository: RouteRepository) => {
        return new CreateRouteUseCase(routeRepository);
      },
      inject: [RouteInMemoryRepository],
    },
    {
      provide: ListAllRoutesUseCase,
      useFactory: (routeRepository: RouteRepository) => {
        return new ListAllRoutesUseCase(routeRepository);
      },
      inject: [RouteInMemoryRepository],
    },
  ],
})
export class RoutesModule {}
