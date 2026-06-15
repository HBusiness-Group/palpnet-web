// Tipos globais do PalpNet — expandidos nas próximas fases

export type UserRole = 'admin' | 'user' | 'sponsor'

export type GroupRole = 'owner' | 'member'

export type GroupVisibility = 'public' | 'private'

export type MatchStatus = 'scheduled' | 'live' | 'finished' | 'cancelled'

export type PredictionStatus = 'open' | 'closed' | 'scored'

export interface User {
  id: string
  email: string
  full_name: string
  avatar_url?: string
  role: UserRole
  created_at: string
}

export interface Competition {
  id: string
  name: string
  slug: string
  logo_url?: string
  country?: string
  season: string
  status: 'upcoming' | 'active' | 'finished'
  starts_at: string
  ends_at?: string
}

export interface Team {
  id: string
  name: string
  slug: string
  flag_url?: string
  country_code: string
  competition_id: string
}

export interface Match {
  id: string
  competition_id: string
  home_team: Team
  away_team: Team
  match_date: string
  status: MatchStatus
  home_score?: number
  away_score?: number
  round?: string
  venue?: string
}

export interface Group {
  id: string
  name: string
  slug: string
  description?: string
  avatar_url?: string
  visibility: GroupVisibility
  competition_id: string
  owner_id: string
  members_count: number
  created_at: string
}

export interface Prediction {
  id: string
  user_id: string
  match_id: string
  group_id: string
  home_score: number
  away_score: number
  points?: number
  status: PredictionStatus
  created_at: string
}

export interface RankingEntry {
  position: number
  user: Pick<User, 'id' | 'full_name' | 'avatar_url'>
  total_points: number
  exact_scores: number
  correct_results: number
}

export interface NavItem {
  label: string
  href: string
  external?: boolean
  icon?: string
}
