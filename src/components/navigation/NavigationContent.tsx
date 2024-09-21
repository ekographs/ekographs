import { Car } from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "@/components/ThemeToggle";

interface NavigationContentProps {
	isNavSticky: boolean;
}

const NavigationContent = ({ isNavSticky = false }: NavigationContentProps) => {
	return (
		<nav className="w-full">
			<ul
				className={` ${
					isNavSticky && "bg-primary text-white"
				} fixed left-0 top-0 transition-colors duration-300 flex items-center justify-start w-full gap-4 px-4 py-4`}
			>
				<li>
					<Link
						href="/"
						className="flex gap-4 items-center justify-center px-4 py-2 bg-primary rounded-full text-white"
					>
						<Car /> Ekographs
					</Link>
				</li>
				<li>
					<Link href="/blog">Blog</Link>
				</li>
				<li className="ml-auto text-foreground">
					<ModeToggle />
				</li>
			</ul>
		</nav>
	);
};

export default NavigationContent;
