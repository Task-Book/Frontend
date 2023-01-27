import React, { ChangeEvent, FC } from "react";
import { InputStyle } from "./style";

export enum LineThrough {
  through = "line-through",
  none = "none",
}

interface ITaskWrapper {
  nameTask: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  disabled: boolean;
  lineThrough?: LineThrough;
  placeholder: string;
}

export const Input: FC<ITaskWrapper> = ({
  nameTask,
  onChange,
  disabled,
  lineThrough = LineThrough.none,
  placeholder,
}) => {
  return (
    <InputStyle
      value={nameTask}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      lineThrough={lineThrough}
    />
  );
};
