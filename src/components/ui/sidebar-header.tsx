export default function sidebarHeader() {
  return (
    <div className="flex relative overflow-hidden h-full w-full">
      <div className="absolute z-10 w-[100px] h-[100px] bg-brand rotate-[30deg] right-2 -bottom-8 border border-brand-darker border-solid"></div>
      <div className="absolute z-10 w-[100px] h-[100px] bg-brand-darker rotate-[45deg] right-2 -bottom-8 border border-brand border-solid"></div>
      <div className="absolute z-10 w-[100px] h-[100px] bg-brand rotate-[60deg] right-2 -bottom-8 border border-brand-darker border-solid "></div>
      <div className="absolute z-10 w-[100px] h-[100px] bg-brand-darker rotate-[75deg] right-2 -bottom-8 border border-brand border-solid"></div>
    </div>
  )
}
