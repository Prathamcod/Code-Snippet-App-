import Navbar from "@/src/components/layout/Navbar"
import "../globals.css"

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <>
            <Navbar />
            {children}
        </>
    )
}
