import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import Button from '@/components/button/button';
import Input from '@/components/Input/Input';
import { LoginLayout } from '@/components/layout';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import LoginModal from './loginModal';
import { SignUpFormData, signUpSchema } from '@/lib/auth';



const SignUpModal = () => {
  const [show, setShow] = useState(false);
  const [signUp, setSignUp] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = (data: SignUpFormData) => {
    console.log(data);
    console.log(errors.password)
  };

  const renderPasswordError = (message: any) => {
    return (
      <p className="error-message">
        {message.includes('At least') && <span className="error-length">At least </span>}
        {message.includes('8 characters') && <span className="error-red">8 characters </span>}
        {message.includes('including') && <span className="error-length">including</span>}
        {message.includes('uppercase ') && <span className="error-green">1 uppercase </span>}
        {message.includes('lowercase') && <span className="error-red">1 lowercase </span>}
        {message.includes('special character') && <span className="error-green">1 special character</span>}
      </p>
    );
  };


  return (
    <>
      {signUp ? (
        <LoginLayout Title="Create Account">
          <div className="font-quicksand">
            <button
              className="flex justify-center bg-[#EDF0F2] px-[18px] py-[16px] rounded-[100px] gap-2 w-full medium-text hover:bg-[#060419] hover:text-white"
            >
              <Image src="/Google.svg" alt="google" width={20} height={20} />
              Sign up with Google
            </button>

            <div className="flex items-center justify-center w-full py-4 ">
              <div className=" h-[1px] bg-accent bg-opacity-50 w-full"></div>
              <div className="text-[#1F323F] text-opacity-50 small-text">OR</div>
              <div className="h-[1px] bg-accent bg-opacity-50 w-full"></div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>

              <div className="pb-6 grid gap-5 grid-cols-2">

                <div>
                  <Input placeholder="Full Name" {...register('fullName')} />
                  {errors.fullName && (
                    <p className="error">{errors.fullName.message}</p>
                  )}
                </div>

                <div>
                  <Input placeholder="Email Address" {...register('email')} />
                  {errors.email && (
                    <p className="error">{errors.email.message}</p>
                  )}
                </div>

                <div className="relative col-span-2">
                  <Input type={show ? "text" : "password"} placeholder="Password" {...register('password')} />
                  <div
                    className="absolute right-2 top-2 text-[12px] text-[#1F323F] cursor-pointer bg-[#F6F7F9] px-2 py-1 text-opacity-50 rounded-[100px]"
                    onClick={() => setShow(!show)}
                  >
                    {show ? "Hide" : "Reveal"}
                  </div>
                  {errors.password && (
                    <p className="error">{errors.password && renderPasswordError(errors.password.message)}</p>
                  )}
                </div>

              </div>

              <Button text="Create Account" disabled={Object.keys(errors).length > 0} />

              <div className=" py-3 text-[#6E7680]">
                <div className="flex items-center gap-2">
                  <input type="checkbox" {...register('terms')} className="accent-primary" />
                  <div className="small-text">
                    I agree to the {" "}
                    <Link href="/" className="font-[500] text-[12px] underline">Terms & Service</Link>{" "}
                    and {" "}
                    <Link href="/" className="font-[500] text-[12px] underline">Privacy Policy</Link>
                  </div>
                </div>

                {errors.terms && (
                  <p className="error">{errors.terms.message}</p>
                )}
              </div>

            </form>

            <div className="flex items-center small-text text-[#6E7680]">
              Already have an account? {" "}
              <span
                onClick={() => setSignUp(false)}
                className="font-[500] text-primary text-[12px] cursor-pointer"
              >
                Log in
              </span>
            </div>
          </div>
        </LoginLayout>
      ) : (
        <LoginModal />
      )}
    </>
  );
};

export default SignUpModal;
