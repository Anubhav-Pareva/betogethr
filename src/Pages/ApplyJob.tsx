
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import BackButton from "../Components/common-components/BackButton";

export default function ApplyJob() {
    const navigation = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm();

  const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2MB

  const onSubmit = async (data:any) => {
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("resume", data.resume[0]);

      // Example submission - replace with your API call
      // await fetch('/api/apply', { method: 'POST', body: formData });

navigation('/careers');
      reset();
    } catch (err) {
      alert("Failed to submit. Please try again later.");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 my-4 bg-white rounded-2xl shadow-md">
        <BackButton/>
      <h2 className="text-xl font-semibold mb-4 text-center">Apply Now</h2>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        {/* Name Field */}
        <label className="block mb-2">
          <span className="text-sm font-medium">Full Name</span>
          <input
            type="text"
            {...register("name", {
              required: "Name is required.",
              minLength: { value: 2, message: "Name must be at least 2 characters." },
            })}
            className={`mt-1 block w-full rounded-lg border p-2 focus:outline-none focus:ring ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="Your full name"
          />
          {errors.name && <p className="text-red-600 text-sm mt-1">{String(errors.name.message)}</p>}
        </label>

        {/* Email Field */}
        <label className="block mb-2">
          <span className="text-sm font-medium">Email</span>
          <input
            type="email"
            {...register("email", {
              required: "Email is required.",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email address.",
              },
            })}
            className={`mt-1 block w-full rounded-lg border p-2 focus:outline-none focus:ring ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="you@example.com"
          />
          {errors.email && <p className="text-red-600 text-sm mt-1">{String(errors.email.message)}</p>}
        </label>

        {/* Resume Field */}
        <label className="block mb-4">
          <span className="text-sm font-medium">Resume (PDF only, max 2MB)</span>
          <input
            type="file"
            accept="application/pdf, .pdf"
            {...register("resume", {
              required: "Resume is required.",
              validate: {
                fileType: (files) => {
                  const file = files && files[0];
                  if (!file) return true;
                  return (
                    file.type === "application/pdf" ||
                    file.name.toLowerCase().endsWith(".pdf") ||
                    "Only PDF files are accepted."
                  );
                },
                fileSize: (files) => {
                  const file = files && files[0];
                  if (!file) return true;
                  return file.size <= MAX_FILE_SIZE || "File size must be less than 2MB.";
                },
              },
            })}
            className={`mt-1 block w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold ${errors.resume ? 'file:bg-red-100' : 'file:bg-gray-100'}`}
          />
          {errors.resume && <p className="text-red-600 text-sm mt-1">{String(errors.resume.message)}</p>}
        </label>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-2 rounded-xl bg-gray-900 text-white font-medium disabled:opacity-60"
        >
          {isSubmitting ? 'Submitting...' : 'Submit Application'}
        </button>

        {isSubmitSuccessful && (
          <p className="text-green-600 text-sm mt-3">Application submitted successfully!</p>
        )}
      </form>

      <p className="mt-3 text-xs text-gray-500">By submitting you agree to our terms and privacy policy.</p>
    </div>
  );
}
