import { FireflySettingsModel } from './FireflySettingsModel';
import { FireflySettingsAspectRatio } from './FireflySettingsAspectRatio';
import { FireflySidebarCard } from '../FireflySidebarCard';

export function FireflyGeneralSettings() {
  return (
    <FireflySidebarCard title="General Settings" divider={true}>
      <div className="space-y-[10px]">
        <FireflySettingsModel />
        <FireflySettingsAspectRatio />
      </div>
    </FireflySidebarCard>
  );
}
