export default function sidebarHeader() {
  return (
    <div className="flex relative overflow-hidden h-full w-full">
      <div className="absolute z-10 w-[100px] h-[100px] bg-brand rotate-45 right-2 -bottom-8 border border-brand border-solid"></div>
      <div className="absolute z-10 w-[100px] h-[100px] bg-[#0a0a0a]/75 rotate-55 right-2 -bottom-8 border border-brand border-solid"></div>
      <div className="absolute z-10 w-[100px] h-[100px] bg-brand rotate-75 right-2 -bottom-8 border border-brand border-solid"></div>
      <div className="absolute z-10 w-[100px] h-[100px] bg-[#0a0a0a]/75 rotate-90 right-2 -bottom-8 border border-brand border-solid"></div>
    </div>
  )
}
