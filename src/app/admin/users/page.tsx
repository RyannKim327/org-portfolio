"use client"

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { use, useState } from "react";
import { defaultParams, usersProperties } from "@/interfaces";
import { X } from "lucide-react";
import { get } from "@/lib/api";

const usersApi = get("users")

export default function UsersPage() {
  const [modalId, setModalId] = useState<usersProperties | null>(null)
  const users = use(usersApi) as usersProperties[]

  return (
    <div className="flex flex-col h-full w-full gap-4 overflow-hidden">
      <div className="flex justify-between items-center">
        <span className="text-lg font-semibold text-white">Community Users</span>
        <Badge variant="default" className="bg-brand/10 text-brand">
          {users.length} Registered
        </Badge>
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-track-transparent scrollbar-thumb-brand pr-1 pb-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {users.map((user) => (
            <Card
              onClick={() => {
                setModalId(user)
              }}
              key={user.id}
              className="flex flex-col gap-3 cursor-pointer justify-between bg-card-bg/60">
              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between items-start">
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-white">
                      {user.first_name} {user.last_name}
                    </span>
                    <span className="text-xs text-foreground-secondary">@{user.username}</span>
                  </div>
                  <Badge
                    variant="outline"
                    className={
                      user.roles.role.startsWith("Admin")
                        ? "border-brand/30 text-brand bg-brand/5"
                        : user.roles.role.startsWith("Mod")
                          ? "border-purple-500/30 text-purple-400 bg-purple-500/5"
                          : user.roles.role.includes("Security") ? "border-orange-500 text-orange-400 bg-orange-500/5" : "border-white/10 text-foreground-secondary"
                    }
                  >
                    {user.roles.role}
                  </Badge>
                </div>
              </div>

              <div className="flex justify-between items-center pt-2 border-t border-card-border/40 text-[11px] text-foreground-secondary/70">
                <span>Joined</span>
                <span>{user.created_at}</span>
              </div>
            </Card>
          ))}
        </div>
      </div>
      {
        modalId !== null ?
          <div
            onClick={() => {
              setModalId(null)
            }}
            className="flex flex-col items-center justify-center w-full h-full fixed left-0 right-0 top-0 bottom-0 bg-background/5 backdrop-blur-sm z-100">
            <Card className="flex flex-col min-w-1/2">
              <div
                className="flex justify-between border-b-2 border-brand border-b-solid mb-2">
                <span
                  className="text-xl">User Profile Information:</span>
                <X className="cursor-pointer" onClick={() => { setModalId(null) }} />
              </div>
              <span>Username: {modalId.username}</span>
              <span>Full name: {modalId.first_name ?? ""} {modalId.last_name ?? ""}</span>
              <span>Role: {modalId.roles.role}</span>
            </Card>

          </div>
          : null
      }
    </div>
  );
}
