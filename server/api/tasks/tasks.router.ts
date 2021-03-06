// api/tasks/tasks.router.ts

import { Router } from 'express';
import { findAll, find, create, remove, update } from './tasks.service';

export const tasksRouter = Router();

// GET /api/tasks
tasksRouter.get('/', async (req, res) => {
  try {
    const tasks = await findAll(req.query);
    res.status(200).send(tasks.rows);
  } catch (err: any) {
    res.status(500).send(err.message);
  }
});

// GET /api/tasks/:id
tasksRouter.get('/:id', async (req, res) => {
  try {
    const task = await find(req.params.id);
    res.status(200).send(task.rows);
  } catch (err: any) {
    res.status(500).send(err.message);
  }
});

// POST /api/tasks
tasksRouter.post('/', async (req, res) => {
  try {
    const newTask = await create(req.body);
    res.status(201).send(newTask.rows);
  } catch (err: any) {
    res.status(500).send(err.message);
  }
});

// DELETE /api/tasks/:id
tasksRouter.delete('/:id', async (req, res) => {
  try {
    await remove(req.params.id);
    res.sendStatus(204);
  } catch (err: any) {
    res.status(500).send(err.message);
  }
});

// PUT /api/tasks/:id
tasksRouter.put('/:id', async (req, res) => {
  try {
    const updatedTask = await update(req);
    res.sendStatus(204).send(updatedTask.rows);
  } catch (err: any) {
    res.status(500).send(err.message);
  }
});