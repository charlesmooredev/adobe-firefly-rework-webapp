export function FireflyCanvas() {
  return (
    <div className="flex h-4/5 w-full snap-x snap-mandatory gap-[20px] overflow-x-auto p-[20px]">
      <div className="aspect-video max-h-full snap-center rounded-[20px] bg-gradient-to-bl from-red-500 via-red-700 to-red-900" />
      <div className="aspect-video max-h-full snap-center rounded-[20px] bg-gradient-to-r from-red-500 via-red-700 to-red-900" />
      <div className="aspect-video max-h-full snap-center rounded-[20px] bg-gradient-to-l from-red-500 via-red-700 to-red-900" />
      <div className="aspect-video max-h-full snap-center rounded-[20px] bg-gradient-to-br from-red-500 via-red-700 to-red-900" />
    </div>
  );
}
