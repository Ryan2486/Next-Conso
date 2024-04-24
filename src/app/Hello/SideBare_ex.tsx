import {
	AlignJustify,
	Package,
	LineChart,
	PackagePlus,
	PackageMinus,
	Handshake,
	UserRound,
} from "lucide-react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export default function App() {
	return (
		<>
			<div className=" flex flex-col space-y-4 text-white">
				<div className="flex py-2 px-2 space-x-2 items-center">
					<AlignJustify />
					<p className=" text-sm">Gestion de Consommable</p>
				</div>
				<Separator />
				<div className="flex py-4 px-2 space-x-2 items-center rounded-lg hover:bg-white hover:text-black">
					<LineChart />
					<p>Tableau de Bord</p>
				</div>
				<Separator className=" opacity-60" />
				<div className="flex py-4 px-2 space-x-2 items-center rounded-lg hover:bg-white hover:text-black">
					<Package />
					<p>Consommable</p>
				</div>
				<div className="flex py-4 px-2 space-x-2 items-center rounded-lg hover:bg-white hover:text-black">
					<PackagePlus />
					<p>Entrée</p>
				</div>
				<div className="flex py-4 px-2 space-x-2 items-center rounded-lg hover:bg-white hover:text-black">
					<PackageMinus />
					<p>Sortie</p>
				</div>
				<Separator className=" opacity-60" />
				<div className="flex py-4 px-2 space-x-2 items-center rounded-lg hover:bg-white hover:text-black">
					<Handshake />
					<p>Service</p>
				</div>
				<div className="flex py-4 px-2 space-x-2 items-center rounded-lg hover:bg-white hover:text-black">
					<UserRound />
					<p>Utilisateur</p>
				</div>
			</div>
		</>
	);
}
