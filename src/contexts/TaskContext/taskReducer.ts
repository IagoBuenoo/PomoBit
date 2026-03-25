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

    case TaskActionTypes.CHANGE_MODE: {
      const { secondsRemaining } = action.payload;

      return {
        ...state,
        secondsRemaining,
        isRunning: false,
      };
    }

    case TaskActionTypes.COUNT_DOWN:
      return {
        ...state,
        secondsRemaining: action.payload,
      };

    case TaskActionTypes.COMPLETE_TASK: {
      return {
        ...state,
        activeTask: null,
        isRunning: false,
        secondsRemaining: 0,
        tasks: state.tasks.map(task =>
          task.id === state.activeTask?.id
            ? { ...task, completeDate: Date.now() }
            : task,
        ),
      };
    }

    default:
      return state;
  }
}
