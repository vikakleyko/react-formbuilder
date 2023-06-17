import {
  UseFormRegister,
  UseFormSetValue,
  UseFormUnregister,
} from "react-hook-form";

export type FormItemBlockProps = {
  id: string;
  expanded: boolean;
  index: number;
  setValue?: UseFormSetValue<FormValues>;
  register: UseFormRegister<FormValues>;
  unregister?: UseFormUnregister<FormValues>;
  onRemove: (id: string) => void;
  onToggleExpanded?: (id: string) => void;
  onMove?: (dir: "up" | "down") => void;
};

export type InputType =
  | "image"
  | "text"
  | "radio-buttons"
  | "checkboxes"
  | "dropdown"
  | "input";

export type FormItem = {
  name: string;
  type: InputType;
  component: (props: FormItemBlockProps) => JSX.Element;
  props: {
    id: string;
    expanded: boolean;
  };
  values: Record<string, string>;
};

export type FormattedField = {
  type: InputType;
  id: string;
  values: Record<string, string | string[]>;
};

export type FormElement = Omit<FormItem, "props" | "values">;

export type FormValues = {
  fields: FormItem[];
};
