import { Input } from "antd";
import { Controller } from "react-hook-form";

const CustomInput = ({
  name,
  placeholder,
  errors,
  control,
  type,
  disabled,
  defaultValue,
}: any) => {
  const isPasswordType = type === "password";

  return (
    <div className="py-2 max-w-[450px] text-lg">
      {placeholder && <p className="my-2 text-secondary">{placeholder}:</p>}

      <Controller
        rules={{ required: `${placeholder} is required` }}
        control={control}
        disabled={disabled}
        name={name}
        defaultValue={defaultValue}
        render={({ field }) =>
          isPasswordType ? (
            <Input.Password
              placeholder={placeholder}
              {...field}
              className={`text-lg`}
            />
          ) : (
            <Input placeholder={placeholder} {...field} className={`text-lg`} />
          )
        }
      />
      {errors?.name && (
        <span className="text-primary">{errors?.name.message}</span>
      )}
    </div>
  );
};

export default CustomInput;
