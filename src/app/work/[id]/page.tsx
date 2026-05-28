import { clients } from "@/lib/data";
import { notFound } from "next/navigation";
import { WorkDetailClient } from "@/components/sections/work-detail-client";

export async function generateStaticParams() {
  return clients.map((client) => ({
    id: client.id,
  }));
}

export default async function WorkPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const client = clients.find((c) => c.id === id);

  if (!client) {
    notFound();
  }

  return <WorkDetailClient client={client} />;
}
