"use client"

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { defaultParams } from "@/interfaces";
import { X } from "lucide-react";

const users = [
  {
    id: "a1b2c3d4-e5f6-7a8b-9c0d-1e2f3a4b5c6d",
    username: "dev_architect",
    first_name: "John",
    last_name: "Doe",
    created_at: "Jul 01, 2026",
    role: "Admin",
  },
  {
    id: "b2c3d4e5-f6a7-8b9c-0d1e-2f3a4b5c6d7e",
    username: "design_guru",
    first_name: "Sarah",
    last_name: "Smith",
    created_at: "Jul 02, 2026",
    role: "Moderator",
  },
  {
    id: "c3d4e5f6-a7b8-9c0d-1e2f-3a4b5c6d7e8f",
    username: "code_ninja",
    first_name: "Alex",
    last_name: "Jones",
    created_at: "Jul 03, 2026",
    role: "Contributor",
  },
  {
    id: "d4e5f6a7-b8c9-0d1e-2f3a-4b5c6d7e8f9a",
    username: "cyber_sentinel",
    first_name: "Elena",
    last_name: "Rostova",
    created_at: "Jul 04, 2026",
    role: "Security Specialist",
  },
  {
    id: "e5f6a7b8-c9d0-1e2f-3a4b-5c6d7e8f9a0b",
    username: "outsider_one",
    first_name: "Mike",
    last_name: "Brown",
    created_at: "Jul 05, 2026",
    role: "Outsider",
  },
];

export default function UsersPage() {
  const [modalId, setModalId] = useState<defaultParams | null>(null)

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
                      user.role === "Admin"
                        ? "border-brand/30 text-brand bg-brand/5"
                        : user.role === "Moderator"
                          ? "border-purple-500/30 text-purple-400 bg-purple-500/5"
                          : "border-white/10 text-foreground-secondary"
                    }
                  >
                    {user.role}
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
              <span>Role: {modalId.role}</span>
            </Card>

          </div>
          : null
      }
    </div>
  );
}
