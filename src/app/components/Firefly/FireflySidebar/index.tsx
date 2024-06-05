import { useCallback, useMemo, useState } from 'react';
import { MdClose, MdMenu } from 'react-icons/md';
import { FireflyGeneralSettings } from './FireflyGeneralSettings';

export function FireflySidebar() {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const sidebarWrapperCls = useMemo(() => {
    return `${isOpen ? 'w-[300px]' : 'w-[50px]'} bg-primary-gray-950 h-screen`;
  }, [isOpen]);

  const sidebarMenuCls = useMemo(() => {
    return `${isOpen ? 'border-primary-gray-700' : 'border-transparent'} w-full flex items-center justify-center px-[10px] py-[10px] border-b`;
  }, [isOpen]);

  const toggleSidebarFn = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  return (
    <div className={sidebarWrapperCls}>
      <div className={sidebarMenuCls}>
        {isOpen ? (
          <div className="flex w-full items-center">
            <div className="w-2/3">Firefly Image Settings</div>
            <div className="flex w-1/3 justify-end">
              <button onClick={toggleSidebarFn}>
                <MdClose size={25} />
              </button>
            </div>
          </div>
        ) : (
          <button onClick={toggleSidebarFn}>
            <MdMenu size={25} />
          </button>
        )}
      </div>
      {isOpen && (
        <div className="max-h-[calc(100%-120px)] overflow-y-scroll">
          <FireflyGeneralSettings />
        </div>
      )}
    </div>
  );
}
