import { Search } from "lucide-react"

import { Label } from "@/components/ThirdParty/ShadCn/Label"
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarInput,
} from "@/components/ThirdParty/ShadCn/Sidebar"

export function SearchForm({ ...props }: React.ComponentProps<"form">) {
  return (
    <form {...props}>
      <SidebarGroup className="py-0">
        <SidebarGroupContent className="relative">
          <Label htmlFor="search" className="sr-only">
            Search
          </Label>
          <SidebarInput
            id="search"
            placeholder="Search the mandate..."
            className="pl-8"
          />
          <Search className="pointer-events-none absolute left-2 top-1/2 size-4 -translate-y-1/2 select-none opacity-50" />
        </SidebarGroupContent>
      </SidebarGroup>
    </form>
  )
}