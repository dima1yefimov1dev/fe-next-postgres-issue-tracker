import { Button, Table } from '@radix-ui/themes';
import Link from 'next/link';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const LoadingIssuesPage = () => {
  const issues = [1, 2 , 3, 4, 5];

  return (
    <div className="">
       <div className="mb-7">
        <Button>
          <Link href="issues/new">
            New Issue
          </Link>
        </Button>
       </div>
       <Table.Root variant="surface">
        <Table.Header>
           <Table.Row>
              <Table.ColumnHeaderCell>Issue</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell className="hidden md:table-cell">Status</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell className="hidden md:table-cell">Created</Table.ColumnHeaderCell>
           </Table.Row>
        </Table.Header>
        <Table.Body>
          {issues.map(issue => (
            <Table.Row key={issue}>
              <Table.Cell>{<Skeleton />}
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
              {<Skeleton />}
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">{<Skeleton />}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  )
}

export default LoadingIssuesPage;