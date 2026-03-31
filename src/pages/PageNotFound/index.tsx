import { GenericHtml } from '../../components/GenericHtml';
import { MainTemplate } from '../../templates/MainTemplate';

export function PageNotFound() {
  return (
    <>
      <MainTemplate>
        <GenericHtml>
          <h1>404 - Page not found 🚀</h1>
          <p>
            Oops! Looks like you are trying to access a page that does not
            exist.
          </p>

          <p>
            But keep it calm. You are not lost yet, you can safely go back to
            the <a href='/'>main page</a> or access your{' '}
            <a href='/history/'>pomodoro history</a>
          </p>
        </GenericHtml>
      </MainTemplate>
    </>
  );
}
