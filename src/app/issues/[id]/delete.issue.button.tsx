'use client';
import { AlertDialog, Button, Flex } from "@radix-ui/themes"
import axios from "axios";
import { useRouter } from "next/navigation";

const DeleteIssueButton = ({issueId} : {issueId: number}) => {

  const handleDelete = async () => {
    try {
      console.log('deleting');
      await axios.delete(`/api/issues/` + issueId);
      router.push('/issues');
      router.refresh()
    } catch (error) {
      console.log(error);
    }
  }
  const router = useRouter();
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger>
        <Button color="red">Delete issue</Button>
      </AlertDialog.Trigger>
      <AlertDialog.Content> 
        <AlertDialog.Title>
          Confirm Deletion
        </AlertDialog.Title>
        <AlertDialog.Description>
          Are you sure you want to do it?
        </AlertDialog.Description>
        <Flex mt='4' gap='3'>
        <AlertDialog.Cancel>
          <Button variant="soft" color='gray'>Cancel</Button>
        </AlertDialog.Cancel>
        <AlertDialog.Action>
          <Button 
            color="red"
            onClick={handleDelete}
          >
            Delete it!
          </Button>
        </AlertDialog.Action>
      </Flex>
      </AlertDialog.Content>  
    </AlertDialog.Root>
  )
}

export default DeleteIssueButton;