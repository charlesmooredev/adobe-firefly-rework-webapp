import { ReactNode } from 'react';

interface Props {
  children: ReactNode | ReactNode[];
  divider?: boolean;
}

export function FireflySidebarCard({ children, divider = false }: Props) {
  return (
    <>
      <div className="p-[15px]">{children}</div>
      {divider && <hr className="border-primary-gray-500 mt-[10px]" />}
    </>
  );
}
