import { NextResponse } from "next/server";

export async function DELETE(request, {params}) {
    const id = params.id;
    console.log(`id: ${id}`);
    
    return new NextResponse({"Book deleted": id});
}