"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Icon } from "react-icons-kit";
import { eyeOff, eye } from "react-icons-kit/feather";
import PhoneInput from "react-phone-number-input";
import { useDispatch } from "react-redux";
import { registerUser } from "../../../../redux/slices/authSlice";
import Input from "@/components/Input/Input";
import Button from "@/components/button/button";
import store from "../../../../redux/store";
import { AppDispatch } from "../../../../redux/store";

// Define types
type RootState = ReturnType<typeof store.getState>;
type FormErrors = {
  username: string;
  email: string;
  phone: string;
  password: string;
  terms: string;
};

// Password requirements component
const PasswordRequirements = ({ password }: { password: string }) => {
  const requirements = [
    { label: "8 characters minimum", regex: /.{8,}/ },
    { label: "1 uppercase character", regex: /[A-Z]/ },
    { label: "1 number", regex: /[0-9]/ },
    {
      label: "1 special character",
      regex: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/,
    },
  ];

  return (
    <div className="flex w-full flex-col items-start gap-[10px]">
      <div className="flex justify-between items-center w-full">
        {requirements.slice(0, 2).map((req, index) => (
          <p
            key={index}
            className={`text-[16px] font-[300] w-1/2 ${
              req.regex.test(password) ? "text-green-500" : ""
            }`}
          >
            {req.regex.test(password) ? "✓" : "x"} {req.label}
          </p>
        ))}
      </div>
      <div className="flex justify-between items-center w-full">
        {requirements.slice(2).map((req, index) => (
          <p
            key={index}
            className={`text-[16px] font-[300] w-1/2 ${
              req.regex.test(password) ? "text-green-500" : ""
            }`}
          >
            {req.regex.test(password) ? "✓" : "x"} {req.label}
          </p>
        ))}
      </div>
    </div>
  );
};

