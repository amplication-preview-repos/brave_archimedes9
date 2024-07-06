import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const ProcessedChunkEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="chunk" multiline source="chunk" />
        <NumberInput step={1} label="order" source="order" />
      </SimpleForm>
    </Edit>
  );
};
