import { randomUUID } from 'crypto';

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
  public readonly id: string;
  public props: Required<RouteProps>;

  private constructor(props: RouteProps, id?: string) {
    this.id = id || randomUUID();
    if (!props) {
      // @ts-ignore used by ORM
      this.props = {};
      return;
    }
    this.props = { ...props, points: props?.points || [] };
  }

  static create(props: RouteProps, id?: string) {
    return new Route(props, id);
  }

  updateTitle(value: string): void {
    // this method aims to give a reason for change, according to Clean Architecture, making it not an anemic entity
    // validations related to enterprise business rules occur in this method
    this.props.title = value;
  }

  updatePositions(startPosition: GeoLocation, endPosition: GeoLocation): void {
    // this method aims to give a reason for change, according to Clean Architecture, making it not an anemic entity
    // validations related to enterprise business rules occur in this method
    this.props.startPosition = startPosition;
    this.props.endPosition = endPosition;
  }

  updatePoints(points: GeoLocation[]): void {
    // this method aims to give a reason for change, according to Clean Architecture, making it not an anemic entity
    // validations related to enterprise business rules occur in this method
    this.props.points = points;
  }

  get points() {
    return this.props.points;
  }

  get startPosition() {
    return this.props.startPosition;
  }

  get endPosition() {
    return this.props.endPosition;
  }

  get title() {
    return this.props.title;
  }

  set title(value: string) {
    this.props.title = value;
  }

  set startPosition(value: GeoLocation) {
    this.props.startPosition = value;
  }

  set endPosition(value: GeoLocation) {
    this.props.endPosition = value;
  }

  set points(value: GeoLocation[]) {
    this.props.points = value;
  }
  toJSON() {
    return { id: this.id, ...this.props };
  }
}
