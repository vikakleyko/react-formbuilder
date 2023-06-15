import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { FormattedField } from "../../FormBuilder";
import styles from "./GeneratedForm.module.css";

type ImageProps = {
  item: FormattedField;
  index: number;
};

const Image = ({ item: { values: file } }: ImageProps) => {
  const [preview, setPreview] = useState<string>();

  useEffect(() => {
    if (!file) {
      return;
    }
    const objectUrl = URL.createObjectURL(file.file[0] as any);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [file.file[0]]);

  return <img src={preview} height={200} className={styles.image} />;
};

export default Image;