import { useEffect, useReducer, useRef } from 'react';
import { TaskContext } from './TaskContext';
import { taskReducer } from './taskReducer';
import { initialTaskState } from './initialTaskState';
import { TimerWorkerManager } from '../../workers/timerWorkerManager';
import { TaskActionTypes } from './taskActions';

type TaskContextProviderProps = {
  children: React.ReactNode;
};

export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [state, dispatch] = useReducer(taskReducer, initialTaskState);

  const workerRef = useRef<TimerWorkerManager | null>(null);

  useEffect(() => {
    let worker = workerRef.current;

    if (!state.activeTask) {
      worker?.terminate();
      workerRef.current = null;
      return;
    }

    if (!worker) {
      worker = TimerWorkerManager.getInstance();
      workerRef.current = worker;

      worker.onmessage(e => {
        const seconds = e.data;

        dispatch({
          type: TaskActionTypes.COUNT_DOWN,
          payload: seconds,
        });

        if (seconds <= 0) {
          dispatch({
            type: TaskActionTypes.COMPLETE_TASK,
          });
          worker?.terminate();
          workerRef.current = null;
        }
      });
    }

    worker.postMessage({
      activeTask: state.activeTask,
      secondsRemaining: state.secondsRemaining,
      isRunning: state.isRunning,
    }); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.activeTask, state.isRunning]);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}
