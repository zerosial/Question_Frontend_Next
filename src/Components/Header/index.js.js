import { useSyncedEmailStore } from "store/useSyncedEmailStore";
import { LogoutSection } from "./Components/LogoutSection";
import { EmailInputForm } from "./Components/EmailInputForm";

export const Header = () => {
  // 이메일 Store
  const { email } = useSyncedEmailStore();

  return (
    <div className="bg-blue-600 text-white p-4">
      <div className="flex justify-between items-center">
        <div className="text-white" variant="ghost">
          1:1문의하기
        </div>
        {email ? <LogoutSection /> : <EmailInputForm />}
      </div>
    </div>
  );
};
