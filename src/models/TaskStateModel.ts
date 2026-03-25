import type { TaskModel } from './TaskModel';

export type TaskStateModel = {
  tasks: TaskModel[];
  secondsRemaining: number;
  activeTask: TaskModel | null;
  isRunning: boolean;
  config: {
    pomodoro: number;
    shortBreak: number;
    longBreak: number;
  };
};
