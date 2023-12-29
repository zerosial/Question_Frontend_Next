import { useState } from "react";
import { useSyncedEmailStore } from "store/useSyncedEmailStore";

export const EmailInputForm = () => {
  const { setEmail } = useSyncedEmailStore();
  const [input, setInput] = useState("");

  const onSubmitHandler = (e) => {
    if (!e.target.checkValidity()) {
      return;
    }
    e.preventDefault();
    setEmail(input);
  };

  return (
    <form className="flex gap-2 h-10" onSubmit={onSubmitHandler}>
      <input
        type="email"
        id="email"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2"
        placeholder="john.doe@company.com"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        required
      />
      <button
        type="submit"
        className="w-[72px] text-white bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2 text-center"
      >
        로그인
      </button>
    </form>
  );
};
