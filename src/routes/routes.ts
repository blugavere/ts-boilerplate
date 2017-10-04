import { Router } from 'express';
import { APIRouter } from './api/api';

const router = Router();

router.route('/')
  .get((req, res, next) => {
    res.send('Use the api route.');
  });

router.use('/api', APIRouter);


export { router as Routes };
