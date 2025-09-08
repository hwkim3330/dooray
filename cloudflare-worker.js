// Cloudflare Worker for Dooray API Proxy
// This worker handles CORS and adds Authorization headers

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  // CORS headers
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Max-Age': '86400',
  }

  // Handle preflight requests
  if (request.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    // Parse URL to get the API endpoint
    const url = new URL(request.url)
    const token = url.searchParams.get('token')
    
    // Remove token from URL params
    url.searchParams.delete('token')
    
    // Build the Dooray API URL
    const apiPath = url.pathname.replace('/api/', '')
    const doorayUrl = `https://api.dooray.com/${apiPath}${url.search}`
    
    // Make request to Dooray API with Authorization header
    const apiResponse = await fetch(doorayUrl, {
      method: request.method,
      headers: {
        'Authorization': `dooray-api ${token}`,
        'Content-Type': 'application/json',
      },
    })

    // Get the response body
    const responseBody = await apiResponse.text()

    // Return the response with CORS headers
    return new Response(responseBody, {
      status: apiResponse.status,
      statusText: apiResponse.statusText,
      headers: {
        ...corsHeaders,
        'Content-Type': 'application/json',
      }
    })
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: {
        ...corsHeaders,
        'Content-Type': 'application/json',
      }
    })
  }
}