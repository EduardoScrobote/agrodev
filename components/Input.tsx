import { RegisterOptions } from "react-hook-form";

type Prop = {
  placeholder: string;
  register: any;
  name: string;
};

function Input({ placeholder, register, name }: Prop) {
  return (
    <div>
      <input
        className="w-64 p-2 rounded-lg mt-2 border border-black outline-yellow-300"
        placeholder={placeholder}
        {...register(name)}
      />
    </div>
  );
}

export default Input;
