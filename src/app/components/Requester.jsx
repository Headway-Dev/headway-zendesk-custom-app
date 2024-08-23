import { useClient } from '../hooks/useClient.js'
import { useEffect, useState } from 'react'
import Loading from './Loading.jsx'
import CustomError from './CustomError.jsx'
import RequesterData from './RequesterData.jsx'
import { cancelSubscription, getRequesterByEmail } from '../api/enricher.js'

export default function Requester({ requesterEmail }) {
  const client = useClient()
  const [requester, setRequester] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  function fetchRequester() {
    setIsLoading(true)
    setErrorMessage(null)

    getRequesterByEmail(client, requesterEmail).then((requesterData) => {
      const user = { ...requesterData.user, email: requesterEmail }
      const requester = { ...requesterData, user }

      setRequester(requester)
    }).catch((error) => {
      setErrorMessage(error.responseJSON.detail || "Error fetching requester")
    }).finally(() => {
      setIsLoading(false)
    })
  }

  const SECOND = 1000;
  const REFRESH_DELAY_SECONDS = 2 * SECOND;

  function handleCancelSubscription(subscriptionId, immediate) {
      cancelSubscription(client, subscriptionId, immediate).then(() => {
        setTimeout(() => {
          fetchRequester()
        }, REFRESH_DELAY_SECONDS);
      }).catch((error) => {
        setErrorMessage(error.message);
      })
  }

  useEffect(() => {
    fetchRequester()
  }, [client, requesterEmail])

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : errorMessage ? (
        <CustomError errorMessage={errorMessage} />
      ) : (
        <RequesterData
          requester={requester}
          onCancel={handleCancelSubscription}
        />
      )}
    </>
  )
}