const SignUp = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    agreeToTerms: false,
  });
  const [type, setType] = useState<"password" | "text">("password");
  const [icon, setIcon] = useState(eyeOff);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({
    username: "",
    email: "",
    phone: "",
    password: "",
    terms: "",
  });

  const dispatch = useDispatch<AppDispatch>();

  const handleToggle = () => {
    setType((prev) => (prev === "password" ? "text" : "password"));
    setIcon((prev: any) => (prev === eyeOff ? eye : eyeOff));
  };

  const handlePhoneChange = (value: string | undefined) => {
    setFormData((prev) => ({ ...prev, phone: value || "" }));
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {
      username: "",
      email: "",
      phone: "",
      password: "",
      terms: "",
    };

    if (!formData.username) {
      newErrors.username = "Username is required";
    } else if (/[^a-zA-Z0-9_]/.test(formData.username)) {
      newErrors.username = "No special characters or spaces allowed";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (
      !/(?=.*\d)(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}/.test(
        formData.password
      )
    ) {
      newErrors.password = "Password doesn't meet all requirements";
    }

    if (!formData.agreeToTerms) {
      newErrors.terms = "You must agree to the terms and privacy policy";
    }

    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);
    try {
      await dispatch(
        registerUser({
          username: formData.username,
          email: formData.email,
          password: formData.password,
          phone: formData.phone,
          // role: "",
        })
      );

      // Handle success
      router.push("/"); // Redirect to home
      setFormData({
        username: "",
        email: "",
        phone: "",
        password: "",
        agreeToTerms: false,
      });
    } catch (error: any) {
      // Handle error
      if (error.response?.data?.message) {
        console.error("Registration failed:", error.response.data.message);
      } else {
        console.error("Registration failed:", error.message || error);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="lg:h-screen w-full flex relative z-0 dark:bg-[#121212]">
      {/* Left Section */}
      <div className="hidden lg:flex w-1/2 relative">
        <Image
          src={"/signUp.svg"}
          className="w-full h-full object-cover"
          width={870}
          height={1000}
          alt="Sign up illustration"
        />
        <div className="bg-[#11224059] w-[80%] xl:w-[60%] absolute bottom-0 right-0 py-[42px] pr-[45px] pl-[30px] rounded-tl-[15px] rounded-bl-[15px]">
          <p className="text-[20px] font-[400] font-quicksand leading-[24px] text-right text-white">
            We prioritize the safety of our users by integrating secure payment
            gateways and providing robust support throughout the buying and
            selling process.
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="lg:w-1/2 w-full pt-[40px] pb-[72px] custom-scrollbar lg:overflow-y-auto px-4 sm:px-10 xl:px-[120px]">
        <h1 className="lg:text-[60px] text-[40px] leading-[48px] pb-[15px]">
          Create Account
        </h1>
        <p className="font-quicksand text-[16px] lg:text-[20px] text-[#121212] dark:text-white font-normal mb-[48px]">
          Already have an account?{" "}
          <Link href={"/auth/sign-in"} className="underline font-[700]">
            Login
          </Link>
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-start w-full gap-5 lg:gap-10 font-quicksand"
        >
          {/* Username */}
          <div className="flex flex-col w-full items-start gap-2">
            <Input
              id="Username"
              label="Username"
              placeholder="Enter your Username"
              value={formData.username}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, username: e.target.value }))
              }
            />
            <p className="text-[14px] lg:text-[16px] font-[300]">
              No use of special characters or spaces is allowed
            </p>
            {errors.username && (
              <p className="text-red-500 text-sm">{errors.username}</p>
            )}
          </div>

          {/* Email */}
          <div className="w-full">
            <Input
              id="Email Address"
              label="Email Address"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, email: e.target.value }))
              }
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          {/* Phone Number */}
          <fieldset className="flex flex-col font-normal w-full items-start gap-2">
            <label className="text-[20px] leading-[36px]">Phone Number</label>
            <PhoneInput
              placeholder="Enter phone number"
              defaultCountry="NG"
              international
              countryCallingCodeEditable={false}
              value={formData.phone}
              onChange={handlePhoneChange}
              className="w-full dropshadowinpute flex items-center bg-white dark:bg-primary border-2 dark:border-white border-primary rounded-[8px] h-[50px] text-[20px] placeholder:text-[18px] text-[#121212] dark:text-white focus:outline-none focus:border-[#0046FF] overflow-hidden"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone}</p>
            )}
          </fieldset>

          {/* Password */}
          <div className="relative flex flex-col w-full items-start gap-2">
            <div className="relative w-full">
              <Input
                id="password"
                type={type}
                value={formData.password}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, password: e.target.value }))
                }
                label="Password"
                placeholder="Password"
              />
              <Icon
                className="absolute right-2 top-14 cursor-pointer"
                icon={icon}
                size={28}
                onClick={handleToggle}
                aria-label="Toggle password visibility"
              />
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
            <PasswordRequirements password={formData.password} />
          </div>

          {/* Terms and Conditions */}
          <fieldset className="flex justify-start items-center gap-[16px] pb-2 w-full pl-[18px]">
            <input
              type="checkbox"
              id="check"
              className="h-[20px] w-[20px] bg-white text-white"
              checked={formData.agreeToTerms}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  agreeToTerms: e.target.checked,
                }))
              }
            />
            <label
              htmlFor="check"
              className="lg:text-[18px] text-[14px] font-[300] leading-[36px]"
            >
              I agree to all{" "}
              <span className="text-[#0046FF]">privacy policies</span> and{" "}
              <span className="text-[#0046FF]">terms of use</span>
            </label>
          </fieldset>
          {errors.terms && (
            <p className="text-red-500 text-sm pl-[18px]">{errors.terms}</p>
          )}

          {/* Submit Button */}
          <div className="w-full mt-4">
            <Button
              text={isLoading ? "Processing..." : "Sign Up"}
              disabled={isLoading}
            />
          </div>
        </form>

        {/* Divider */}
        <div className="flex justify-between items-center w-full gap-[32px] pt-[30px] pb-[30px]">
          <div className="bg-[#121212] dark:bg-white h-[1px] w-full"></div>
          <p className="font-quicksand text-[18px] font-[700]">or</p>
          <div className="bg-[#121212] dark:bg-white h-[1px] w-full"></div>
        </div>

        {/* Google Sign-In */}
        <button
          type="button"
          className="font-quicksand flex justify-center gap-6 items-center bg-white border-[2px] border-[#0046FF] mt-2 text-[18px] lg:text-[24px] font-[600] w-full rounded-[8px] px-[18px] py-[16px] text-[#0A0A0B] dark:bg-primary dark:text-white leading-[21px] hover:bg-primaryD transform hover:translate-y-[-2px] transition-transform"
        >
          <Image src="/Google.svg" alt="google" width={25} height={25} />
          <span>Continue with Google</span>
        </button>
      </div>
    </div>
  );
};

export default SignUp;
