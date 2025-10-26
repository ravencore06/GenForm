import SubmissionsDetails from "@/components/SubmissionsDetails";
import prisma from "@/lib/prisma";
import React from "react";

const Submisions = async ({
  params,
}: {
  params: Promise<{ formId: string }>;
}) => {
  const formId = (await params).formId;

  // First find the form by UUID to get its internal ID
  const form = await prisma.form.findUnique({
    where: {
      uuid: formId,
    },
  });

  if (!form) {
    return <h1>Form not found</h1>;
  }

  const submissions = await prisma.submissions.findMany({
    where: {
      formId: form.id,
    },
    include: {
      form: true,
    },
  });
  if (!submissions || submissions.length === 0) {
    return <h1>No submissions found for form id {formId}</h1>;
  }
  return (
    <div>
      {submissions.map((submission : any, index: number) => (
        <SubmissionsDetails key={index} submission={submission} index={index} />
      ))}
    </div>
  );
};

export default Submisions;