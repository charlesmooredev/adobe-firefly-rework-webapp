import { Picker } from '@swc-react/picker';
import { FieldLabel } from '@swc-react/field-label';
import { MenuGroup, MenuItem } from '@swc-react/menu';
import { useState } from 'react';

const aspectRatios = [
  { name: 'Landscape (4:3)', value: 'landscape' },
  { name: 'Portrait (3:4)', value: 'portrait' },
  { name: 'Square (1:1)', value: 'square' },
  { name: 'Widescreen (16:9)', value: 'widescreen' },
];

export function FireflySettingsAspectRatio() {
  const [value, setValue] = useState(aspectRatios[0].value);
  return (
    <div>
      <FieldLabel>Aspect ratio</FieldLabel>
      <Picker
        value={value}
        size="m"
        className="bg-primary-gray-950 w-full rounded-[6px] p-[5px] text-white"
        onChange={e => setValue(e.currentTarget.value)}
      >
        <MenuGroup className="bg-primary-gray-950 rounded-[6px] p-[5px]">
          {aspectRatios.map(model => (
            <MenuItem value={model.value} key={model.value} className="text-primary-gray-300 hover:text-white">
              {model.name}
            </MenuItem>
          ))}
        </MenuGroup>
      </Picker>
    </div>
  );
}
