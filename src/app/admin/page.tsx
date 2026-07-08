import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function AdminPage() {
  return (
    <div className="flex flex-col h-full w-full gap-4 ">
      <span className="text-lg font-semibold text-white">User Profile</span>
      <form className="flex flex-col gap-3 overflow-hidden overflow-y-auto scrollbar-track-transparent scrollbar-thumb-brand">
        <div className="flex flex-col md:flex-row gap-2">
          <Input label="First name" type="text" />
          <Input label="Last name" type="text" />
        </div>

        <div className="flex flex-col md:flex-row gap-2">
          <Textarea className="resize-none h-[10rem]" label="Bio" />
        </div>

        {/* Action buttons */}
        <div className="flex justify-end w-full gap-2 mt-2">
          <Button variant="solid" type="submit">Save Profile</Button>
          <Button variant="outline" className="border-error text-error hover:bg-error/10" type="reset">Clear</Button>
        </div>
      </form>
    </div >
  );
}
