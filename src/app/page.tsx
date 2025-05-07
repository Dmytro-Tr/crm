import ActiveLabel from './components/Active/active-label';
import NotActiveLabel from './components/Not active/not-active-label';
import PendingLabel from './components/Pending/pending-label';
import SuspendedLabel from './components/Suspended/suspended-label';

export default function Home() {
  return (
    <main>
      <h1>Home page</h1>
      <ActiveLabel>Active</ActiveLabel>
      <NotActiveLabel>Not active</NotActiveLabel>
      <PendingLabel>Pending</PendingLabel>
      <SuspendedLabel>Suspended</SuspendedLabel>
    </main>
  );
}
