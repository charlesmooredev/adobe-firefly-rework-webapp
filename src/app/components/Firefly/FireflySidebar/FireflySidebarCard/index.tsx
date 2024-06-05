import { ReactNode, useMemo, useState } from 'react';
import { MdChevronRight } from 'react-icons/md';

interface Props {
  children: ReactNode | ReactNode[];
  divider?: boolean;
  title: string;
}

export function FireflySidebarCard({ children, divider = false, title }: Props) {
  const [isOpen, setIsOpen] = useState(true);

  const chevronCls = useMemo(() => {
    return `${isOpen ? 'rotate-90' : ''} transition-effect`;
  }, [isOpen]);

  return (
    <>
      <div className="p-[15px]">
        <div className="space-y-[10px]">
          <button className="flex items-center space-x-[5px]" onClick={() => setIsOpen(!isOpen)}>
            <MdChevronRight className={chevronCls} size={25} />
            <span className="font-semibold">{title}</span>
          </button>
          {isOpen && children}
        </div>
      </div>
      {divider && <hr className="border-primary-gray-700 mt-[10px]" />}
    </>
  );
}
