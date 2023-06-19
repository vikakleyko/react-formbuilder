import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import CheckboxesSelect from "./CheckboxesSelect";
import Text from "./Text";
import Input from "./Input";
import Image from "./Image";
import RadioButtonsSelect from "./RadioButtonsSelect";
import { Button } from "../../../Button";
import styles from "./GeneratedForm.module.css";
import { FormValues, GeneratedFormItemProps } from "../../lib/types";
import { Elements } from "../../lib/helpers";
import { ComponentType } from "react";

const GeneratedForm = ({ fields }: FormValues) => {
  const methods = useForm<FormData>();
  const items: Record<string, ComponentType<GeneratedFormItemProps>> = {
    [Elements.TEXT]: Text,
    [Elements.INPUT]: Input,
    [Elements.IMAGE]: Image,
    [Elements.CHECKBOXES]: CheckboxesSelect,
    [Elements.RADIOBUTTONS]: RadioButtonsSelect,
  };

  const onSubmit: SubmitHandler<FormData> = (data) => console.log(data);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className={styles.form}>
        {fields.map((item, index) => {
          const Component = items[item.type];
          return <Component key={index} item={item} index={index} />;
        })}
        <Button type="submit">Spara</Button>
      </form>
    </FormProvider>
  );
};

export default GeneratedForm;
