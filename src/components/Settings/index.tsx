import { DefaultInput } from '../DefaultInput';

import styles from './styles.module.css';

export function Settings() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.settings}>
          <h2>Settings</h2>
          <p>Modify your timer settings</p>

          <DefaultInput id='input' type='number' defaultValue={25}>
            Pomodoro
          </DefaultInput>

          <DefaultInput id='input' type='number' defaultValue={5}>
            Short Break
          </DefaultInput>

          <DefaultInput id='input' type='number' defaultValue={15}>
            Long Break
          </DefaultInput>

          <button className={styles.save}>SAVE</button>
        </div>
      </div>
    </>
  );
}
