export type Main = Dados[]

export interface Dados {
  breeds: Breed[]
  url: string
  width: number
  id: string
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

}
