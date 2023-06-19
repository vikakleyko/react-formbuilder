import { useFormContext } from "react-hook-form";
import { GeneratedFormItemProps } from "../../lib/types";

const Text = ({ item, index }: GeneratedFormItemProps) => {
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
