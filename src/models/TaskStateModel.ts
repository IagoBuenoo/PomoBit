import type { TaskModel } from './TaskModel';

export type TaskStateModel = {
  tasks: TaskModel[];
  activeTask: TaskModel | null;
  secondsRemaining: number;
  isRunning: boolean;
  currentMode: 'pomodoro' | 'shortBreak' | 'longBreak';
  completedPomodoros: number;
  config: {
    pomodoro: number;
    shortBreak: number;
    longBreak: number;
  };
};
