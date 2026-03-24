import type { TaskStateModel } from '../models/TaskStateModel';

export type WorkerMessage = {
  activeTask: TaskStateModel['activeTask'];
  secondsRemaining: number;
  isRunning: boolean;
};
