export interface Marker {
    label:string
    title:string
    detail:MarkerDetail
    position:MapPosition
}

export interface MarkerDetail {
    url:string
    price:number
    completeName:string
}

export interface MapPosition {
    lat:number
    lng:number
}