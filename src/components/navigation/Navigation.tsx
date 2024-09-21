"use client";

import { useEffect, useState } from "react";
import NavigationContent from "@/components/navigation/NavigationContent";

const Navigation = () => {
	const [isNavSticky, setIsNavSticky] = useState(false);

	const handleScroll = () => {
		if (window.scrollY > 50) {
			setIsNavSticky(true);
		} else {
			setIsNavSticky(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return <NavigationContent isNavSticky={isNavSticky} />;
};

export default Navigation;
