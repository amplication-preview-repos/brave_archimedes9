import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const ProcessedChunkCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="chunk" multiline source="chunk" />
        <NumberInput step={1} label="order" source="order" />
      </SimpleForm>
    </Create>
  );
};
