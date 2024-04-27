"use client"

import { CreatePosts } from "@/api/postsApi";
import { ValueType, FunctionTable, PropertyStatus, useForm } from "../hooks/useForm";
import { useSubmit } from "../hooks/useSubmit";
import { CreatePostCommand, CreatePostCommandKey, defaultCreatePostCommand } from "@/models/postModels";


const checkRequired = (value: ValueType): PropertyStatus => {
  if (value === null || value === undefined) {
    return { status: false} as PropertyStatus;
  }
  return { status: value.length > 0} as PropertyStatus;
}

const checkTable: FunctionTable = {
  'title': checkRequired,
}

export default function CreatePost() {    
  const [model, handleChange, checkModel] = useForm<CreatePostCommand>(defaultCreatePostCommand, checkTable);
  const onSubmit = useSubmit<CreatePostCommand>(CreatePosts, checkModel, '/');

  return (
    <form className="max-w-sm mx-auto" 
      onSubmit={onSubmit(model)}>
      <div className="mb-5">
        <Input propertyName="title" label="Title" handleChange={handleChange} model={model} />
      </div>
      <div className="mb-5">
        <Input propertyName="description" label="Description" handleChange={handleChange} model={model} />
      </div>
      <div className="mb-5">
        <Input propertyName="author" label="Author" handleChange={handleChange} model={model} />
      </div>
      <div className="mb-5">
        <Input propertyName="postImage" label="Image" handleChange={handleChange} model={model} />
      </div>
      <div className="mb-5">
        <Input propertyName="contentHtml" label="Content" handleChange={handleChange} model={model} />
      </div>
      <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
    </form>
  )
}

function Input({ propertyName, label, model, handleChange, required = false }: { propertyName: string, label: string, model: CreatePostCommand, handleChange: (property: string) => (e: React.FormEvent<HTMLInputElement>) => void, required?: boolean }) {
  const property = propertyName as CreatePostCommandKey;
  return (
    <>
      <label
        htmlFor={propertyName}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        {label}
      </label>
      <input
        type="text"
        name={propertyName}
        id={propertyName}
        onChange={handleChange(propertyName)}
        value={model[property]}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
        required={required}
      />
    </>
  )
}

