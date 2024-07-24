import Button from "@/components/button/button";
import Input from "@/components/Input/Input";
import { LoginLayout } from "@/components/layout";
import { Logo } from "@/components/Logo";
import Modal from "@/components/modal/modal";
import { constants } from "buffer";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import SignUpModal from "./signUpModal";
import ResetPasswordModal from "./resetPassword";
import { LoginFormInputs, logInSchema } from "@/lib/auth";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";



const LoginModal = () => {

  const [show, setShow] = useState(false)

  const [LoginShow, setLoginShow] = useState(true)

  const [resetPass, setResetPass] = useState(false)


  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormInputs>({
    resolver: zodResolver(logInSchema),
  });

  const onSubmit = (data: LoginFormInputs) => {
    console.log(data);
  };




  return (
    <>
      {resetPass

        ?
        <ResetPasswordModal />

        :
        <>
          {LoginShow ?
            <LoginLayout
              Title="Welcome Back"
            >
              <div className=" font-quicksand">
                <button
                  className="flex justify-center bg-[#EDF0F2] px-[18px] py-[16px] rounded-[100px] gap-2 w-full medium-text hover:bg-[#060419] hover:text-white"
                >
                  <Image
                    src="/Google.svg"
                    alt="google"
                    width={20}
                    height={20}
                  />
                  Log in with Google
                </button>

                <div className="flex items-center justify-center w-full py-4 ">
                  <div className=" h-[1px] bg-accent bg-opacity-50  w-full"></div>
                  <div className="text-[#1F323F] text-opacity-50 small-text">OR</div>
                  <div className="h-[1px] bg-accent bg-opacity-50  w-full"></div>
                </div>

                <form onSubmit={handleSubmit(onSubmit)}>

                  <div className="  grid gap-5 grid-cols-2">

                    <div className="col-span-2">
                      <Input
                        placeholder="Email Address"
                        className="col-span-2"
                        {...register('email')}
                      />
                      {errors.email && (
                        <p className="error">{errors.email.message}</p>
                      )}
                    </div>

                    <div className="relative col-span-2">
                      <Input
                        type={show ? "text" : "password"}
                        className=" col-span-2"
                        placeholder="Password"
                        {...register('password')}
                      />
                      <div
                        className="
                          absolute right-2 top-2 text-[12px]
                          text-[#1F323F] cursor-pointer bg-[#F6F7F9] px-2 py-1 text-opacity-50 rounded-[100px] 
                        "
                        onClick={() => setShow(!show)}
                      >
                        {show ? "Hide" : "Reveal"}
                      </div>
                      {errors.password && (
                        <p className="error">{errors.password.message}</p>
                      )}
                    </div>
                  </div>

                  <div
                    onClick={() => setResetPass(true)}
                    className="flex justify-end pt-2 pb-4 cursor-pointer small-text text-primary">
                    Forgot Password?
                  </div>

                  <Button text={"Log In"} disabled={Object.keys(errors).length > 0} />

                </form>

                <div
                  className="flex items-center gap-1 small-text pt-4 text-[#6E7680]"
                >
                  Don't have an account?  {" "}
                  <span
                    onClick={() => setLoginShow(false)}
                    className=" font-[500] text-primary text-[12px] cursor-pointer"
                  >
                    Sign up
                  </span>
                </div>

              </div>
            </LoginLayout>
            :
            <SignUpModal />
          }
        </>
      }
    </>
  );
};

export default LoginModal;