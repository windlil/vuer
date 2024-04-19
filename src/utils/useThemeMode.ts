import { onMounted, ref } from 'vue'
import { useSessionStorage } from './useStorage'

/**
 * utils to handle theme mode
 * }
 */
export function useThemeMode() {
  const currentThemeMode = useSessionStorage.get('vuer-theme-mode')
  const currentMode = ref<'light' | 'dark'>()
  const HTML = ref<HTMLElement | null>(null)

  if (currentThemeMode) {
    currentMode.value = currentThemeMode
  }
  else {
    currentMode.value = 'dark'
  }

  const initHTML = () => {
    HTML.value = document.documentElement
    if (currentMode.value === 'dark') {
      HTML.value.classList.add('dark')
    }
  }

  const switchMode = () => {
    if (currentMode.value === 'light') {
      currentMode.value = 'dark'
      HTML.value?.classList.add('dark')
      useSessionStorage.set('vuer-theme-mode', 'dark')
    }
    else {
      currentMode.value = 'light'
      HTML.value?.classList.remove('dark')
      useSessionStorage.set('vuer-theme-mode', 'light')
    }
  }

  onMounted(() => {
    initHTML()
  })

  return {
    switchMode,
    currentMode,
  }
}
