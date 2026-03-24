import type { TaskModel } from '../../models/TaskModel';

export const TaskActionTypes = {
  START_TASK: 'START_TASK',
  INTERRUPT_TASK: 'INTERRUPT_TASK',
  PAUSE_TASK: 'PAUSE_TASK',
  RESUME_TASK: 'RESUME_TASK',
  CHANGE_MODE: 'CHANGE_MODE',
  COUNT_DOWN: 'COUNT_DOWN',
  COMPLETE_TASK: 'COMPLETE_TASK',
} as const;

export type TaskActionTypes = keyof typeof TaskActionTypes;

export type TaskActionModel =
  | {
      type: typeof TaskActionTypes.START_TASK;
      payload: {
        secondsRemaining: number;
        formattedSecondsRemaining: string;
        task: TaskModel;
      };
    }
  | {
      type: typeof TaskActionTypes.INTERRUPT_TASK;
      payload: {
        secondsRemaining: number;
        formattedSecondsRemaining: string;
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
      type: typeof TaskActionTypes.CHANGE_MODE;
      payload: {
        secondsRemaining: number;
        formattedSecondsRemaining: string;
      };
    }
  | {
      type: typeof TaskActionTypes.COUNT_DOWN;
      payload: number;
    }
  | {
      type: typeof TaskActionTypes.COMPLETE_TASK;
    };
