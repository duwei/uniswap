import { Trans } from '@lingui/macro'
import { Percent } from '@uniswap/sdk-core'
import { OutlineCard } from 'components/Card'
import { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components/macro'
import { opacify } from 'theme/utils'

import { ThemedText } from '../../theme'
import { AutoColumn } from '../Column'
import { RowBetween, RowFixed } from '../Row'
import { MouseoverTooltip } from '../Tooltip'
import { formatPriceImpact } from './FormattedPriceImpact'

const StyledCard = styled(OutlineCard)`
  padding: 12px;
  border: 1px solid ${({ theme }) => opacify(24, theme.deprecated_error)};
`

interface PriceImpactWarningProps {
  priceImpact: Percent
}

export default function PriceImpactWarning({ priceImpact }: PriceImpactWarningProps) {
  const theme = useContext(ThemeContext)

  return (
    <StyledCard>
      <AutoColumn gap="8px">
        <MouseoverTooltip
          text={
            <Trans>
              A swap of this size has high price impact. The current liquidity in the pool means that there is a large
              difference between your input token amount and your received output amount
            </Trans>
          }
        >
          <RowBetween>
            <RowFixed>
              <ThemedText.DeprecatedSubHeader color={theme.deprecated_error}>
                <Trans>Price impact warning</Trans>
              </ThemedText.DeprecatedSubHeader>
            </RowFixed>
            <ThemedText.DeprecatedLabel textAlign="right" fontSize={14} color={theme.deprecated_error}>
              {formatPriceImpact(priceImpact)}
            </ThemedText.DeprecatedLabel>
          </RowBetween>
        </MouseoverTooltip>
      </AutoColumn>
    </StyledCard>
  )
}
