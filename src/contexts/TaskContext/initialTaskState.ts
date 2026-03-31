import type { TaskStateModel } from '../../models/TaskStateModel';

export const initialTaskState: TaskStateModel = {
  tasks: [],
  activeTask: null,
  isRunning: false,
  currentMode: 'pomodoro',
  completedPomodoros: 0,
  config: {
    pomodoro: 25,
    shortBreak: 5,
    longBreak: 15,
  },
  secondsRemaining: 0,
};
