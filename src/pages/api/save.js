export async function POST({ request }) {
    const formData = await request.formData()
    const counter = parseInt(formData.get('counter'), 10)
    globalThis.counter = counter
    return new Response(counter.toString(), {
        status: 200,
        headers: {
            'Content-Type': 'text/html'
        }
    })
}