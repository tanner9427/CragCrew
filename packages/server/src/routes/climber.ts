import express, { Request, Response } from 'express';
import Climbers from '../services/climber-svc';

const router = express.Router();

// GET: Retrieve all climbers
router.get('/', (_, res: Response) => {
    Climbers.index()
        .then((list) => res.json(list))
        .catch((err) => res.status(500).send(err));
});

// GET: Retrieve a climber by ID
router.get('/:id', (req: Request, res: Response) => {
    const { id } = req.params;
    Climbers.get(id)
        .then((climber) => res.json(climber))
        .catch((err) => res.status(404).send(err));
});

// POST: Create a new climber
router.post('/', (req: Request, res: Response) => {
    const newClimber = req.body;
    Climbers.create(newClimber)
        .then((climber) => res.status(201).json(climber))
        .catch((err) => res.status(500).send(err));
});

// PUT: Update a climber by ID
router.put('/:id', (req: Request, res: Response) => {
    const { id } = req.params;
    const updatedData = req.body;
    Climbers.update(id, updatedData)
        .then((climber) => res.json(climber))
        .catch((err) => res.status(404).send(err));
});

// DELETE: Remove a climber by ID
router.delete('/:id', (req: Request, res: Response) => {
    const { id } = req.params;
    Climbers.remove(id)
        .then(() => res.status(204).end())
        .catch((err) => res.status(404).send(err));
});

export default router;
