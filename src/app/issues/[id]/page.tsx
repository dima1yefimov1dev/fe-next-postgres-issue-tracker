import IssueStatusBadge from "@/lib/components/issue.status.badge";
import { Box, Button, Card, Flex, Grid, Heading, Text } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import prisma from "../../../../prisma/client";
import { Pencil2Icon } from "@radix-ui/react-icons";
import Link from "next/link";
import IssueDetail from "../_components/issue.detail";
import DeleteIssueButton from "./delete.issue.button";

interface Props {
  params: { id: string};
}

const IssueDetailPage = async ({ params }: Props) => {
  const { id } = params;
  
  const issue = await prisma.issue.findUnique({
    where: { 
      id: parseInt(id), 
    }
  });

  if (!issue) return notFound();
  
  return (
    <Grid columns={{ initial: "1", md: "5" }} gap="5">
      <Box className="lg:col-span-4">
        <IssueDetail 
          issue={issue} 
        />
      </Box>
      <Box className="">
        <Flex direction="column" gap='4'>
          <Button>
            <Pencil2Icon />
            <Link href={`/issues/${issue.id}/edit`}>Edit issue</Link>
          </Button>
          <DeleteIssueButton issueId={parseInt(id)}/>
        </Flex>
      </Box>
    </Grid>
  )
}

export default IssueDetailPage;