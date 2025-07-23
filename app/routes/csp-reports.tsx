import type { Route } from './+types/csp-reports'

export const action = async ({ request }: Route.ActionArgs) => {
	console.log('CSP Violation Report Endpoint hit')

	return null
}
