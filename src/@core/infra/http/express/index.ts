import express, { Express, Request, Response } from 'express';
import { CreateRouteUseCase } from 'src/@core/application/usecases/create-route.use-case';
import { RouteInMemoryRepository } from 'src/@core/infra/db/route-in-memory.repository';
import { ListAllRoutesUseCase } from 'src/@core/application/usecases/list-all-routes.use-case';

const port = 3000;
const app: Express = express();
app.use(express.json());
const repo = new RouteInMemoryRepository();

app.post('/routes', async (req: Request, res: Response) => {
  const createUseCase = new CreateRouteUseCase(repo);
  const output = await createUseCase.execute(req.body);
  return res.status(201).send(output);
});

app.get('/routes', async (req: Request, res: Response) => {
  const listAllRoutesUseCase = new ListAllRoutesUseCase(repo);
  const output = await listAllRoutesUseCase.execute();
  return res.json(output);
});

app.listen(port, () => {
  console.log(`Server running at port: ${port}`);
});
