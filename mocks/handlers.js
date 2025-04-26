import {http, HttpResponse} from "msw";

// Array of interceptors
export const handlers = [
	
	http.get("/health", () => {
		return HttpResponse.json({status: "OK"})
	})

];