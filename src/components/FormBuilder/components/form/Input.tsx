import { useFormContext } from "react-hook-form";
import { InputField } from "../../../InputField";
import { GeneratedFormItemProps } from "../../lib/types";

const Input = ({ item, index }: GeneratedFormItemProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <InputField
        label={item.values.label as string}
        placeholder={item.values.placeholder as string}
        {...register(`fields.${index}.values`)}
      />

      <input
        hidden
        value={item.values.label as string}
        {...register(`fields.${index}.label`)}
      />
    </>
  );
};

export default Input;
