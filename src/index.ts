export default {
	async fetch(request): Promise<Response> {
		async function MethodNotAllowed(request) {
			return new Response(`Method ${request.method} not allowed.`, {
				status: 405,
				headers: {
					Allow: "GET",
				},
			});
		}
		// Only GET requests work with this proxy.
		if (request.method !== "GET") return MethodNotAllowed(request);
		return fetch(`https://wwdev-kxsb8b5o8-tayyabs-projects-57550584.vercel.app/`);
	},
} satisfies ExportedHandler;
