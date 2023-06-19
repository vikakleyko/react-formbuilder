import { useFormContext } from "react-hook-form";
import { GeneratedFormItemProps } from "../../lib/types";
import styles from "./GeneratedForm.module.css";

const RadioButtonsSelect = ({
  item: {
    values: { question, informationText, alternatives },
  },
  index,
}: GeneratedFormItemProps) => {
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
