import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { FormValues } from "../../FormBuilder";
import CheckboxesSelect from "./CheckboxesSelect";
import Text from "./Text";
import Input from "./Input";
import Image from "./Image";
import RadioButtonsSelect from "./RadioButtonsSelect";
import { Button } from "../../../Button";
import styles from "./GeneratedForm.module.css";

type FormDataItems = {
  label: string;
  values?: Record<string, string[]>;
};

type FormData = {
  fields: FormDataItems[];
};

const GeneratedForm = ({ fields }: FormValues) => {
  const methods = useForm<FormData>();
  const items = {
    ["text"]: Text,
    ["input"]: Input,
    ["image"]: Image,
    ["checkboxes"]: CheckboxesSelect,
    ["radio-buttons"]: RadioButtonsSelect,
  };

  const onSubmit: SubmitHandler<FormData> = (data) => console.log(data);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className={styles.form}>
        {fields.map((item, index) => {
          const Component = items[item.type];
          return <Component item={item} index={index} />;
        })}
        <Button type="submit">Spara</Button>
      </form>
    </FormProvider>
  );
};

export default GeneratedForm;
