import { useSyncedEmailStore } from "store/useSyncedEmailStore";

export const LogoutSection = () => {
  const { email, setEmail } = useSyncedEmailStore();
  return (
    <div className="flex gap-2">
      <div className="p-2">{email}</div>
      <button
        type="button"
        className="text-white bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto p-2 text-center"
        onClick={() => setEmail(null)}
      >
        로그아웃
      </button>
    </div>
  );
};
