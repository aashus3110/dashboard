import bcrypt from "bcryptjs";
import connectMongoDB from "@/app/libs/mongodb";
import User from "@/models/user";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { email, password } = await request.json();

  if (!email || !password) {
    return NextResponse.json(
      { error: "Please provide both email and password" },
      { status: 400 }
    );
  }

  try {
    await connectMongoDB();

    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json(
        { error: "User with the provided email not found" },
        { status: 404 }
      );
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (passwordMatch) {
      const token = jwt.sign(
        { email: user.email, name: user.name },
        "jwt-secret-key",
        { expiresIn: "2d" }
      );

      return NextResponse.json(
        { success: true, message: "Login successful", token },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}
