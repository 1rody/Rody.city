import NavLanding from "@/components/navigation/landing/navLanding";
import Footer from "@/components/footer/landing/footer"

export default function LandingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavLanding />
      <main>{children}</main>
      <Footer/>
    </>
  );
}