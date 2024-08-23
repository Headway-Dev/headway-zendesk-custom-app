export async function getRequesterByEmail(client, email) {
  const userDataRequestOptions = {
    url: `https://zendesk--integration-hlg6qksfkq-uc.a.run.app/api/zendesk/requester?requester_email=${email}`,
    method: "GET",
    cors: false,
    headers: {
      Authorization: "Bearer {{setting.JWT_TOKEN}}",
    },
    secure: true,
  };

  return await client.request(userDataRequestOptions)
}

export async function cancelSubscription(client, subscription_id, force) {
  const cancelSubscriptionOptions = {
    url: `https://zendesk--integration-hlg6qksfkq-uc.a.run.app/api/zendesk/cancel_solid_subscription`,
    method: "POST",
    cors: false,
    headers: {
      Authorization: "Bearer {{setting.JWT_TOKEN}}",
    },
    secure: true,
    contentType: "application/json",
    dataType: "json",
    data: {
      subscription_id,
      force,
    },
  };

  return await client.request(cancelSubscriptionOptions)
}