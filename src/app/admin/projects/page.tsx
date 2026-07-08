"use client"

import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { get } from "@/lib/api"
import { useEffect, useState } from "react"

export default function ProjectsPage() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    (async () => {
      const data = await get("projects")
      setProjects(data)
    })()
  }, [])

  return (
    <div className="flex flex-col h-full w-full gap-4 overflow-hidden">
      <div className="flex justify-between items-center">
        <span className="text-lg font-semibold text-white">Community Users</span>
        <Badge variant="default" className="bg-brand/10 text-brand">
          {projects.length} Projects
        </Badge>
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-track-transparent scrollbar-thumb-brand pr-1 pb-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

          {projects.map((project, i) => (
            <Card
              key={i}
              className="flex flex-col gap-3 cursor-pointer justify-between bg-card-bg/60" >
              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between items-start">
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-white">
                      {project.name}
                    </span>

                    <span className="text-xs text-foreground-secondary">{project.contributors.join(", ")}</span>
                  </div>
                  <Badge
                    variant="outline"
                    className={
                      project.type.toLowerCase() === "web"
                        ? "border-brand/30 text-brand bg-brand/5"
                        : project.type.toLowerCase() === "mobile"
                          ? "border-purple-500/30 text-purple-400 bg-purple-500/5"
                          : project.type.toLowerCase().includes("security") ? "border-orange-500 text-orange-400 bg-orange-500/5" : "border-white/10 text-foreground-secondary"
                    }
                  >
                    {project.type}
                  </Badge>
                </div>
              </div>

              <div className="flex justify-between items-center pt-2 border-t border-card-border/40 text-[11px] text-foreground-secondary/70">
                <span>Joined</span>
                <span>{project.created_at} - {project.last_update}</span>
              </div>
            </Card>
          ))
          }
        </div>
      </div>
    </div >
  )
}
