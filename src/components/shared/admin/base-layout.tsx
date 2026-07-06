import { ArrowLeft } from "lucide-react";

export default function BaseAdminLayout(
  { children, toggleMenu }: { toggleMenu: (toggle: boolean) => void, children: React.ReactNode }
) {
  return (
    <div className="flex flex-col w-full h-full gap-3">
      <span
        onClick={() => { toggleMenu(true) }}
        className="flex text-brand-darker gap-2 md:hidden">
        <ArrowLeft className="text-sm" />
        <span>Back_to_menu</span>
      </span>
      {children}
    </div>
  )
}
