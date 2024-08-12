"use client";

import ErrorMessage from "@/lib/components/error.message";
import Spinner from "@/lib/components/spinner";
import { issueSchema, NewIssueForm } from "@/lib/zod/create.issue.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Issue } from "@prisma/client";
import { Button, Callout, TextField } from "@radix-ui/themes";
import axios from "axios";
import "easymde/dist/easymde.min.css";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";

const SimpleMDE = dynamic(
  () => import('react-simplemde-editor'), 
  {ssr: false}
)

interface Props {
  issue?: Issue
}

const IssueForm = ({ issue }: Props) => {
  const {control, register, handleSubmit, formState: {errors}} = useForm<NewIssueForm>({
    resolver: zodResolver(issueSchema)
  });

  const router = useRouter();
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmiting] = useState(false);

  const onSubmit = handleSubmit(async (data) => {
    try {
      setIsSubmiting(true);
      if (issue) {
        await axios.patch(`/api/issues/${issue.id}`, data)
      } else {
        await axios.post('/api/issues', data);
      }
      router.push('/issues');
    } catch (error) {
      setError('An unexprected error occured');
    } finally {
      setIsSubmiting(false);
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
        <TextField.Root placeholder="Enter issue title" defaultValue={issue?.title} {...register('title')}/>
        <ErrorMessage>{errors.title?.message}</ErrorMessage>
        <Controller 
          name="description"
          defaultValue={issue?.description}
          control={control} 
          render={({field}) => <SimpleMDE placeholder="Description" {...field}/>}
        />
        <ErrorMessage>{errors.description?.message}</ErrorMessage>
        <Button disabled={isSubmitting}>{issue ? 'Save changes' : 'Create Issue'} {isSubmitting && <Spinner/>}</Button>
      </form>
    </div>
  )
}

export default IssueForm;