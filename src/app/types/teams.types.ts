export interface team {
  team_id: number;
  rating: number;
  wins: number;
  losses: number;
  last_match_time: number;
  name: string;
  tag: string;
  logo_url: string;
}

export interface match {
  match_id: number;
  radiant_win: boolean;
  radiant_score: number;
  dire_score: number;
  radiant: boolean;
  duration: number;
  start_time: number;
  leagueid: number;
  league_name: string;
  cluster: number;
  opposing_team_id: number;
  opposing_team_name: string;
  opposing_team_logo: string;
}
export interface player {
  account_id: number;
  name: string;
  games_played: number;
  wins: number;
  is_current_team_member: boolean;
}
export interface heroe {
  hero_id: number;
  localized_name: string;
  games_played: number;
  wins: number;
}
