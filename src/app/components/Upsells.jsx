import { Grid, Row, Col } from "@zendeskgarden/react-grid";
import { Span, SM } from "@zendeskgarden/react-typography";
import { Title } from "@zendeskgarden/react-notifications";

export default function Upsells({ upsells }) {
  return (
    <div>
      <Title style={{ margin: "12px 0px", bold: true, textTransform: "uppercase" }}>Upsells</Title>

      {upsells.map((upsell, index) => {
        return (
          <Grid style={{ margin: "12px 0px" }} key={index}>
            <Row>
              <Col size={3}>
                <SM isBold={true}>Name:</SM>
              </Col>
              <Col xs>
                <SM>
                  <Span hue="grey">{upsell.name}</Span>
                </SM>
              </Col>
            </Row>

            <Row>
              <Col size={3}>
                <SM isBold={true}>Provider:</SM>
              </Col>
              <Col xs>
                <SM>
                  <Span hue="grey">{upsell.provider}</Span>
                </SM>
              </Col>
            </Row>

            {upsell.amount !== 0.0 && upsell.currency !== "" &&
              <Row>
                <Col size={3}>
                  <SM isBold={true}>Price:</SM>
                </Col>
                <Col>
                  <SM>
                    <Span hue="grey">
                      {upsell.amount} {upsell.currency}
                    </Span>
                  </SM>
                </Col>
              </Row>
            }

            <Row>
              <Col size={3}>
                <SM isBold={true}>Status:</SM>
              </Col>
              <Col>
                <SM>
                  <Span hue="grey">{upsell.mode}</Span>
                </SM>
              </Col>
            </Row>
          </Grid>
        );
      })}
    </div>
  );
}
