import { InputField } from "../../InputField";
import { FormItemBlockProps } from "../lib/types";
import FormItem from "./FormItem";

const InputBlock = ({
  register,
  setValue,
  id,
  index,
  ...rest
}: FormItemBlockProps) => {
  return (
    <FormItem
      title="Input"
      description="Kunden kan fylla i input-fält av typen text."
      field={() => (
        <>
          <InputField
            label="Label"
            {...register(`fields.${index}.values.label`)}
          />
          <InputField
            label="Placeholder"
            {...register(`fields.${index}.values.placeholder`)}
          />
        </>
      )}
      id={id}
      {...rest}
    />
  );
};

export default InputBlock;
