import GeneralInfo from "./GeneralInfo.jsx";
import AppInfo from "./AppInfo.jsx";
import Subscription from "./Subscription.jsx";
import Payments from "./Payments.jsx";
import Actions from "./Actions.jsx";

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
          title="Web subscription"
          onCancel={onCancel}
        />
      )}

      {requester.web_upsell_subscription && (
        <Subscription
          subscription={requester.web_upsell_subscription}
          title="Web upsell subscription"
          onCancel={onCancel}
        />
      )}

      {requester.web_payments.length !== 0 && (
        <Payments payments={requester.web_payments} />
      )}

      <Actions userEmail={requester.user.email} />
    </div>
  )
}