import connectMongoDB from "@/app/libs/mongodb";
import Career from "@/models/career";
import { NextResponse } from "next/server";

export async function POST(request) {
  const {
    jobTitle,
    jobLocation,
    requiredExperience,
    requiredSkill,
    jobDescription,
  } = await request.json();
  
  try {
    await connectMongoDB();
    
    const newCareer = await Career.create({
      jobTitle,
      jobLocation,
      requiredExperience,
      requiredSkill,
      jobDescription,
    });
    
    return NextResponse.json({ message: "Career Created", career: newCareer }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}

export async function GET() {
  try {
    await connectMongoDB();
    const careers = await Career.find();
    return NextResponse.json({ careers });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  
  try {
    await connectMongoDB();
    await Career.findByIdAndDelete(id);
    return NextResponse.json({ message: "Career deleted" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}
