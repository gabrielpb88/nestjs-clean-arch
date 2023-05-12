import { RouteInMemoryRepository } from './route-in-memory.repository';
import { Route, RouteProps } from '@domain/entities/route.entity';

describe('RouteInMemoryRepository', () => {
  let repository: RouteInMemoryRepository;

  beforeAll(() => {
    repository = new RouteInMemoryRepository();
  });

  it('should insert a new route', async () => {
    const routeProps: RouteProps = {
      title: 'any title',
      startPosition: { lat: 1, lng: 1 },
      endPosition: { lat: 3, lng: 3 },
    };
    const route = Route.create(routeProps);

    expect(repository.items).toHaveLength(0);
    await repository.insert(route);
    expect(repository.items).toHaveLength(1);
    expect(repository.items).toEqual([route]);
  });
});
