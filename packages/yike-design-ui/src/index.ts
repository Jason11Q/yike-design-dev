import type { Component, App } from 'vue'

import YkButton from './components/button/Button.vue'
import YkButtonGroup from './components/button/BtGroup.vue'
import YkTheme from './components/theme/Theme.vue'
import YkIcon from './components/icon/Icon.vue'
import YkAvatar from './components/avatar/Avatar.vue'
import YkAvatarGroup from './components/avatar/AvatarGroup.vue'
import YkSpace from './components/space/Space.vue'
import YkText from './components/typography/Text.vue'
import YkTitle from './components/typography/Title.vue'
import YkParagraph from './components/typography/Paragraph.vue'
import YkContainer from './components/container/Container.vue'
import YkTable from './components/table/Table.vue'

const components: {
  [propName: string]: Component
} = {
  YkButton,
  YkButtonGroup,
  YkTheme,
  YkIcon,
  YkAvatar,
  YkAvatarGroup,
  YkSpace,
  YkText,
  YkTitle,
  YkParagraph,
  YkContainer,
  YkTable
}

export {
  YkButton,
  YkButtonGroup,
  YkTheme,
  YkIcon,
  YkAvatar,
  YkAvatarGroup,
  YkSpace,
  YkText,
  YkTitle,
  YkParagraph,
  YkContainer,
  YkTable
}

// 全局注册
export default {
  install: (app: App) => {
    for (const c in components) {
      app.component(c, components[c])
    }
  }
}

// 局部注册
for (const c in components) {
  const component = Object.assign(components[c], { install: {} })
  component.install = (app: App) => {
    app.component(c, component)
  }
}