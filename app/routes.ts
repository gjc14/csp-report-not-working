import { index, route, type RouteConfig } from '@react-router/dev/routes'

export default [
	index('routes/home.tsx'),
	route('/_/csp-reports', 'routes/csp-reports.tsx'),
] satisfies RouteConfig
