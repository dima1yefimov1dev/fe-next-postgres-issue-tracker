import IssueStatusBadge from "@/lib/components/issue.status.badge";
import { Issue } from "@prisma/client";
import { Box, Heading, Flex, Card, Text } from "@radix-ui/themes";

const IssueDetail = ({issue} : {issue: Issue}) => {
  return (
    <>
    <Heading>
      {issue.title}
    </Heading>
    <Flex className="space-x-3" my="2">
      <IssueStatusBadge status={issue.status} />
      <Text>{issue?.createdAt.toDateString()}</Text>
    </Flex>
    <Card className="prose max-w-full" mt="4">
      <p>{issue?.description}</p>
    </Card>
    </>
  );
};

export default  IssueDetail;