import { useFieldArray, useForm, useFormContext } from "react-hook-form";
import { FormattedField } from "../../FormBuilder";
import styles from "./GeneratedForm.module.css";

type RadioButtonsSelectProps = {
  item: FormattedField;
  index: number;
};

const RadioButtonsSelect = ({
  item: {
    values: { question, informationText, alternatives },
  },
  index,
}: RadioButtonsSelectProps) => {
  const { register } = useFormContext();

  return (
    <div className={styles.optionsContainer}>
      <h3>{question}</h3>
      <div>{informationText}</div>
      {Object.values(alternatives).map((el, i) => (
        <div key={i} className={styles.option}>
          <input
            type="radio"
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

export default RadioButtonsSelect;
