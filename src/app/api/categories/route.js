import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const categories = await prisma.category.findMany();
    //console.log("categories result", categories);

    return new NextResponse(JSON.stringify(categories, { status: 200 }));
  } catch (err) {
    console.log("hi",err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};