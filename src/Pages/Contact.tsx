import { useForm } from "react-hook-form";

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm();

  const onSubmit = (data:any) => {
    console.log("Form Submitted:", data);
    reset(); // reset form after submission
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-6">
      <div className="bg-linear-to-b from-yellow-400 via-purple-500 to-blue-500 shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center text-white mb-6">
          Contact Us
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-white font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              {...register("name", {
                required: "Name is required",
                minLength: {
                  value: 3,
                  message: "Name must be at least 3 characters",
                },
              })}
              className={`w-full border border-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 ${
                errors.name ? "border-red-500 focus:ring-red-300" : "focus:ring-blue-300"
              }`}
              placeholder="Enter your name"
            />
            {errors.name && (
              <p className="text-blue-50 text-sm mt-1">{String(errors?.name?.message)}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-white font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email address",
                },
              })}
              className={`w-full border border-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 ${
                errors.email ? "border-red-500 focus:ring-red-300" : "focus:ring-blue-300"
              }`}
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-blue-50 text-sm mt-1">{String(errors.email.message)}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <label className="block text-white font-medium mb-1">
              Message
            </label>
            <textarea
              rows={4}
              {...register("message", {
                required: "Message is required",
                minLength: {
                  value: 10,
                  message: "Message should be at least 10 characters",
                },
              })}
              className={`w-full border border-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 ${
                errors.message ? "border-red-500 focus:ring-red-300" : "focus:ring-blue-300"
              }`}
              placeholder="Write your message..."
            />
            {errors.message && (
              <p className="text-blue-50 text-sm mt-1">{String(errors.message.message)}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-linear-to-r from-yellow-400 via-purple-500 to-blue-500 hover:bg-linear-to-r hover:from-blue-500 hover:via-purple-500 hover:to-yellow-400 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Submit
          </button>

          {/* Success message */}
          {isSubmitSuccessful && (
            <p className="text-green-600 text-center mt-4">
              ✅ Thank you! Your message has been sent.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
