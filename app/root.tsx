import type { Route } from './+types/root'
import {
	data,
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from 'react-router'

export const headers: Route.HeadersFunction = ({ loaderHeaders }) => {
	return loaderHeaders
}

export const loader = () => {
	return data(
		{},
		{
			headers: {
				'Content-Security-Policy': "default-src 'self'; report-to csp-endpoint",
				'Reporting-Endpoints': 'csp-endpoint="/_/csp-reports"',
			},
		},
	)
}

export function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<Meta />
				<Links />
			</head>
			<body>
				{children}
				<script>
					{`console.log('This is a test script to check CSP violations.');`}
				</script>
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	)
}

export default function App() {
	return <Outlet />
}
