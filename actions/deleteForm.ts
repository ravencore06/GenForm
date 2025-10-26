"use server"

import prisma from "@/lib/prisma"
import { revalidatePath } from "next/cache";

export const deleteForm = async (formUuid:string) => {
    const form = await prisma.form.delete({
        where:{
            uuid:formUuid
        }
    });

    if(!form){
        return {success:false, message:"Form not found"}
    }

    // make sure update the form list
    revalidatePath("/dashboard/forms");

    return {
        success:true,
        message:"Form deleted successfully."
    }
}