import { NextResponse } from "next/server";
import { PrismaClient, Type } from "@/app/generated/prisma";

async function handler(req){
    const userClient = new PrismaClient({
        log: ['query','error','info']
    });
    try {
        const {payload} = await req.json();
        const result = await userClient.query.upsert({
            create:{
                name: payload.name,
                email: payload.email,
                number: payload.number,
                type:[payload.type] ? [payload.type] : [],
            },
            update:{
                type:{
                    push: payload.type
                },
                queries:{
                    push: payload.query
                }
            },
            where:{
                email: payload.email,
                number: payload.number
            }
        });
        return NextResponse.json({msg:"Query recieved" , result}, {status:201});
    } catch (err) {
        console.log(`${err.message}`)
        return NextResponse.json({error:"some error occured"},{status: 500});
    } finally{
        await userClient.$disconnect();
    }
}

export {handler as POST}