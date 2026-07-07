// INFO: Generalized type for unknown types
export type defaultParams = Record<string, unknown>


// INFO: Interfaces for models
export interface categoriesProperties {
  id: number
  title: string
  shortLabel: string
  description: string
  icon: string
  tools: string[]
  activities: string[]
}

export interface discussionProperties {
  id: number
  event_id: eventsProperties
  username: string
  created_at: string
  message: string

}

export interface eventsProperties {
  id?: number
  title: string,
  description: string,
  categories?: categoriesProperties[]
  created_at: string
  started: string
  end: string
  location: string,
  status: string,
  type: string,
  action: string,
  href: string,
}

export interface rolesProperties {
  id: string
  role: string
  permission: string[]
}

export interface usersProperties {
  id: string
  username: string
  first_name: string
  last_name: string
  bio: string
  created_at: string
  role: rolesProperties
}

export interface testimonialsProperties {
  id: number
  name: string,
  roles: rolesProperties
  quote: string,
  created_at: string,
}

