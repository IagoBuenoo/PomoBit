import { TrashIcon } from 'lucide-react';
import { MainTemplate } from '../../templates/MainTemplate';

export function History() {
  return (
    <MainTemplate>
      <span>History</span>
      <span>
        <button>
          <TrashIcon />
        </button>
      </span>
    </MainTemplate>
  );
}
