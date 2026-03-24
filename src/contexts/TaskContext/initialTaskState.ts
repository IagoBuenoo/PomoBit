import type { TaskStateModel } from '../../models/TaskStateModel';

export const initialTaskState: TaskStateModel = {
  tasks: [],
  secondsRemaining: 0,
  formattedSecondsRemaining: '1:00',
  activeTask: null,
  isRunning: false,
  config: {
    pomodoro: 1,
    shortBreak: 1,
    longBreak: 1,
  },
};
