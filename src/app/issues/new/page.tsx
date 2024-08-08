"use client";

import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useState } from "react";
import { TextField, Button, Callout } from "@radix-ui/themes";
import { useForm, Controller } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { createIssueSchema, NewIssueForm } from "@/lib/zod/create.issue.schema";
import ErrorMessage from "@/lib/components/error.message/error.message";
import axios from "axios";


const NewIssuePage = () => {
  const {control, register, handleSubmit, formState: {errors}} = useForm<NewIssueForm>({
    resolver: zodResolver(createIssueSchema)
  });

  const router = useRouter();
  const [error, setError] = useState('');

  const onSubmit = handleSubmit(async (data) => {
    try {
      await axios.post('/api/issues', data);
      router.push('/issues');
    } catch (error) {
      setError('An unexprected error occured');
    }
  })

  return (
    <div className="max-w-xl">
      {error && 
        <Callout.Root color="red" className="mb-5">
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      }

      <form 
        className="space-y-3"
        onSubmit={onSubmit}
      >
        <TextField.Root placeholder="Enter issue title" {...register('title')}/>
        <ErrorMessage>{errors.title?.message}</ErrorMessage>
        <Controller 
          name="description"
          control={control} 
          render={({field}) => <SimpleMDE placeholder="Description" {...field}/>}
        />
        <ErrorMessage>{errors.description?.message}</ErrorMessage>
        <Button>Add New Issue</Button>
      </form>
    </div>
  )
}

export default NewIssuePage;