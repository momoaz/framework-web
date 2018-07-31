import { Marker } from "../../atom";
import { MapPosition } from "../../atom/marker/marker";

export interface Gmap {
    anchor:string
    center:MapPosition
    zoom:number
    markers:Marker[]
}
