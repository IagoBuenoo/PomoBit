import type { TaskStateModel } from '../../models/TaskStateModel';

import { TaskActionTypes, type TaskActionModel } from './taskActions';

export function taskReducer(state: TaskStateModel, action: TaskActionModel) {
  switch (action.type) {
    case TaskActionTypes.START_TASK: {
      const { secondsRemaining, task } = action.payload;
      return {
        ...state,
        activeTask: task,
        tasks: [...state.tasks, task],
        isRunning: true,
        secondsRemaining,
      };
    }

    case TaskActionTypes.INTERRUPT_TASK: {
      const { secondsRemaining } = action.payload;
      return {
        ...state,
        activeTask: null,
        isRunning: false,
        secondsRemaining,

        tasks: state.tasks.map(task =>
          task.id === state.activeTask?.id
            ? { ...task, interruptDate: Date.now() }
            : task,
        ),
      };
    }

    case TaskActionTypes.PAUSE_TASK:
      return {
        ...state,
        isRunning: false,
      };

    case TaskActionTypes.RESUME_TASK:
      return {
        ...state,
        isRunning: true,
      };

    case TaskActionTypes.COUNT_DOWN:
      return {
        ...state,
        secondsRemaining: action.payload,
      };

    case TaskActionTypes.COMPLETE_TASK: {
      let nextMode = state.currentMode;
      let completedPomodoros = state.completedPomodoros;

      if (state.currentMode === 'pomodoro') {
        completedPomodoros += 1;

        if (completedPomodoros % 4 === 0) {
          nextMode = 'longBreak';
        } else {
          nextMode = 'shortBreak';
        }
      } else {
        nextMode = 'pomodoro';
      }

      const secondsRemaining = state.config[nextMode] * 60;

      return {
        ...state,
        activeTask: null,
        isRunning: false,
        secondsRemaining,
        currentMode: nextMode,
        tasks: state.tasks.map(task =>
          task.id === state.activeTask?.id
            ? { ...task, completeDate: Date.now() }
            : task,
        ),
      };
    }

    case TaskActionTypes.CHANGE_MODE: {
      const { secondsRemaining, mode } = action.payload;

      return {
        ...state,
        secondsRemaining,
        isRunning: false,
        currentMode: mode,
      };
    }

    case TaskActionTypes.SAVE_SETTINGS: {
      const newConfig = action.payload;

      const updatedSecondsRemaining = state.activeTask
        ? state.secondsRemaining
        : newConfig[state.currentMode] * 60;

      return {
        ...state,
        secondsRemaining: updatedSecondsRemaining,
        config: action.payload,
      };
    }

    default:
      return state;
  }
}
