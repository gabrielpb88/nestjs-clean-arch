import { Test, TestingModule } from '@nestjs/testing';
import { RoutesController } from './routes.controller';
import { CreateRouteUseCase } from '@application/usecases/create-route.use-case';
import { ListAllRoutesUseCase } from '@application/usecases/list-all-routes.use-case';

describe('RoutesController', () => {
  let controller: RoutesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RoutesController],
      providers: [CreateRouteUseCase, ListAllRoutesUseCase],
    }).compile();

    controller = module.get<RoutesController>(RoutesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
