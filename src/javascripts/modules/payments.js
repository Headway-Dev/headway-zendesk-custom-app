import React from "react";
import { Grid, Row, Col } from "@zendeskgarden/react-grid";
import { Span, SM } from "@zendeskgarden/react-typography";
import { Title } from "@zendeskgarden/react-notifications";

export default function Payments({ payments }) {
  return (
    <div>
      <Title style={{ margin: "12px 0px", bold: true }}>PAYMENTS</Title>
      {[
        ...new Map(
          payments.reverse().map((item) => [item.order_id, item])
        ).values(),
      ].map((payment) => {
        return (
          <Grid style={{ margin: "12px 0px" }} key={payment.order_id}>
            <Row>
              <Col size={3}>
                <SM isBold={true}>Name:</SM>
              </Col>
              <Col xs>
                <SM>
                  <Span hue="grey">{payment.product_name}</Span>
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
                    {payment.order_amount} {payment.order_currency}
                  </Span>
                </SM>
              </Col>
            </Row>
            <Row>
              <Col size={3}>
                <SM isBold={true}>Status:</SM>
              </Col>
              <Col>
                <SM>
                  <Span hue="grey">{payment.order_status}</Span>
                </SM>
              </Col>
            </Row>
          </Grid>
        );
      })}
    </div>
  );
}
