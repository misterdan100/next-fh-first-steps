import { Navbar } from "@/components/navbar/Navbar";

export default function GeneralLayout({children}: {children: React.ReactNode}) {
  return (
    <>
      <main className="flex flex-col items-center p-24">
          <span className="text-lg">Layout for contact and pricing</span>
            {children}
      </main>
    </>
  )
}
