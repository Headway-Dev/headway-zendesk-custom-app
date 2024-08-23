import { Spinner } from '@zendeskgarden/react-loaders'
import { Col, Row } from '@zendeskgarden/react-grid'
import { PALETTE } from '@zendeskgarden/react-theming'

export default function Loading() {
  return (
    <Row justifyContent="center">
      <Col textAlign="center" style={{ padding: '20px' }}>
        <Spinner size="80" color={PALETTE.blue[600]} />
      </Col>
    </Row>
  )
}