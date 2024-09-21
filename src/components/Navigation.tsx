import { Car } from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "./ThemeToggle";

const Navigation = () => {
	return (
		<nav className="max-w-7xl w-full mx-auto">
			<ul className="flex items-center justify-start w-full gap-4 px-4 md:px-8 lg:py-8 py-4">
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
				<li className="ml-auto">
					<ModeToggle />
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;
