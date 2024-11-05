import { Span, SM } from "@zendeskgarden/react-typography";
import { Title } from "@zendeskgarden/react-notifications";
import { Grid, Row, Col } from "@zendeskgarden/react-grid";
import StatusSpan from "./StatusSpan.jsx";
import { Anchor } from '@zendeskgarden/react-buttons'
import CustomButton from './CustomButton.jsx'
import { useState } from 'react'

export default function Subscription({ subscription, title, onCancel }) {
  const [isCanceling, setIsCanceling] = useState(false);
  const [isImmediateCanceling, setIsImmediateCanceling] = useState(false);

  function handleCancel(subscriptionId, immediate) {
    setIsCanceling(true);

    onCancel(subscriptionId, immediate).finally(() => {
      setIsCanceling(false);
    });
  }

  function handleImmediateCancel(subscriptionId, immediate) {
    setIsImmediateCanceling(true);

    onCancel(subscriptionId, immediate).finally(() => {
      setIsImmediateCanceling(false);
    });
  }

  return (
    <div>
      <Title style={{ margin: "12px 0px", bold: true, textTransform: "uppercase" }}>{title}</Title>

      <Grid>
        <Row>
          <Col size={3}>
            <SM isBold={true}>ID:</SM>
          </Col>

          <Col xs>
            <SM>
              <Anchor
                  isExternal
                  href={`https://canary.solidgate.com/subscriptions/subscription/${subscription.id}`}
              >
                {subscription.id}
              </Anchor>
            </SM>
          </Col>
        </Row>

        <Row>
          <Col size={3}>
            <SM isBold={true}>Name:</SM>
          </Col>
          <Col xs>
            <SM>
              <Span hue="grey">{subscription.name}</Span>
            </SM>
          </Col>
        </Row>

        <Row>
          <Col size={3}>
            <SM isBold={true}>Price:</SM>
          </Col>

          <Col>
            <SM>
              <Span hue="grey">
                {subscription.amount} {subscription.currency} /{" "}
                {subscription.interval} {subscription.period}
              </Span>
            </SM>
          </Col>
        </Row>

        <Row>
          <Col size={3}>
            <SM isBold={true}>Status:</SM>
          </Col>

          <Col>
            <SM isBold={true}>
              <Span hue={subscription.sub_status === "ACTIVE" ? "green" : "red"}>
                {subscription.sub_status}
              </Span>
            </SM>
          </Col>
        </Row>

        <Row>
          <Col size={3}>
            <SM isBold={true}>Recurrent:</SM>
          </Col>

          <Col>
            <StatusSpan status={subscription.recurring_status} />
          </Col>
        </Row>

        <Row style={{ margin: "4px 0px" }}>
          {subscription.recurring_status && (
              <CustomButton
                  text="Cancel"
                  isLoading={isCanceling}
                  isDisabled={isCanceling || isImmediateCanceling}
                  isPill
                  isDanger
                  isStretched
                  size="small"
                  style={{ margin: "4px 0px" }}
                  onClick={() => handleCancel(subscription.id, false)}
              />
          )}

          {subscription.sub_status === "ACTIVE" && (
              <CustomButton
                  text="Cancel now"
                  isLoading={isImmediateCanceling}
                  isDisabled={isCanceling || isImmediateCanceling}
                  isPill
                  isDanger
                  isStretched
                  size="small"
                  style={{ margin: "4px 0px" }}
                  onClick={() => handleImmediateCancel(subscription.id, true)}
              />
          )}
        </Row>
      </Grid>
    </div>
  );
}
