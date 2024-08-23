import { Dots } from '@zendeskgarden/react-loaders'
import { PALETTE } from '@zendeskgarden/react-theming'
import { Button } from '@zendeskgarden/react-buttons'

export default function CustomButton({
                                       text,
                                       isLoading = false,
                                       isDisabled = false,
                                       isPrimary = false,
                                       isPill = false,
                                       isDanger = false,
                                       isStretched = false,
                                       size = 'medium',
                                       style,
                                       onClick
}) {
  return(
    <Button
      isPrimary={isPrimary}
      isPill={isPill}
      isDanger={isDanger}
      isStretched={isStretched}
      size={size}
      style={style}
      onClick={onClick}
      disabled={isLoading || isDisabled}
    >
      {isLoading ? (
        <Dots size={30} color={PALETTE.blue[600]} />
      ) : (
        <span>{ text }</span>
      )}
    </Button>
  )
}