export const dynamic = "force-dynamic";
import { getForms } from "@/actions/getForms";
import FormList from "@/components/FormList";
import CreateFormDialog from "@/components/CreateFormDialog";
import React from "react";

const MyForm = async () => {
  const forms = await getForms();

return (
  <div>
    <section className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 max-w-7xl mx-auto mb-4 px-2">
      <h1 className="font-bold text-xl">My Forms</h1>
      <CreateFormDialog
        totalForms={forms?.data?.length || 0}
        isSubscribed={true}
      />
    </section>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-2">
      {forms?.data?.map((form:any, index: number) => (
        <FormList key={index} form={form} />
      ))}
    </div>
  </div>
);
};

export default MyForm;