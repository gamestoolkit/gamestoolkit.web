import { useState } from "react";

export type PropertyStatus = { status: boolean, message?: string}
type DicOfProperties<Type> = {
  [Property in keyof Type]: PropertyStatus;
};
export type ValueType = string | undefined | null;
type ReturnType<T> = [
  T, 
  (property: string) => (e: React.FormEvent<HTMLInputElement>) => void,
  () => boolean
];
export type FunctionTable = {[key: string]: (value: ValueType) => PropertyStatus};

export const useForm = <T>(defaultValue: T, checkFunctions?: FunctionTable): ReturnType<T> => {
  const [model, setModel] = useState(defaultValue);
  const [modelStatus, setModelStatus] = useState({} as DicOfProperties<T>)

  const handleChange = (property: string) => (e: React.FormEvent<HTMLInputElement>) => {    
    setModel({
      ...model,
      [property]: e.currentTarget.value
    })
    // Check if the current property has any check
    if (checkFunctions && property in checkFunctions) {
      type KeyofT  = keyof T;
      setModelStatus({
        ...modelStatus,
        [property]: checkFunctions[property](e.currentTarget.value as string)
      })
    }
      
  }

  // Function to check if the model is okay to be dispatch
  const checkModel = () => {
    let property: keyof T;
    console.log("checking...")
    for (property in modelStatus) {      
      console.log(`${property as string}: ${modelStatus[property]}` )
      if (!modelStatus[property]) {
        return false;
      }
    }
    return true;
  }

  
  return [model, handleChange, checkModel];
}
