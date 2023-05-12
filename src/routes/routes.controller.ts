import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateRouteDto } from './dto/create-route.dto';
import { CreateRouteUseCase } from '@application/usecases/create-route.use-case';
import { ListAllRoutesUseCase } from '@application/usecases/list-all-routes.use-case';

@Controller('routes')
export class RoutesController {
  constructor(
    private readonly createUseCase: CreateRouteUseCase,
    private readonly listAllUseCase: ListAllRoutesUseCase,
  ) {}

  @Post()
  create(@Body() createRouteDto: CreateRouteDto) {
    return this.createUseCase.execute(createRouteDto);
  }

  @Get()
  findAll() {
    return this.listAllUseCase.execute();
  }
}
