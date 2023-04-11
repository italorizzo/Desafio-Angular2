export type AddFavorite = AddFavorite2[]

export interface AddFavorite2 {
  id: number
  user_id: string
  image_id: string
  sub_id: string
  created_at: string
  image: Image
}

export interface Image {
  id: string
  url: string
}
