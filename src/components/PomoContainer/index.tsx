import styles from './styles.module.css';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import type { TaskModel } from '../../models/TaskModel';
import { formatSecondsToMinutes } from '../../utils/formatSecondsToMinutes';
import { showMessage } from '../../adapters/showMessage';
import { toast } from 'react-toastify';
import { TaskActionTypes } from '../../contexts/TaskContext/taskActions';

type Mode = 'pomodoro' | 'shortBreak' | 'longBreak';

export function PomoContainer() {
  const { state, dispatch } = useTaskContext();

  const active = state.currentMode;

  const formattedTime = formatSecondsToMinutes(state.secondsRemaining);

  function handleStartOrResumeTask() {
    if (state.activeTask) {
      dispatch({
        type: TaskActionTypes.RESUME_TASK,
        payload: { startDate: Date.now() },
      });
      return;
    }

    const duration = state.config[active];
    const secondsRemaining = duration * 60;

    const newTask: TaskModel = {
      id: Date.now().toString(),
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      duration,
      type: active,
    };

    dispatch({
      type: TaskActionTypes.START_TASK,
      payload: {
        secondsRemaining,
        task: newTask,
      },
    });
  }

  function handlePauseTask() {
    dispatch({ type: TaskActionTypes.PAUSE_TASK });
  }

  function handleInterruptTask() {
    const duration = state.config[active];
    const secondsRemaining = duration * 60;

    dispatch({
      type: TaskActionTypes.INTERRUPT_TASK,
      payload: {
        secondsRemaining,
      },
    });
  }

  function handleChangeMode(mode: Mode) {
    if (state.activeTask) {
      toast.dismiss();
      showMessage.info('You can only change mode when there is no active task');
      return;
    }

    const duration = state.config[mode];
    const secondsRemaining = duration * 60;

    dispatch({
      type: TaskActionTypes.CHANGE_MODE,
      payload: {
        secondsRemaining,
        mode,
      },
    });
  }

  const isDisabled = !!state.activeTask;

  return (
    <div className={styles.container}>
      <div className={styles.containerButtons}>
        {(['pomodoro', 'shortBreak', 'longBreak'] as Mode[]).map(mode => (
          <button
            key={mode}
            className={`${styles.containerButton} ${
              active === mode ? styles.active : ''
            } ${isDisabled ? styles.disabled : ''}`}
            onClick={() => handleChangeMode(mode)}
          >
            {mode === 'pomodoro'
              ? 'Pomodoro'
              : mode === 'shortBreak'
                ? 'Short Break'
                : 'Long Break'}
          </button>
        ))}
      </div>

      <div className={styles.countdown}>{formattedTime}</div>

      {!state.activeTask && (
        <button
          className={styles.start}
          onClick={handleStartOrResumeTask}
          aria-label='Start new task'
          title='Start new task'
          type='button'
        >
          START
        </button>
      )}

      {state.activeTask && state.isRunning && (
        <div className={styles.pauseInterrupt}>
          <button
            className={styles.pause}
            onClick={handlePauseTask}
            aria-label='Pause current task'
            title='Pause current task'
            type='button'
          >
            PAUSE
          </button>
          <button
            className={styles.interrupt}
            onClick={handleInterruptTask}
            aria-label='Interrupt current task'
            title='Interrupt current task'
            type='button'
          >
            INTERRUPT
          </button>
        </div>
      )}

      {state.activeTask && !state.isRunning && (
        <button
          className={styles.resume}
          onClick={handleStartOrResumeTask}
          aria-label='Resume task'
          title='Resume task'
          type='button'
        >
          RESUME
        </button>
      )}
    </div>
  );
}
