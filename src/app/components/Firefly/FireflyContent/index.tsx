import { FireflyCanvas } from './FireflyCanvas';
import { FireflyPrompt } from './FireflyPrompt';

export function FireflyContent() {
  return (
    <div className="flex max-h-screen flex-grow flex-col space-y-[25px] px-[25px] py-[10px]">
      <FireflyCanvas />
      <FireflyPrompt />
    </div>
  );
}
