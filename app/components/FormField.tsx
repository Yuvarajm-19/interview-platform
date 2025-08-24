import { FormControl, FormDescription, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control, Controller, FieldValues, Path } from "react-hook-form";

interface FormFieldProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>; // ensures `name` matches your form schema
  label: string;
  placeholder?: string;
  description?: string;
  type?: 
    | "text" 
    | "email" 
    | "password" 
    | "number" 
    | "tel" 
    | "url" 
    | "search" 
    | "date" 
    | "time" 
    | "datetime-local" 
    | "month" 
    | "week" 
    | "color" 
    | "file";
}

const FormField = <T extends FieldValues>({
  control,
  name,
  label,
  placeholder,
  description,
  type = "text",
}: FormFieldProps<T>) => (
  <Controller
    control={control}
    name={name}
    render={({ field }) => (
      <FormItem>
        <FormLabel className="label">{label}</FormLabel>
        <FormControl>
          <Input type={type} placeholder={placeholder} {...field} />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
);

export default FormField;
