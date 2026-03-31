import { useState } from 'react';
import { TaskActionTypes } from '../../contexts/TaskContext/taskActions';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { DefaultInput } from '../DefaultInput';

import styles from './styles.module.css';
import { toast } from 'react-toastify';
import { showMessage } from '../../adapters/showMessage';

export function Settings() {
  const { dispatch, state } = useTaskContext();

  const [pomodoro, setPomodoro] = useState(state.config.pomodoro);
  const [shortBreak, setShortBreak] = useState(state.config.shortBreak);
  const [longBreak, setLongBreak] = useState(state.config.longBreak);

  function saveSettings() {
    if (
      pomodoro < 5 ||
      shortBreak < 5 ||
      longBreak < 5 ||
      pomodoro > 60 ||
      shortBreak > 60 ||
      longBreak > 60
    ) {
      toast.dismiss();
      showMessage.error('Values must be between 5 and 60 minutes');
      return;
    }

    dispatch({
      type: TaskActionTypes.SAVE_SETTINGS,
      payload: {
        pomodoro,
        shortBreak,
        longBreak,
      },
    });

    toast.dismiss();
    showMessage.success('Your settings were saved successfully');
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.settings}>
          <h2>Settings</h2>
          <p>Modify your timer settings</p>

          <DefaultInput
            id='pomodoro'
            type='number'
            min={5}
            value={pomodoro}
            onChange={e => setPomodoro(Number(e.target.value))}
          >
            Pomodoro
          </DefaultInput>

          <DefaultInput
            id='shortBreak'
            type='number'
            min={5}
            value={shortBreak}
            onChange={e => setShortBreak(Number(e.target.value))}
          >
            Short Break
          </DefaultInput>

          <DefaultInput
            id='longBreak'
            type='number'
            min={5}
            value={longBreak}
            onChange={e => setLongBreak(Number(e.target.value))}
          >
            Long Break
          </DefaultInput>

          <button className={styles.save} onClick={saveSettings}>
            SAVE
          </button>
        </div>
      </div>
    </>
  );
}
