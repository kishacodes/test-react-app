import scores from './score/data'

export function onRequestGet() {
    return Response.json(scores)
}