import { Router } from 'express';

const router = Router();

router.route('/')
  .get((req, res, next) => {
    res.send('API');
  });


export { router as APIRouter };
