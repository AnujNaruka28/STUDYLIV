"use client";
import { usePathname } from "next/navigation";
import NavBar from "../components/common/NavBar";
import Footer from "../components/common/Footer";
import Reviews from "../dashboard/reviews/page";

export default function LayoutShell({
  children,
}: Readonly<{
    children: React.ReactNode;
}>) {
  const path = usePathname();
  const segments = path.split("/").filter(Boolean);
  const isDashboard = segments[1] === "dashboard";
  const isTake = segments[3] === "take";

  return (
    <div className={`w-full relative ${(isDashboard) ? "h-screen overflow-hidden" : "overflow-x-hidden"} h-full`}>
        <NavBar/>
        {children}
        {
          (isTake || isDashboard) ? null : (
            <>
              <Reviews/>
              <Footer/>
            </>
          )
        }
    </div>
  )
}