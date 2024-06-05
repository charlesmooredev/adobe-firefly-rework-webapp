import './App.css';
import { Wrapper } from './app/components/Wrapper';
import { Header } from './app/components/Header';
import { FireflySidebar } from './app/components/Firefly/FireflySidebar';

function App() {
  return (
    <Wrapper>
      <Header />
      <div className="flex space-x-[50px]">
        <FireflySidebar />
      </div>
    </Wrapper>
  );
}

export default App;
