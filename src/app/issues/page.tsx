import prisma from '@/.././../prisma/client';
import { Button } from "@radix-ui/themes";
import NextLink from 'next/link';
import IssueTable from './_components/issue.table';

const IssuesPage = async () => {
  const issues = await prisma.issue.findMany();
  return (
    <div className="">
      <div className="mb-7">
        <Button>
          <NextLink href="issues/new">
            New Issue
          </NextLink>
        </Button>
      </div>
      <IssueTable issues={issues}/>
    </div>
  )
}

export default IssuesPage;