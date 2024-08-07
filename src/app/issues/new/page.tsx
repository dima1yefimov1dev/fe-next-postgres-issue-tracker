"use client";

import { TextField, TextArea, Button } from "@radix-ui/themes";

const NewIssuePage = () => {
  return (
    <div className="max-w-xl space-y-3">
      <TextField.Root placeholder="Enter issue title" />
      <TextArea placeholder="Description"/>
      <Button>Add New Issue</Button>
    </div>
  )
}

export default NewIssuePage;