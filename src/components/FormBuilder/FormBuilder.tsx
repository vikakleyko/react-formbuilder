import { useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import { Button } from "../Button";
import CheckboxesQuestionBlock from "./components/CheckboxesQuestionBlock";
import GeneratedForm from "./components/form/GeneratedForm";
import ImageBlock from "./components/ImageBlock";
import InputBlock from "./components/InputBlock";
import RadioButtonsQuestionBlock from "./components/RadioButtonsQuestionBlock";
import TextBlock from "./components/TextBlock";
import styles from "./FormBuilder.module.css";
import { Elements } from "./lib/helpers";
import { FormattedField, FormElement, FormItem, FormValues } from "./lib/types";

const FormBuilder = ({
  onSubmit,
}: {
  onSubmit: (form: FormattedField[]) => void;
}) => {
  const [formGenerated, setFormGenerated] = useState<Boolean>(false);
  const { register, control, setValue, unregister } = useForm<FormValues>();
  const { fields, append, remove, update, replace } = useFieldArray({
    name: "fields",
    control,
  });

  const elements: FormElement[] = [
    {
      name: "Bild",
      type: Elements.IMAGE,
      component: ImageBlock,
    },
    {
      name: "Text",
      type: Elements.TEXT,
      component: TextBlock,
    },
    {
      name: "Radio buttons",
      type: Elements.RADIOBUTTONS,
      component: RadioButtonsQuestionBlock,
    },
    {
      name: "Checkboxar",
      type: Elements.CHECKBOXES,
      component: CheckboxesQuestionBlock,
    },
    {
      name: "Input",
      type: Elements.INPUT,
      component: InputBlock,
    },
  ];

  const addItem = (item: FormElement) => {
    append({ ...item, props: { id: uuidv4(), expanded: true }, values: {} });
  };

  const handleToggleExpanded = (index: number, field: FormItem) => {
    update(index, {
      ...field,
      props: { ...field.props, expanded: !field.props.expanded },
    });
  };

  const getFormattedForm = (fields: FormItem[]) => {
    const formattedForm: FormattedField[] = fields.map((block) => ({
      type: block.type,
      id: block.props.id,
      values: block.values,
    }));
    return formattedForm;
  };

  const saveForm = (fields: FormItem[]) => {
    onSubmit(getFormattedForm(fields));
    setFormGenerated(true);
  };

  return (
    <div className={styles.wrapper}>
      {formGenerated ? (
        <GeneratedForm fields={fields} />
      ) : (
        <>
          <h2>Välj element</h2>
          <div className={styles.buttonWrapper}>
            {elements.map((item) => (
              <Button key={item.name} onClick={() => addItem(item)}>
                {item.name}
              </Button>
            ))}
          </div>
          {!fields.length && (
            <div>Lägg till nya fält med hjälp av knapparna.</div>
          )}
          {!!fields.length && (
            <>
              <ul className={styles.formItems}>
                {fields.map((field, i) => {
                  const Component = field.component;
                  return (
                    <Component
                      key={field.props.id}
                      {...field.props}
                      onRemove={() => remove(i)}
                      onToggleExpanded={() => handleToggleExpanded(i, field)}
                      register={register}
                      unregister={unregister}
                      setValue={setValue}
                      index={i}
                      onMove={(dir) => {
                        const newForm = [...fields];
                        newForm.splice(i, 1);
                        newForm.splice(
                          i + (dir === "down" ? 1 : -1),
                          0,
                          fields[i]
                        );
                        replace(newForm);
                      }}
                    />
                  );
                })}
              </ul>
              <Button
                onClick={() => saveForm(fields)}
                disabled={!fields.length}
              >
                Spara formulär
              </Button>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default FormBuilder;
