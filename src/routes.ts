import todo from 'Src/routes/todo';

export interface routeType {
    component: any,
    path: string,
    exact: boolean
}

let routes: Array<routeType> = [
    ...todo
];

// Convert nested routes to simple routes
function convertNestedRoutes(routes: Array<any>): any {
    try {
        if (routes.length) {
            routes.forEach(function (route) {
                if (route.resources && route.resources.length) {
                    routes = routes.concat(convertNestedRoutes(route.resources));
                }
            });
        }

        return routes;
    } catch (e) {
        // Error
    }
}

routes = convertNestedRoutes(routes);

export default routes;
