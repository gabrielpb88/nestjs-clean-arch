import express, { Express, Request, Response } from 'express';
import { CreateRouteUseCase } from '@application/usecases/create-route.use-case';
import { RouteInMemoryRepository } from '@infra/db/route-in-memory.repository';

const port = 3000;
const app: Express = express();
app.use(express.json());
const repo = new RouteInMemoryRepository();

app.post('/routes', async (req: Request, res: Response) => {
  const createUseCase = new CreateRouteUseCase(repo);
  const output = await createUseCase.execute(req.body);
  return res.status(201).send(output);
});

app.listen(port, () => {
  console.log(`Server running at port: ${port}`);
});
