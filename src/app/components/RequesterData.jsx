import GeneralInfo from "./GeneralInfo.jsx";
import AppInfo from "./AppInfo.jsx";
import Subscription from "./Subscription.jsx";
import Actions from "./Actions.jsx";
import Upsells from './Upsells.jsx'

export default function RequesterData({ requester, onCancel }) {
  return (
    <div>
      <GeneralInfo
        userEmail={requester.user.email}
        userId={requester.user.id}
        userCountry={requester.user.country}
        userLanguage={requester.user.language}
      />

      <AppInfo
        app={requester.user.app}
        subscription={requester.user.subscription}
      />

      {requester.web_subscription && (
        <Subscription
          subscription={requester.web_subscription}
          title="Subscription"
          onCancel={onCancel}
        />
      )}

      {requester.web_upsell_subscription && (
        <Subscription
          subscription={requester.web_upsell_subscription}
          title="Upsell subscription"
          onCancel={onCancel}
        />
      )}

      {requester.upsells.length !== 0 && (
        <Upsells upsells={requester.upsells} />
      )}

      <Actions
        userEmail={requester.user.email}
        userId={requester.user.id}
      />
    </div>
  )
}