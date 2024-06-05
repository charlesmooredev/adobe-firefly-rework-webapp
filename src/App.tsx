import './App.css';
import { Wrapper } from './app/components/Wrapper';
import { Header } from './app/components/Header';
import { FireflySidebar } from './app/components/Firefly/FireflySidebar';
import { FireflyContent } from './app/components/Firefly/FireflyContent';

function App() {
  return (
    <Wrapper>
      <Header />
      <div className="flex max-h-[calc(100%-70px)]">
        <FireflySidebar />
        <FireflyContent />
      </div>
    </Wrapper>
  );
}

export default App;
