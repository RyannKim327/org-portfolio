// INFO: Generalized type for unknown types
export type defaultParams = Record<string, unknown>


// INFO: Interfaces for models
export interface categoriesProperties extends defaultParams {
  id: number
  title: string
  shortLabel: string
  description: string
  icon: string
  tools: string[]
  activities: string[]
}

export interface discussionProperties extends defaultParams {
  id: number
  event_id: eventsProperties
  username: string
  created_at: string
  message: string

}

export interface eventsProperties extends defaultParams {
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

export interface projectsProperties extends defaultParams {
  name: string
  type: string
  contributors: string[]
  created_at: string
  last_update: string
}

export interface rolesProperties extends defaultParams {
  id: string
  role: string
  permissions: string[]
}

export interface usersProperties extends defaultParams {
  id: string
  username: string
  first_name: string
  last_name: string
  bio: string
  created_at: string
  role: rolesProperties
}

export interface testimonialsProperties extends defaultParams {
  id: number
  name: string,
  roles: rolesProperties
  quote: string,
  created_at: string,
}

