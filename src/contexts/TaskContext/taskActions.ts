import type { TaskModel } from '../../models/TaskModel';

export const TaskActionTypes = {
  START_TASK: 'START_TASK',
  INTERRUPT_TASK: 'INTERRUPT_TASK',
  PAUSE_TASK: 'PAUSE_TASK',
  RESUME_TASK: 'RESUME_TASK',
  COUNT_DOWN: 'COUNT_DOWN',
  COMPLETE_TASK: 'COMPLETE_TASK',
  CHANGE_MODE: 'CHANGE_MODE',
  SAVE_SETTINGS: 'SAVE_SETTINGS',
} as const;

export type TaskActionTypes = keyof typeof TaskActionTypes;

export type TaskActionModel =
  | {
      type: typeof TaskActionTypes.START_TASK;
      payload: {
        secondsRemaining: number;
        task: TaskModel;
      };
    }
  | {
      type: typeof TaskActionTypes.INTERRUPT_TASK;
      payload: {
        secondsRemaining: number;
      };
    }
  | {
      type: typeof TaskActionTypes.PAUSE_TASK;
    }
  | {
      type: typeof TaskActionTypes.RESUME_TASK;
      payload: {
        startDate: number;
      };
    }
  | {
      type: typeof TaskActionTypes.COUNT_DOWN;
      payload: number;
    }
  | {
      type: typeof TaskActionTypes.COMPLETE_TASK;
    }
  | {
      type: typeof TaskActionTypes.CHANGE_MODE;
      payload: {
        secondsRemaining: number;
        mode: 'pomodoro' | 'shortBreak' | 'longBreak';
      };
    }
  | {
      type: typeof TaskActionTypes.SAVE_SETTINGS;
      payload: {
        pomodoro: number;
        shortBreak: number;
        longBreak: number;
      };
    };
