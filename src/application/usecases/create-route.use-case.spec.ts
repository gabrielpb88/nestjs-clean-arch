import { RouteInMemoryRepository } from '@infra/db/route-in-memory.repository';
import { CreateRouteInput, CreateRouteUseCase } from '@application/usecases/create-route.use-case';

describe('CreateRouteUseCase Tests', () => {
  let repository: RouteInMemoryRepository;
  let createRouteUseCase: CreateRouteUseCase;

  beforeAll(() => {
    repository = new RouteInMemoryRepository();
    createRouteUseCase = new CreateRouteUseCase(repository);
  });

  it('should create a new route with empty routes', async () => {
    const useCaseInput = {
      title: 'any title',
      startPosition: { lat: 1, lng: 1 },
      endPosition: { lat: 3, lng: 3 },
    };
    const result = await createRouteUseCase.execute(useCaseInput);
    expect(result).toStrictEqual({ ...useCaseInput, points: [] });
  });

  it('should create a new route with routes', async () => {
    const useCaseInput: CreateRouteInput = {
      title: 'any title',
      startPosition: { lat: 1, lng: 1 },
      endPosition: { lat: 3, lng: 3 },
      points: [{ lat: 2, lng: 2 }],
    };
    const result = await createRouteUseCase.execute(useCaseInput);
    expect(result).toStrictEqual({ ...useCaseInput, points: [{ lat: 2, lng: 2 }] });
  });
});
