export type PutCats = PutCats2[]

export interface PutCats2 {
  breeds: Breed[]
  id: string
  url: string
  width: number
  height: number
  imgIcon?: boolean
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
