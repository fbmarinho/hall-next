import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Halliburton | Unofficial useful links",
	description: "This site provide quick access to most used stuff for halliburton employees. Join us for link request and more !",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Header />
				<main className="p-4">{children}</main>

				<Footer />
			</body>
		</html>
	);
}
