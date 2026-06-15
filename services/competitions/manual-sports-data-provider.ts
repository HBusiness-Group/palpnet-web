import type { SportsDataProvider } from './sports-data-provider'
import type { Competition, Match, Team } from '@/types'

/**
 * ManualSportsDataProvider
 *
 * Implementação para entrada manual de dados via painel administrativo.
 * Usada na Fase 1 e como fallback — sem dependência de APIs externas.
 *
 * Na Fase 2, este provider lerá do Supabase.
 * Futuros providers (ex: FootballDataProvider) implementam a mesma interface.
 */
export class ManualSportsDataProvider implements SportsDataProvider {
  readonly name = 'manual'

  async getCompetitions(): Promise<Competition[]> {
    // Fase 2: implementar leitura do Supabase
    return []
  }

  async getCompetition(id: string): Promise<Competition | null> {
    // Fase 2: implementar leitura do Supabase
    return null
  }

  async getMatches(competitionId: string): Promise<Match[]> {
    // Fase 2: implementar leitura do Supabase
    return []
  }

  async getMatch(id: string): Promise<Match | null> {
    // Fase 2: implementar leitura do Supabase
    return null
  }

  async getUpcomingMatches(competitionId: string, limit = 10): Promise<Match[]> {
    const all = await this.getMatches(competitionId)
    return all
      .filter((m) => m.status === 'scheduled')
      .slice(0, limit)
  }

  async getLiveMatches(competitionId: string): Promise<Match[]> {
    const all = await this.getMatches(competitionId)
    return all.filter((m) => m.status === 'live')
  }

  async getFinishedMatches(competitionId: string): Promise<Match[]> {
    const all = await this.getMatches(competitionId)
    return all.filter((m) => m.status === 'finished')
  }

  async getTeams(competitionId: string): Promise<Team[]> {
    // Fase 2: implementar leitura do Supabase
    return []
  }

  async getTeam(id: string): Promise<Team | null> {
    // Fase 2: implementar leitura do Supabase
    return null
  }

  async getMatchResult(matchId: string): Promise<{ homeScore: number; awayScore: number } | null> {
    const match = await this.getMatch(matchId)
    if (!match || match.status !== 'finished') return null
    if (match.home_score === undefined || match.away_score === undefined) return null
    return { homeScore: match.home_score, awayScore: match.away_score }
  }
}

// Instância singleton para uso nas Server Actions e Route Handlers
export const manualProvider = new ManualSportsDataProvider()
