import React from "react";
import { Span } from "@zendeskgarden/react-typography";
import { Title } from "@zendeskgarden/react-notifications";
import { Grid, Row, Col } from "@zendeskgarden/react-grid";
import { Anchor, Button } from '@zendeskgarden/react-buttons'
import { SM } from "@zendeskgarden/react-typography";
import StatusSpan from "./status_span";

export default function Subscription({ subscription, title, onCancel }) {
  return (
    <div>
      <Title style={{ margin: "12px 0px", bold: true }}>{title}</Title>

      <Grid>
        <Row>
          <Col size={3}>
            <SM isBold={true}>ID:</SM>
          </Col>
          <Col xs>
            <SM>
              <Anchor
                isExternal
                href={`https://hub.solidgate.com/subscription-details/${subscription.id}`}
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
              <Span hue={subscription.sub_status == "ACTIVE" ? "green" : "red"}>
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
            <Button
              isPill
              isDanger
              isStretched
              size="small"
              style={{ margin: "4px 0px" }}
              onClick={() => {
                onCancel(subscription.id, false);
              }}
            >
              Cancel
            </Button>
          )}

          {subscription.sub_status == "ACTIVE" && (
            <Button
              isPill
              isDanger
              isStretched
              size="small"
              style={{ margin: "4px 0px" }}
              onClick={() => {
                onCancel(subscription.id, true);
              }}
            >
              Cancel now
            </Button>
          )}
        </Row>
      </Grid>
    </div>
  );
}
