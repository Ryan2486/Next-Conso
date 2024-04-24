
import Link from "next/link";
import { Button } from "@/components/ui/button"

function App() {
	return (
		<>
			<div className=" flex justify-center items-center h-screen ">
				<Button asChild><Link href="/Hello">Home</Link></Button>
			</div>
		</>
	);
}

export default App;
