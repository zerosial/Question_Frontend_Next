export const LoadingSkeletonBox = () => {
  return (
    <div className="w-full p-4">
      <div className="mx-auto w-full max-w-md rounded-2xl bg-white">
        <div className="className=flex w-full justify-between rounded-lg  bg-blue-100 px-4 py-4 my-4 text-left text-sm font-medium text-blue-900">
          <div className="animate-pulse flex space-x-4">
            <div className="flex-1 space-y-6 py-1">
              <div className="h-3 bg-slate-700 rounded"></div>
              <div className="space-y-4">
                <div className="h-3 bg-slate-700 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
