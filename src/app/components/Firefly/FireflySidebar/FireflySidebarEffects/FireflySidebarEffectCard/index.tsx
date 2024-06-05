import FireflyEffectData = App.Data.FireflyEffectData;

interface Props {
  effect: FireflyEffectData;
}

export function FireflySidebarEffectCard({ effect }: Props) {
  return (
    <div className="w-full space-y-[10px]">
      <div className="h-[80px] w-full rounded-[6px]" style={{ backgroundColor: effect.colorCode }} />
      <div className="w-full truncate text-center text-[0.75rem]">{effect.name}</div>
    </div>
  );
}
