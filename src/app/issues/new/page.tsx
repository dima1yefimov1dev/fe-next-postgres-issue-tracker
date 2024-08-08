"use client";

import { TextField, Button } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useForm, Controller } from "react-hook-form";
import { useRouter } from "next/navigation";
import axios from "axios";

interface INewIssueForm {
  title: string,
  description: string
}

const NewIssuePage = () => {
  const {control, register, handleSubmit} = useForm<INewIssueForm>();
  const router = useRouter();
  const onSubmit = async (data:INewIssueForm) => {
    try {
      await axios.post('/api/issues', data);
      router.push('/issues');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form 
      className="max-w-xl space-y-3"
      onSubmit={handleSubmit((data) => onSubmit(data) )}
    >
      <TextField.Root placeholder="Enter issue title" {...register('title')}/>
      <Controller 
        name="description"
        control={control} 
        render={({field}) => <SimpleMDE placeholder="Description" {...field}/>}
      />

      <Button>Add New Issue</Button>
    </form>
  )
}

export default NewIssuePage;