import { NextResponse } from "next/server";
import { PrismaClient } from "@/app/generated/prisma";

const userClient = new PrismaClient();

async function handler(req){
    try {
        const data = await userClient.query.findMany();
        if (data){
            return NextResponse.json({msg:"success",data}, {status: 200});
        } else{
            throw new Error("No data found");
        }
    } catch (error) {
        console.log(error);
        return NextResponse.json({msg:"some error occured"},{status:500});
    }finally{
        userClient.$disconnect();
    }
}

export {handler as GET}
