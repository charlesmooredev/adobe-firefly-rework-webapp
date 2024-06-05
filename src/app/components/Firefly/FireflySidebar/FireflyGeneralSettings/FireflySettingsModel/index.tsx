import { Picker } from '@swc-react/picker';
import { FieldLabel } from '@swc-react/field-label';
import { MenuGroup, MenuItem } from '@swc-react/menu';
import { useState } from 'react';

const fireflyModels = [
  { name: 'Firefly Image 3 (preview)', value: 'model_1' },
  { name: 'Firefly Image 2', value: 'model_2' },
];

export function FireflySettingsModel() {
  const [value, setValue] = useState(fireflyModels[0].value);
  return (
    <div>
      <FieldLabel for="model-picker">Model</FieldLabel>
      <Picker
        id="model-picker"
        value={value}
        size="m"
        className="bg-primary-gray-900 w-full rounded-[6px] p-[5px] text-white"
        onChange={e => setValue(e.currentTarget.value)}
      >
        <MenuGroup className="bg-primary-gray-900 rounded-[6px] p-[5px]">
          {fireflyModels.map(model => (
            <MenuItem value={model.value} key={model.value} className="text-primary-gray-200 hover:text-white">
              {model.name}
            </MenuItem>
          ))}
        </MenuGroup>
      </Picker>
    </div>
  );
}
