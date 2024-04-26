import { useState } from "react";

export const useForm = <T>(defaultValue: T): [T, (property: string) => (e: React.FormEvent<HTMLInputElement>) => void]  => {
  const [model, setModel] = useState(defaultValue);

  const handleChange = (property: string) => (e: React.FormEvent<HTMLInputElement>) => {
    setModel({
      ...model,
      [property]: e.currentTarget.value
    })
  }

  return [model, handleChange];
}
