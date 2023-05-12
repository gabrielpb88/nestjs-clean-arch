import { Route, RouteProps } from '@domain/entities/route.entity';
import { RouteTypeormRepository } from '@infra/db/typeorm/route-typeorm.repository';
import { DataSource } from 'typeorm';
import { RouteSchema } from '@infra/db/typeorm/route.schema';
import express from 'express';

describe('RouteTypeOrmRepository', () => {
  let repository: RouteTypeormRepository;
  let ormRepo;

  beforeAll(async () => {
    const dataSource = new DataSource({
      type: 'sqlite',
      database: ':memory:',
      synchronize: true,
      entities: [RouteSchema],
    });
    await dataSource.initialize();
    ormRepo = dataSource.getRepository(Route);
    repository = new RouteTypeormRepository(ormRepo);
  });

  it('should insert a new route', async () => {
    const routeProps: RouteProps = {
      title: 'any title',
      startPosition: { lat: 1, lng: 1 },
      endPosition: { lat: 3, lng: 3 },
    };
    const route = Route.create(routeProps);
    await repository.insert(route);
    const savedRoute = await ormRepo.findOneBy({ id: route.id });
    expect(savedRoute.toJSON()).toEqual(route.toJSON());
  });
});
