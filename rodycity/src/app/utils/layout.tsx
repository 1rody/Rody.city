import NavRedirect from "@/components/navigation/redirect/navRedirect";

export default function UtilsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <NavRedirect />
      <main className="">
        {children}
      </main>
    </div>
  );
}