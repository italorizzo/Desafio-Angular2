export type PutCats = PutCats2[]

export interface PutCats2 {
  breeds: Breed[]
  id: string
  url: string
  width: number
  height: number
}

export interface Breed {
  name: string
  vetstreet_url: string
  vcahospitals_url: string
  temperament: string
  origin: string
  country_codes: string
  description: string
  life_span: string
  alt_names: string
  adaptability: number
  affection_level: number
  child_friendly: number
  dog_friendly: number
  energy_level: number
  grooming: number
  health_issues: number
  intelligence: number
  shedding_level: number
  social_needs: number
  stranger_friendly: number
}
