import { ReactNode } from 'react';

interface Props {
  children: ReactNode | ReactNode[];
}

export function Wrapper({ children }: Props) {
  return <div className="h-screen w-screen overflow-hidden">{children}</div>;
}
