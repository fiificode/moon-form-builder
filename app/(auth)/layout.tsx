import Image from "next/image";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex mx-auto flex-col h-screen gap-2 items-center justify-center bg-black">
      <Image src={"/Logo-white.png"} alt="" width={100} height={120} />

      <div className="flex w-full items-center justify-center">{children}</div>
      {/* <div className="bg-black text-white flex h-screen flex-col items-center p-5 justify-center sm:justify-center sm:pt-0">
        <Image src={"/Logo-white.png"} alt="" width={100} height={120} />
        <div className="w-full max-w-lg mx-5">
          <div className="relative lg:-mb-px w-full bg-gradient-to-r from-transparent via-lime-200 to-transparent">
            <div className="mx-1 border dark:border-b-white/50 dark:border-t-white/50 border-b-white/20 sm:border-t-white/20 shadow-[20px_0_20px_20px] shadow-slate-500/10 dark:shadow-white/20 rounded-lg border-white/20 border-l-white/20 border-r-white/20 sm:shadow-sm lg:rounded-xl lg:shadow-none">
              <div className="flex flex-col items-center justify-center p-3">
                <Image src={"/Logo.png"} alt="" width={100} height={100} />

                <h3 className="text-xl font-semibold leading-6 tracking-tighter">
                  Login
                </h3>
                <p className="mt-1.5 text-sm font-medium text-white/50">
                  Welcome back, enter your credentials to continue.
                </p>
              </div>
              <div className="flex items-center h-fit justify-center p-0 lg:p-6">
                {children}
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
