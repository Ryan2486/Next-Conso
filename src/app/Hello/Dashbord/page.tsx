"use client";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Doughnut, Bar } from "react-chartjs-2";
import {
	Chart as ChartJS,
	ArcElement,
	Tooltip,
	Legend,
	plugins,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Colors,
} from "chart.js";
ChartJS.register(
	ArcElement,
	Tooltip,
	Legend,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Colors
);
import Categorie from "@/Data/Type.json";
import Consommable from "@/Data/Consommable.json";
import Sortie from "@/Data/Sortie.json";
import { Item } from "@radix-ui/react-dropdown-menu";

export default function App() {
	const data = {
		labels: ["Mango", "Ananas", "Banana", "Slime", "Jason", "Tatum"],
		datasets: [
			{
				label: "# of Votes",
				data: [12, 19, 3, 5, 2, 3],
			},
		],
	};

	var co = Consommable.map(Item => Item.ID_consommable);
	co.forEach((Item)=>{
		
	})

	// Créez un objet pour stocker le nombre de consommables par catégorie
	const countByCategory: Record<number, number> = {};

	// Parcourez le tableau JSON pour compter les consommables par catégorie
	Consommable.forEach((item) => {
		if (countByCategory[item.ID_type]) {
			countByCategory[item.ID_type]++;
		} else {
			countByCategory[item.ID_type] = 1;
		}
	});

	var GG = {
		labels: Object.keys(countByCategory).map((key) => `Type ${key}`),
		datasets: [
			{
				label: "# of Votes",
				data: Object.values(countByCategory),
			},
		],
	};

	return (
		<div className="flex flex-col space-y-4 h-full ">
			<div className="flex justify-between h-2/5">
				<Card className=" w-2/3   mr-4">
					<CardHeader className="p-2 h-1/6">
						<CardTitle className=" text-base">Dernier Sortie</CardTitle>
					</CardHeader>
					<CardContent className="text-sm bg-slate-100 m-3 mb-0 rounded-md p-3">
						<div className="flex justify-between">
							<div className=" flex-col">
								<p>Border</p>
								<p className="font-light text-xs">TMDH</p>
							</div>
							<p>16 Litre</p>
						</div>
					</CardContent>
				</Card>
				<Card className=" w-1/3">
					<CardHeader className="p-2 h-1/6">
						<CardTitle className=" text-base">
							Catégorie de consommable
						</CardTitle>
					</CardHeader>
					<CardContent className=" h-4/5 p-0">
						<Doughnut
							data={GG}
							options={{
								plugins: {
									legend: {
										position: "right",
									},
								},
								maintainAspectRatio: false,
							}}
						/>
					</CardContent>
				</Card>
			</div>
			<div className="flex justify-between space-x-4 h-1/6">
				<Card className=" w-1/3">
					<CardHeader className="p-2 h-1/6">
						<CardTitle className=" text-base">
							Nbr de Consommable en manque
						</CardTitle>
					</CardHeader>
					<CardContent className="text-sm p-2 flex justify-center">
						<p>Card Content</p>
					</CardContent>
				</Card>
				<Card className=" w-1/3">
					<CardHeader className="p-2 h-1/6">
						<CardTitle className=" text-base">
							Nbr de Consommable Total
						</CardTitle>
					</CardHeader>
					<CardContent className="text-sm p-2 flex justify-center">
						<p>Card Content</p>
					</CardContent>
				</Card>
				<Card className=" w-1/3">
					<CardHeader className="p-2 h-1/6">
						<CardTitle className=" text-base">Nbr de Service</CardTitle>
					</CardHeader>
					<CardContent className="text-sm p-2 flex justify-center">
						<p>Card Content</p>
					</CardContent>
				</Card>
			</div>
			<div className="flex h-2/5">
				<Card className="w-full ">
					<CardHeader className="p-2 h-1/6">
						<CardTitle className=" text-base">
							Les consommables les plus sortie
						</CardTitle>
					</CardHeader>
					<CardContent className=" h-4/5 p-0">
						<Bar
							data={GG}
							options={{
								plugins: {
									legend: {
										display: false,
										position: "right",
									},
								},
								maintainAspectRatio: false,
							}}
						/>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
