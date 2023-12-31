import { defineSlotRecipe } from '@pandacss/dev'
import { tooltipAnatomy } from '@ark-ui/anatomy'

export const tooltip = defineSlotRecipe({
  className: 'tooltip',
  slots: tooltipAnatomy.keys(),
  jsx: ['Tooltip', /Tooltip\.+/],
  base: {
    content: {
      background: 'text.default',
      borderRadius: 'l2',
      boxShadow: 'sm',
      color: 'bg.default',
      fontWeight: 'semibold',
      px: '3',
      py: '2',
      textStyle: 'xs',
      maxWidth: '2xs',
      _open: {
        animation: 'fadeIn 0.25s ease-out',
      },
      _closed: {
        animation: 'fadeOut 0.2s ease-out',
      },
    },
  },
})
