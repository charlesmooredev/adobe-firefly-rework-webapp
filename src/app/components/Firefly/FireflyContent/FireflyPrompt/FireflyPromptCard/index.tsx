import { ReactNode } from 'react';

interface Props {
  children: ReactNode | ReactNode[];
}

export function FireflyPromptCard({ children }: Props) {
  return (
    <div className="h-2/6">
      <div className="bg-primary-gray-950 h-full w-full rounded-[20px] p-[15px]">{children}</div>
    </div>
  );
}
