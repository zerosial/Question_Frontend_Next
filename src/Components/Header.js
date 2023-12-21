import { Bars4Icon } from "@heroicons/react/20/solid";

export const Header = () => {
  return (
    <div className="bg-blue-600 text-white p-4">
      <div className="flex justify-between items-center">
        <div className="text-white" variant="ghost">
          1:1문의하기
        </div>
        <Bars4Icon className="text-white w-5 h-5" />
      </div>
    </div>
  );
};
