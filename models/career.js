import mongoose from "mongoose";

const careerSchema = new mongoose.Schema(
  {
    jobTitle: {
      type: String,
      required: [true, "Job Title is required"],
      trim: true,
    },
    jobLocation: {
      type: String,
      required: [true, "Job Location is required"],
      trim: true,
    },
    requiredExperience: {
      type: String,
      required: [true, "Required Experience is required"],
      trim: true,
    },
    requiredSkill: {
      type: String,
      required: [true, "Required Skill is required"],
      trim: true,
    },
    jobDescription: {
      type: String,
      required: [true, "Job Description is required"],
      trim: true,
    },
  },
  { timestamps: true }
);

const Career = mongoose.models.Career || mongoose.model("Career", careerSchema);

export default Career;
