import { DataSource } from 'typeorm';
import { RouteSchema } from '@infra/db/typeorm/route.schema';
import { Route } from '@domain/entities/route.entity';

describe('RouteSchema Test', () => {
  test('', async () => {
    const dataSource = new DataSource({
      type: 'sqlite',
      database: ':memory:',
      synchronize: true,
      entities: [RouteSchema],
    });
    await dataSource.initialize();
    const route = Route.create({
      title: 'some route',
      startPosition: { lat: 1, lng: 1 },
      endPosition: { lat: 3, lng: 3 },
    });
    const repo = dataSource.getRepository(Route);
    const savedRouted = await repo.save(route);
    const routes = await repo.find();
    expect(savedRouted).toBeDefined();
    expect(routes).toBeDefined();
  });
});
