 import  Sidebar  from "./SideBare_ex";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-row ">
      <div className="w-64 m-2 p-4 border border-black border-solid bg-gray-800 rounded-2xl ">
        <Sidebar/>
      </div>
      <div className="flex-grow p-4 border ">{children}</div>
    </div>
  );
}