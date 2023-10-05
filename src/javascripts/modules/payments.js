import React from "react";
import { Grid, Row, Col } from "@zendeskgarden/react-grid";
import { Span, SM } from "@zendeskgarden/react-typography";
import { Title } from "@zendeskgarden/react-notifications";

export default function Payments({ payments }) {
  return (
    <div>
      <Title style={{ margin: "12px 0px", bold: true }}>PAYMENTS</Title>
      {payments.map((payment) => {
        return (
          <Grid style={{ margin: "12px 0px" }}>
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
          </Grid>
        );
      })}
    </div>
  );
}
