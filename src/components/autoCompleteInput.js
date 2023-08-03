import React from "react";
import Fuse from "fuse.js";
export default function AutoCompleteInput(props) {
  const { fieldState, fieldApi, render, ref, userProps } = useField({
    ...props,
  });

  const { value } = fieldState;
  const { setValue, setTouched } = fieldApi;
  const { onChange, onBlur, ...rest } = userProps;

  return render(
    <input {...rest} className={className} ref={ref} value={value} />
  );
}
