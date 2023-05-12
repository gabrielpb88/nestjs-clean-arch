import { Module } from '@nestjs/common';
import { RoutesController } from './routes.controller';
import { RouteInMemoryRepository } from '@infra/db/in-memory/route-in-memory.repository';
import { CreateRouteUseCase } from '@application/usecases/create-route.use-case';
import { RouteRepository } from '@domain/interfaces/route.repository';
import { ListAllRoutesUseCase } from '@application/usecases/list-all-routes.use-case';
import { getDataSourceToken, TypeOrmModule } from '@nestjs/typeorm';
import { RouteSchema } from '@infra/db/typeorm/route.schema';
import { RouteTypeormRepository } from '@infra/db/typeorm/route-typeorm.repository';
import { DataSource } from 'typeorm';
import { Route } from '@domain/entities/route.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RouteSchema])],
  controllers: [RoutesController],
  providers: [
    {
      provide: RouteInMemoryRepository,
      useClass: RouteInMemoryRepository,
    },
    {
      provide: RouteTypeormRepository,
      useFactory: (datasource: DataSource) => {
        return new RouteTypeormRepository(datasource.getRepository(Route));
      },
      inject: [getDataSourceToken()],
    },
    {
      provide: CreateRouteUseCase,
      useFactory: (routeRepository: RouteRepository) => {
        return new CreateRouteUseCase(routeRepository);
      },
      inject: [RouteTypeormRepository],
    },
    {
      provide: ListAllRoutesUseCase,
      useFactory: (routeRepository: RouteRepository) => {
        return new ListAllRoutesUseCase(routeRepository);
      },
      inject: [RouteTypeormRepository],
    },
  ],
})
export class RoutesModule {}
