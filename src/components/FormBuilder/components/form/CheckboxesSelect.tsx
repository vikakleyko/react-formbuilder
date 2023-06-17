import { useFormContext } from "react-hook-form";
import { FormattedField } from "../../lib/types";
import styles from "./GeneratedForm.module.css";

type CheckboxesSelectProps = {
  item: FormattedField;
  index: number;
};

const CheckboxesSelect = ({
  item: {
    values: { question, informationText, checkboxes },
  },
  index,
}: CheckboxesSelectProps) => {
  const { register } = useFormContext();
  return (
    <div className={styles.optionsContainer}>
      <h3>{question}</h3>
      <div>{informationText}</div>
      {Object.values(checkboxes).map((el, i) => (
        <div key={i} className={styles.option}>
          <input
            type="checkbox"
            {...register(`fields.${index}.values`)}
            value={el}
          />
          {el}
        </div>
      ))}
      <input
        hidden
        value={question as string}
        {...register(`fields.${index}.label`)}
      />
    </div>
  );
};

export default CheckboxesSelect;
