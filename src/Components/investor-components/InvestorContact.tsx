import { useForm } from "react-hook-form";

export default function InvestorContact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm();

  // Simple phone validation: digits only, 7-15 digits (adjust as needed)
  const PHONE_PATTERN = /^[0-9]{7,15}$/;

  const onSubmit = async (data:any) => {
    try {
      // Replace with your API call
      // await fetch("/api/investor-contact", { method: "POST", body: JSON.stringify(data), headers: { "Content-Type": "application/json" } });

      // Simulate delay
      await new Promise((r) => setTimeout(r, 700));
      // Optionally notify user / close modal
      console.log(data);
      alert("Thank you! We'll reach out to you soon.");
      reset();
    } catch (err) {
      alert("Submission failed. Please try again later.");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-2xl shadow-md">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">Investor Contact</h3>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        {/* Name */}
        <label className="block mb-3">
          <span className="text-sm font-medium text-gray-700">Full name</span>
          <input
            type="text"
            aria-invalid={errors.name ? "true" : "false"}
            aria-describedby={errors.name ? "name-error" : undefined}
            {...register("name", {
              required: "Name is required.",
              minLength: { value: 2, message: "Name must be at least 2 characters." },
            })}
            className={`mt-1 block w-full rounded-lg border p-2 focus:outline-none focus:ring ${
              errors.name ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Your full name"
          />
          {errors.name && (
            <p id="name-error" className="text-red-600 text-sm mt-1">
              {String(errors.name.message)}
            </p>
          )}
        </label>

        {/* Email */}
        <label className="block mb-3">
          <span className="text-sm font-medium text-gray-700">Email</span>
          <input
            type="email"
            aria-invalid={errors.email ? "true" : "false"}
            aria-describedby={errors.email ? "email-error" : undefined}
            {...register("email", {
              required: "Email is required.",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email address.",
              },
            })}
            className={`mt-1 block w-full rounded-lg border p-2 focus:outline-none focus:ring ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="you@example.com"
          />
          {errors.email && (
            <p id="email-error" className="text-red-600 text-sm mt-1">
              {String(errors.email.message)}
            </p>
          )}
        </label>

        {/* Phone */}
        <label className="block mb-4">
          <span className="text-sm font-medium text-gray-700">Phone</span>
          <input
            type="tel"
            aria-invalid={errors.phone ? "true" : "false"}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            {...register("phone", {
              required: "Phone number is required.",
              pattern: {
                value: PHONE_PATTERN,
                message: "Enter a valid phone number (digits only, 7-15 characters).",
              },
            })}
            className={`mt-1 block w-full rounded-lg border p-2 focus:outline-none focus:ring ${
              errors.phone ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="e.g. 919812345678"
          />
          {errors.phone && (
            <p id="phone-error" className="text-red-600 text-sm mt-1">
              {String(errors.phone.message)}
            </p>
          )}
        </label>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-2 rounded-xl bg-gray-900 text-blue-50 font-medium disabled:opacity-60"
        >
          {isSubmitting ? "Submitting..." : "Get in touch"}
        </button>

        {isSubmitSuccessful && (
          <p className="text-green-600 text-sm mt-3">Your request was sent successfully.</p>
        )}
      </form>
    </div>
  );
}
