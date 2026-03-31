import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider';
import { HomePage } from './pages/HomePage';
import { SettingsPage } from './pages/SettingsPage';
import { AboutPomodoro } from './pages/AboutPomodoro';
import { History } from './pages/History';
import { BrowserRouter, Route, Routes } from 'react-router';

import './styles/global.css';
import './styles/theme.css';
import { PageNotFound } from './pages/PageNotFound';

export function App() {
  return (
    <TaskContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/history/' element={<History />} />
          <Route path='/about-pomodoro/' element={<AboutPomodoro />} />
          <Route path='/settings/' element={<SettingsPage />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </TaskContextProvider>
  );
}
