"use client";

import { useOrganization } from "@clerk/nextjs";
import { useSearchParams } from "next/navigation";
import { BoardList } from "./_components/board-list";
import { EmptyOrg } from "./_components/empty-org";

const DashboardPage = () => {
  const { organization } = useOrganization();
  const searchParams = useSearchParams();
  
  // Extract the search parameters
  const search = searchParams.get('search') || undefined;
  const favourites = searchParams.get('favourites') || undefined;
  
  const query = { search, favourites };

  return (
    <div className="flex-1 h-[calc(100%-80px)] p-6">
      {!organization ? (
        <EmptyOrg />
      ) : (
        <BoardList orgId={organization.id} query={query} />
      )}
    </div>
  );
};

export default DashboardPage;