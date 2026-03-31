import { useEffect, useReducer, useRef } from 'react';
import { TaskContext } from './TaskContext';
import { taskReducer } from './taskReducer';
import { initialTaskState } from './initialTaskState';
import { TimerWorkerManager } from '../../workers/timerWorkerManager';
import { TaskActionTypes } from './taskActions';
import { loadAudio } from '../../utils/loadAudio';
import { formatSecondsToMinutes } from '../../utils/formatSecondsToMinutes';
import type { TaskStateModel } from '../../models/TaskStateModel';

type TaskContextProviderProps = {
  children: React.ReactNode;
};

export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [state, dispatch] = useReducer(taskReducer, initialTaskState, () => {
    const storageState = localStorage.getItem('state') || null;

    if (!storageState) return initialTaskState;

    const parsedStorageState = JSON.parse(storageState) as TaskStateModel;

    return {
      ...parsedStorageState,
      activeTask: null,
      secondsRemaining:
        parsedStorageState.config[parsedStorageState.currentMode] * 60,
      isRunning: false,
    };
  });

  const workerRef = useRef<TimerWorkerManager | null>(null);

  const playAudioRef = useRef<ReturnType<typeof loadAudio>>(null);

  const formattedTime = formatSecondsToMinutes(state.secondsRemaining);

  useEffect(() => {
    localStorage.setItem('state', JSON.stringify(state));

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

        document.title = `${formattedTime} - PomoBit`;

        if (seconds <= 0) {
          if (playAudioRef.current) {
            playAudioRef.current();
            playAudioRef.current = null;
          } else {
            playAudioRef.current = null;
          }
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
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.activeTask, state.isRunning]);

  useEffect(() => {
    if (state.activeTask) {
      document.title = `${formattedTime} - PomoBit`;
    } else {
      document.title = 'PomoBit';
    }
  }, [formattedTime, state.activeTask]);

  useEffect(() => {
    if (state.activeTask && playAudioRef.current === null) {
      playAudioRef.current = loadAudio();
    }
  }, [state.activeTask]);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}
