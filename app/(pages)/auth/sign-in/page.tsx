"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
import { Icon } from "react-icons-kit";
import { useState } from "react";
import Input from "@/components/Input/Input";
import Button from "@/components/button/button";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../../redux/slices/authSlice";
import { AppDispatch } from "../../../../redux/store";

type FormErrors = {
  email: string;
  password: string;
};

const SignIn = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeOff);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({
    email: "",
    password: "",
  });

  const dispatch = useDispatch<AppDispatch>();

  const handleToggle = () => {
    if (type === "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeOff);
      setType("password");
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {
      email: "",
      password: "",
    };

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
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

    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);
    try {
      await dispatch(
        loginUser({
          email: formData.email,
          password: formData.password,
        })
      );

      // Handle success
      router.push("/"); // Redirect to dashboard
      setFormData({
        email: "",
        password: "",
      });
    } catch (error: any) {
      // Handle error
      if (error.response?.data?.message) {
        console.error("Login failed:", error.response.data.message);
      } else {
        console.error("Login failed:", error.message || error);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="lg:h-screen w-full flex relative z-0 dark:bg-[#121212]">
        <div className="hidden lg:flex w-1/2 relative">
          <Image
            src={"/onboard.svg"}
            className="w-full h-full object-cover"
            width={870}
            height={1000}
            alt=""
          />
          <div className="bg-[#11224059] w-[90%] xl:w-[80%] absolute bottom-0 right-0 py-[42px] pr-[45px] pl-[30px] rounded-tl-[15px] rounded-bl-[15px]">
            <p className="text-[20px] font-[400] font-quicksand leading-[24px] text-right text-white">
              Did you know that Canine Connect is for everyone? Whether
              you&apos;re a dog lover, dog seller or dog enthusiasts, we&apos;ve
              got something for you..
            </p>
          </div>
        </div>
        <div className="lg:w-1/2 w-full pt-[40px] pb-[72px] custom-scrollbar lg:overflow-y-auto px-4 sm:px-10 xl:px-[120px]">
          <h1 className="2xl:text-[60px] sm:text-[48px] text-[40px] leading-[96px] pb-[15px]">
            Welcome Back!
          </h1>
          <p className="font-quicksand text-[16px] lg:text-[20px] text-[#121212] dark:text-white font-normal mb-[48px]">
            Don&apos;t have an account?{" "}
            <span>
              <Link href={"/auth/sign-up"} className="underline font-[700]">
                Sign up
              </Link>
            </span>
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-start w-full gap-10 font-quicksand"
          >
            <div className="w-full">
              <Input
                id="Email"
                label="Email"
                placeholder="Enter your Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, email: e.target.value }))
                }
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>

            <fieldset className="relative flex flex-col w-full items-start gap-2">
              <div className="relative w-full">
                <Input
                  id="password"
                  type={type}
                  value={formData.password}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      password: e.target.value,
                    }))
                  }
                  label="Password"
                  placeholder="Password"
                />
                <Icon
                  className="absolute right-2 top-14 cursor-pointer"
                  icon={icon}
                  size={28}
                  onClick={handleToggle}
                />
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password}</p>
              )}
              <Link
                href={"/forgot-password"}
                className="text-right w-full text-[20px] font-[300] text-[#5683D2] underline"
              >
                Forgot Password?
              </Link>
            </fieldset>

            <fieldset className="flex justify-start items-center gap-[16px] w-full">
              <input type="checkbox" id="check" className="h-[20px] w-[20px]" />
              <label
                htmlFor="check"
                className="text-[20px] font-[300] leading-[36px]"
              >
                Remember me
              </label>
            </fieldset>

            <div>
              <Button
                text={isLoading ? "Signing in..." : "Sign in"}
                disabled={isLoading}
              />
            </div>
          </form>

          <div className="flex justify-between items-center w-full gap-[32px] pt-[50px] pb-[50px]">
            <div className="bg-[#121212] dark:bg-white h-[1px] w-full"></div>
            <p className="font-quicksand text-[18px] font-[700]">or</p>
            <div className="bg-[#121212] dark:bg-white h-[1px] w-full"></div>
          </div>

          <button className="font-quicksand flex justify-center gap-6 items-center bg-white border-[2px] border-[#0046FF] mt-2 text-[18px] lg:text-[24px] font-[600] w-full rounded-[8px] px-[18px] py-[16px] text-[#0A0A0B] dark:bg-primary dark:text-white leading-[21px] hover:bg-primaryD transform hover:translate-y-[-2px] transition-transform">
            <span>
              <Image src="/Google.svg" alt="google" width={25} height={25} />
            </span>
            <span>Continue with Google</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default SignIn;
