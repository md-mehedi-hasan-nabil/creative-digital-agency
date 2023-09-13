export default function Loading() {
  return (
    <div className="col-span-12 md:col-span-3 border border-red-200 shadow rounded-3xl p-4 max-w-sm w-full mx-auto flex flex-col justify-between">
      <div>
        <div className="rounded-lg bg-slate-200 w-full h-40"></div>
        <div className="animate-pulse flex space-x-4">
          <div className="flex-1 space-y-6 py-1">
            <div className="h-2 bg-slate-200 rounded"></div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                <div className="h-2 bg-slate-200 rounded col-span-1"></div>
              </div>
              <div className="h-2 bg-slate-200 rounded"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-lg bg-slate-200 w-full h-10"></div>
    </div>
  );
}
