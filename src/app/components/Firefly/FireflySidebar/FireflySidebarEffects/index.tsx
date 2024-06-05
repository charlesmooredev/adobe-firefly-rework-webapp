import { FireflySidebarCard } from '../FireflySidebarCard';
import { FireflySidebarEffectCard } from './FireflySidebarEffectCard';
import { fireflyEffects } from '../../../../helpers/Effects.ts';
import { useCallback, useMemo, useState } from 'react';

export function FireflySidebarEffects() {
  const [search, setSearch] = useState('');

  const searchResults = useMemo(() => {
    if (search.length === 0) {
      return fireflyEffects;
    }

    return fireflyEffects.filter(effect => effect.name.toLowerCase().includes(search.toLowerCase()));
  }, [search]);

  const searchFn = useCallback(e => {
    console.log(e.target.value);
    setSearch(e.target.value);
  }, []);

  return (
    <FireflySidebarCard title="Effects" divider={true}>
      <input
        type="text"
        onChange={searchFn}
        className="border-primary-gray-500/50 focus:border-primary-gray-500 w-full rounded-full border bg-black p-[10px] outline-0"
        placeholder="Search effects"
      />
      {searchResults.length === 0 ? (
        <div className="w-full text-center italic">No matching results</div>
      ) : (
        <div className="grid grid-cols-3 gap-x-[10px] gap-y-[20px]">
          {searchResults.map(effect => (
            <FireflySidebarEffectCard effect={effect} key={effect.name} />
          ))}
        </div>
      )}
    </FireflySidebarCard>
  );
}
