import { useEffect, useState } from "react";
import { GeneratedFormItemProps } from "../../lib/types";
import styles from "./GeneratedForm.module.css";

const Image = ({ item: { values: file } }: GeneratedFormItemProps) => {
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
