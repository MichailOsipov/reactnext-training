import { Header } from '../components/layout/header';
import { MainContent } from '../components/layout/mainContent';

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans">
      <Header />
      <MainContent />
    </div>
  );
}
