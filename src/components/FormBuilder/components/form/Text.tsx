import { useFormContext } from "react-hook-form";
import { FormattedField } from "../../FormBuilder";

type TextProps = {
  item: FormattedField;
  index: number;
};

const Text = ({ item, index }: TextProps) => {
  const { register } = useFormContext();

  return (
    <>
      <p>{item.values.text as string}</p>
      <input
        hidden
        value={item.values.text as string}
        {...register(`fields.${index}.label`)}
      />
    </>
  );
};

export default Text;
