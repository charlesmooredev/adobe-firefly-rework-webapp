import { FieldLabel } from '@swc-react/field-label';

export function FireflyPromptForm() {
  return (
    <>
      <FieldLabel for="prompt">Prompt</FieldLabel>
      <textarea
        type="text"
        id="prompt"
        className="none w-full flex-grow resize-none self-end overflow-hidden border-0 bg-transparent outline-0"
      ></textarea>
    </>
  );
}
