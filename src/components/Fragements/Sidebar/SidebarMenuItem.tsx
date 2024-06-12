// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SidebarMenuItem = ({ icon, title, active }: any) => (
  <div
    className={`flex my-5 items-center gap-5 cursor-pointer ${
      active
        ? "text-blue-800 border-r-4 border-blue-800 font-semibold"
        : "text-gray-500"
    }`}
  >
    <div className="text-xl">{icon}</div>
    <div className="text-lg">{title}</div>
  </div>
);

export default SidebarMenuItem;
