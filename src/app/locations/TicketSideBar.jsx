import { useEffect, useState } from 'react'
import { useClient } from '../hooks/useClient'
import CustomError from '../components/CustomError.jsx'
import { getRequesterEmail } from '../api/zendesk.js'
import Loading from '../components/Loading.jsx'
import Requester from '../components/Requester.jsx'

const TicketSideBar = () => {
  const client = useClient()
  const [requesterEmail, setRequesterEmail] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  function fetchRequesterEmail(){
    getRequesterEmail(client).then((requesterEmail) => {
      setRequesterEmail(requesterEmail)
    }).catch(() => {
      setErrorMessage("Error while get requester email from Zendesk API")
    }).finally(() => {
        setIsLoading(false)
    })
  }

  useEffect(() => {
    fetchRequesterEmail()
    client.invoke('resize', { width: '100%', height: '1400px' })
  }, [client])

  return (
    <>
      {isLoading ? (
        <Loading />
      ): errorMessage ? (
        <CustomError errorMessage={errorMessage} />
      ) : (
        <Requester requesterEmail={requesterEmail} />
      )}
    </>
  )
}

export default TicketSideBar
