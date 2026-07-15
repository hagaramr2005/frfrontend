import { z } from "zod";

export const step1Schema = z.object({
  firstName: z.string().min(2, "Enter at least 2 characters").max(50),
  lastName: z.string().min(2, "Enter at least 2 characters").max(50),
  email: z.string().email("Enter a valid email address"),
  country: z.string().min(1, "Select a country"),
  phone: z.string().min(6, "Enter a valid phone number"),
  city: z.string().min(2, "Enter a valid city").max(60),
  university: z.string().min(1, "University is required"),
  faculty: z.string().min(1, "Faculty is required"),
  academicYear: z.string().min(1, "Select your academic year"),
  graduationYear: z.string().min(1, "Select your expected graduation year"),
});

export const step2Schema = z.object({
  track: z.enum(["ml", "genai"], { message: "Select a track to continue" }),
});

export const step3Schema = z.object({
  motivation: z.string().min(50, "Tell us a bit more — at least 50 characters").max(1200),
  cvFileName: z.string().min(1, "Upload your CV to continue"),
});

export const applicationSchema = step1Schema.merge(step2Schema).merge(step3Schema);

export type ApplicationFormValues = z.infer<typeof applicationSchema>;

export const defaultApplicationValues: Partial<ApplicationFormValues> = {
  firstName: "",
  lastName: "",
  email: "",
  country: "",
  phone: "",
  city: "",
  university: "",
  faculty: "",
  academicYear: "",
  graduationYear: "",
  motivation: "",
  cvFileName: "",
};
