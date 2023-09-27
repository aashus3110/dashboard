import connectMongoDB from "@/app/libs/mongodb";
import Career from "@/models/career";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const {
    newJobTitle: jobTitle,
    newJobLocation: jobLocation,
    newRequiredExperience: requiredExperience,
    newRequiredSkill: requiredSkill,
    newJobDescription: jobDescription,
  } = await request.json();

  try {
    await connectMongoDB();
    await Career.findByIdAndUpdate(params.id, {
      jobTitle,
      jobLocation,
      requiredExperience,
      requiredSkill,
      jobDescription,
    });
    return NextResponse.json({ message: "Career updated" }, { status: 200 });
  } catch (error) {
    console.error("Error updating career:", error);
    return NextResponse.json({ error: "Failed to update career" }, { status: 500 });
  }
}

export async function GET(request, { params }) {
  try {
    await connectMongoDB();
    const career = await Career.findOne({ _id: params.id });
    return NextResponse.json({ career }, { status: 200 });
  } catch (error) {
    console.error("Error fetching career:", error);
    return NextResponse.json({ error: "Failed to fetch career" }, { status: 500 });
  }
}
