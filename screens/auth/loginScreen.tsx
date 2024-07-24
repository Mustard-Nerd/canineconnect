
import Modal from "@/components/modal/modal";
import { useState } from "react";
import SignUpModal from "./signUpModal";
import LoginModal from "./loginModal";
import OnboardingModal from "./onboarding";



interface LoginScreenProps {
  isOpenProp: boolean;
  onCloseModal: () => void;
}

const content = () => {


  const [LoginShow, setLoginShow] = useState(true)



  return (
    <>
      {LoginShow ?
        <LoginModal />
        :
        <SignUpModal />
      }
    </>
  );
};





const LoginScreen: React.FC<LoginScreenProps> = ({ isOpenProp, onCloseModal }) => {
  return (
    <div>
      <Modal
        isOpenProp={isOpenProp}
        onCloseModal={onCloseModal}
        renderContent={content()}
      />
    </div>
  )
};

export default LoginScreen;