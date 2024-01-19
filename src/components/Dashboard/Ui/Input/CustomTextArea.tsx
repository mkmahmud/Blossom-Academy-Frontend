import { Input } from "antd";
import { Controller } from "react-hook-form";
const { TextArea } = Input;
const CustomTextArea = ({
  name,
  placeholder,
  errors,
  control,
  disabled,
  defaultValue,
}: any) => {
  return (
    <div className="py-2 max-w-full w-full text-lg">
      <p className="my-2 text-secondary">{placeholder}:</p>
      <Controller
        rules={{ required: `${placeholder} is required` }}
        control={control}
        disabled={disabled}
        name={name}
        defaultValue={defaultValue}
        render={({ field }) => (
          <TextArea
            placeholder={placeholder}
            {...field}
            className={`text-lg`}
            autoSize={{ minRows: 3, maxRows: 5 }}
          />
        )}
      />
      {errors?.name && (
        <span className="text-primary">{errors?.name.message}</span>
      )}
    </div>
  );
};

export default CustomTextArea;
