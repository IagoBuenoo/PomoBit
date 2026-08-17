import { TrashIcon } from 'lucide-react';
import { MainTemplate } from '../../templates/MainTemplate';

import styles from './styles.module.css';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { formatDate } from '../../utils/formatDate';
import { getTaskStatus } from '../../utils/getTaskStatus';
import { TaskActionTypes } from '../../contexts/TaskContext/taskActions';
import { showMessage } from '../../adapters/showMessage';

export function History() {
  const { state, dispatch } = useTaskContext();

  const hasTasks = state.tasks.length > 0;

  const orderedTasks = [...state.tasks].reverse();

  function handleResetHistory() {
    showMessage.success('Your history was deleted succesfully');
    dispatch({ type: TaskActionTypes.RESET_STATE });
  }

  return (
    <MainTemplate>
      <div className={styles.container}>
        <div className={styles.historyContainer}>
          <span className={styles.span}>History</span>
          {hasTasks && (
            <button
              className={styles.trashButton}
              aria-label='Delete all history'
              title='Delete all history'
              onClick={handleResetHistory}
            >
              <TrashIcon />
            </button>
          )}
        </div>

        {hasTasks && (
          <div className={styles.responsiveTable}>
            <table>
              <thead>
                <tr>
                  <th>Duration</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Type</th>
                </tr>
              </thead>

              <tbody>
                {orderedTasks.map(task => {
                  const taskTypeDictionary = {
                    pomodoro: 'Pomodoro',
                    shortBreak: 'Short Break',
                    longBreak: 'Long Break',
                  };

                  return (
                    <tr key={task.id}>
                      <td>{task.duration}min</td>
                      <td>{formatDate(task.startDate)}</td>
                      <td>{getTaskStatus(task, state.activeTask)}</td>
                      <td>{taskTypeDictionary[task.type]}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}

        {!hasTasks && <p>You haven't created any tasks yet.</p>}
      </div>
    </MainTemplate>
  );
}
