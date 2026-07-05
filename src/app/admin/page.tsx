import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function AdminPage() {
  return (
    <div>
      <span>User Profile</span>
      <form className="flex flex-col h-full gap-2 overflow-hidden overflow-y-auto scrollbar-track-transparent scrollbar-thumb-brand">
        <div className="flex flex-col md:flex-row gap-2">
          <Input label="First name" type="text" />
          <Input label="Last name" type="text" />
        </div>

        <div className="flex flex-col md:flex-row gap-2">
          <Textarea className="resize-none h-[10rem]" label="Bio" required />
        </div>

        {/* Action buttons */}
        <div className="flex justify-end w-full gap-2">
          <Button variant="outline" type="submit">Create event</Button>
          <Button variant="solid" className="bg-error text-white hover:bg-error/75" type="submit">Clear</Button>
        </div>
      </form >

    </div >
  );
}
