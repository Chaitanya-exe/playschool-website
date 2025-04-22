import { NextResponse } from "next/server";
import { PrismaClient } from "@/app/generated/prisma";

async function handler(req){
    const userClient = new PrismaClient({
        log: ['query','error','info']
    });
    try {
        const {payload} = await req.json();
        const result = await userClient.query.upsert({
            create:{
                email: payload.email,
                    name: payload.name,
                    number:payload.number,
                    type:{
                        push: payload.type
                    },
                    queries:{
                        push: payload.query
                }
            },
            update:{
                queries: payload.query ? [payload.query] : [],
                type : payload.type ? [payload.type] : []
            },
            where:{
                number: payload.number,
                email: payload.email
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