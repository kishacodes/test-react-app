import scores from './data'

export function onRequestGet(context) {
   const id = context.params.id
   
   if (!id) {
    return new Response('Not found', {status: 404})
   } 

   const score = scores.find(score => score.id === Number(id))

   if (!score) {
    return new Response('Not found', {status: 404})
   } 

   return Response.json(score)
} 