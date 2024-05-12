import { DatePicker } from "antd";
import { Controller } from "react-hook-form";

const CustomDatePicker = ({
  name,
  placeholder,
  errors,
  control,
  disabled,
  defaultValue,
}: any) => {
  return (
    <div className="py-2 max-w-full w-full text-lg">
      {placeholder && <p className="my-2 text-secondary">{placeholder}:</p>}
      <Controller
        rules={{ required: `${placeholder} is required` }}
        control={control}
        disabled={disabled}
        name={name}
        defaultValue={defaultValue}
        render={({ field }) => (
          <DatePicker
            placeholder={placeholder}
            {...field}
            className={`text-lg`} 
            format="YYYY-MM-DD"
          />
        )}
      />
      {errors?.name && (
        <span className="text-primary">{errors?.name.message}</span>
      )}
    </div>
  );
};

export default CustomDatePicker;
