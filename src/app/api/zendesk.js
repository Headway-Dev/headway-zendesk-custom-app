export async function getRequesterEmail(client) {
  const requesterResponse = await client.get('ticket.requester')
  const requester = requesterResponse["ticket.requester"]

  return requester.email
}