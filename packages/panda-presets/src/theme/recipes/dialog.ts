import { defineSlotRecipe } from '@pandacss/dev'
import { dialogAnatomy } from '@ark-ui/anatomy'

export const dialog = defineSlotRecipe({
  className: 'dialog',
  slots: dialogAnatomy.keys(),
  jsx: ['Dialog', /Dialog\.+/],
  base: {
    backdrop: {
      backdropFilter: 'blur(4px)',
      background: {
        base: 'rgba(250, 250, 250, 0.8)',
        _dark: 'rgba(10, 10, 10, 0.8)',
      },
      inset: '0',
      position: 'fixed',
      zIndex: 'overlay',
      _open: {
        animation: 'backdrop-in',
      },
      _closed: {
        animation: 'backdrop-out',
      },
    },
    container: {
      alignItems: 'center',
      display: 'flex',
      inset: '0',
      justifyContent: 'center',
      position: 'fixed',
      zIndex: 'modal',
    },
    content: {
      background: 'bg.default',
      borderRadius: 'l3',
      borderWidth: '1px',
      boxShadow: 'lg',
      minW: 'sm',
      position: 'relative',
      _open: {
        animation: 'dialog-in',
      },
      _closed: {
        animation: 'dialog-out',
      },
    },
    title: {
      fontWeight: 'semibold',
      textStyle: 'lg',
    },
    description: {
      color: 'text.muted',
      textStyle: 'sm',
    },
  },
})
