export interface GeoLocation {
  lat: number;
  lng: number;
}

export interface RouteProps {
  title: string;
  startPosition: GeoLocation;
  endPosition: GeoLocation;
  points?: GeoLocation[];
}

export class Route {
  private title;
  private startPosition;
  private endPosition;
  private points;

  constructor(props: RouteProps) {
    const { title, startPosition, endPosition, points } = props;
    this.title = title;
    this.startPosition = startPosition;
    this.endPosition = endPosition;
    this.points = points || [];
  }

  updateTitle(value: string): void {
    // this method aims to give a reason for change, according to Clean Architecture, making it not an anemic entity
    // validations related to enterprise business rules occur in this method
    this.title = value;
  }

  updatePositions(startPositon: GeoLocation, endPosition: GeoLocation): void {
    // this method aims to give a reason for change, according to Clean Architecture, making it not an anemic entity
    // validations related to enterprise business rules occur in this method
    this.startPosition = startPositon;
    this.endPosition = endPosition;
  }

  updatePoints(points: GeoLocation[]): void {
    // this method aims to give a reason for change, according to Clean Architecture, making it not an anemic entity
    // validations related to enterprise business rules occur in this method
    this.points = points;
  }

  get points() {
    return this.points;
  }

  get startPosition() {
    return this.startPosition;
  }

  get endPosition() {
    return this.endPosition;
  }
}
