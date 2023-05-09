import { Route, RouteProps } from './route.entity';

describe('Route Tests', () => {
  const mockRouteProps: RouteProps = {
    title: 'any title',
    startPosition: { lat: 1, lng: 1 },
    endPosition: { lat: 3, lng: 3 },
  };

  test('constructor', () => {
    const routeProps = mockRouteProps;
    let route = new Route(routeProps);
    expect(route.props).toEqual({ ...routeProps, points: [] });

    routeProps.points = [{ lat: 2, lng: 2 }];
    route = new Route(routeProps);
    expect(route.props).toEqual(routeProps);
  });

  test('updateTitle method', () => {
    const route = new Route(mockRouteProps);
    route.updateTitle('new title');
    expect(route.props).toEqual({ ...mockRouteProps, title: 'new title' });
  });

  test('updatePositions method', () => {
    const route = new Route(mockRouteProps);
    const newStartPosition = { lat: 2, lng: 2 };
    const newEndPosition = { lat: 4, lng: 4 };
    route.updatePositions(newStartPosition, newEndPosition);
    expect(route.startPosition).toEqual(newStartPosition);
    expect(route.endPosition).toEqual(newEndPosition);
  });

  test('updatePositions method', () => {
    const route = new Route(mockRouteProps);
    const newPoints = [
      { lat: 2, lng: 2 },
      { lat: 4, lng: 4 },
    ];
    route.updatePoints(newPoints);
    expect(route.points).toEqual(newPoints);
  });
});
