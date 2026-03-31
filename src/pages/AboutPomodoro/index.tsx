import { GenericHtml } from '../../components/GenericHtml';
import { RouterLink } from '../../components/RouterLink';
import { MainTemplate } from '../../templates/MainTemplate';

export function AboutPomodoro() {
  return (
    <>
      <MainTemplate>
        <GenericHtml>
          <h1>The Pomodoro Technique</h1>
          <p>
            The Pomodoro Technique is a productivity method created by{' '}
            <strong>Francesco Cirillo</strong>, which consists of dividing work
            into time blocks (the famous "Pomodoros") interspersed with breaks.
            The goal is to maintain total focus for a short period and ensure
            rest to avoid mental fatigue.
          </p>

          <h2>How does the traditional Pomodoro work?</h2>
          <ul>
            <li>
              <strong>1. Define a task</strong> that you want to accomplish.
            </li>
            <li>
              <strong>2. Work on it for 25 minutes</strong> without
              interruptions.
            </li>
            <li>
              <strong>3. Take a short 5-minute break</strong>.
            </li>
            <li>
              <strong>4. Every 4 cycles, take a long break</strong> (usually 15
              to 30 minutes).
            </li>
          </ul>

          <h2>
            But in the <strong>Chronos Pomodoro</strong> there’s a difference 🚀
          </h2>

          <p>
            Our app follows the original concept, but with some improvements and
            customizations to make the process even more efficient:
          </p>

          <h3>⚙️ Time customization</h3>
          <p>
            You can configure focus time, short break, and long break however
            you want! Just go to the{' '}
            <RouterLink href='/settings'>settings page</RouterLink> and adjust
            the minutes as you prefer.
          </p>

          <h3>🔁 Sequential cycles</h3>
          <p>
            After each completed cycle, a new task is automatically added to
            your history, and the app suggests the next cycle (focus or break).
          </p>
          <p>
            <strong>Our default:</strong>
          </p>
          <ul>
            <li>
              <strong>Odd cycles</strong>: Work (focus).
            </li>
            <li>
              <strong>Even cycles</strong>: Short break.
            </li>
            <li>
              <strong>Cycle 8</strong>: Special long break to reset the full
              cycle.
            </li>
          </ul>

          <h3>🍅 Cycle visualization</h3>
          <p>
            Right below the timer, you’ll see colored dots representing the
            cycles:
          </p>

          <p>
            This way, you always know where you are in the process and what
            comes next. No need to write things down or calculate mentally!
          </p>

          <h3>📊 Automatic history</h3>
          <p>
            All your completed and interrupted tasks and cycles are saved in the{' '}
            <RouterLink href='/history'>history</RouterLink>. This way, you can
            track your progress over time.
          </p>

          <h2>Why use Chronos Pomodoro?</h2>
          <ul>
            <li>✅ Organize your focus clearly.</li>
            <li>✅ Work and rest in the right balance.</li>
            <li>✅ Customize your own cycles and timings.</li>
            <li>✅ Automatically track your history.</li>
          </ul>

          <p>
            <strong>Ready to focus?</strong> Let’s go back to the{' '}
            <RouterLink href='/'>home page</RouterLink> and start your
            Pomodoros! 🍅🚀
          </p>

          <p>
            <em>"Total focus, no rush, no excuses—just go!"</em> 💪🧘‍♂️
          </p>
        </GenericHtml>
      </MainTemplate>
    </>
  );
}
