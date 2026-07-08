"use client"

import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { rolesProperties } from "@/interfaces"
import { get } from "@/lib/api"
import { ArrowRight } from "lucide-react"
import { use, useState } from "react"

const permissionApi = get("users/roles")

export default function RolesPermissions() {
  const roles = use(permissionApi) as rolesProperties[]

  const [modal, setModal] = useState<rolesProperties | null>(null)

  return (
    <div className="flex flex-col h-full w-full gap-4 overflow-hidden">
      <div className="flex justify-between items-center">
        <span className="text-lg font-semibold text-white">Roles and Permissions</span>
        <Badge variant="default" className="bg-brand/10 text-brand">
          {roles.length} Roles
        </Badge>
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-track-transparent scrollbar-thumb-brand pr-1 pb-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {
            roles.length > 0 ?
              roles.map((role: rolesProperties) => {
                return (
                  <Card className="flex flex-col w-full">
                    <span>{role.role}</span>
                    <span>{role.permissions.join(", ")}</span>
                    <span className="flex gap-2 text-brand-darker" onClick={() => { setModal(role) }}>Modify <ArrowRight className="text-xs" /> </span>
                  </Card>
                )
              })
              : null
          }
        </div>
      </div>
      {modal === null ? null :
        <div className="fixed z-50 left-0 right-0 top-0 bottom-0 bg-background/50 backdrop-blur-md">
          <span>Modal</span>
        </div>
      }
    </div>
  )
}
