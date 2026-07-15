import { useFormContext } from "react-hook-form";
import { Input } from "../../components/ui/Input";
import { Select } from "../../components/ui/Select";
import type { ApplicationFormValues } from "./schema";

const countries = ["Egypt", "Saudi Arabia", "United Arab Emirates", "Jordan", "Lebanon", "Other"].map((c) => ({ label: c, value: c }));
const years = ["1st", "2nd", "3rd", "4th", "5th+", "Graduate"].map((y) => ({ label: y, value: y }));
const gradYears = Array.from({ length: 7 }, (_, i) => `${2026 + i}`).map((y) => ({ label: y, value: y }));

export function StepPersonal() {
  const { register, formState: { errors } } = useFormContext<ApplicationFormValues>();
  return (
    <div className="grid grid-cols-1 tablet:grid-cols-2 gap-6">
      <Input label="First Name" required {...register("firstName")} error={errors.firstName?.message} />
      <Input label="Last Name" required {...register("lastName")} error={errors.lastName?.message} />
      <Input label="Email" type="email" required {...register("email")} error={errors.email?.message} />
      <Select label="Country" required options={countries} placeholder="Select your country" {...register("country")} error={errors.country?.message} />
      <Input label="Phone Number" type="tel" required {...register("phone")} error={errors.phone?.message} />
      <Input label="City" required {...register("city")} error={errors.city?.message} />
      <Input label="University" required {...register("university")} error={errors.university?.message} />
      <Input label="Faculty" required {...register("faculty")} error={errors.faculty?.message} />
      <Select label="Academic Year" required options={years} placeholder="Select your year" {...register("academicYear")} error={errors.academicYear?.message} />
      <Select label="Expected Graduation Year" required options={gradYears} placeholder="Select a year" {...register("graduationYear")} error={errors.graduationYear?.message} />
    </div>
  );
}
