<template>
  <div class="container">
    <header>
      <HeadLogo />
    </header>
    <main>
      <h1>{{ status.title }}</h1>
      <div class="activiy-indicator">
        <LoadingIcon
          class="infinity-rotate"
          v-if="status.name === 'connecting'"
        />
        <LoadedIcon v-if="status.name === 'connected'" />
      </div>
      <div class="content">
        <LiqualityLogo />
        <LedgerUsb class="ledger-logo" />
      </div>
    </main>
    <footer>
      <button class="primary full">
        {{ status.actionText }}
      </button>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import HeadLogo from '@/assets/img/head_logo.svg?inline'
import LiqualityLogo from '@/assets/img/logo.svg?inline'
import LoadingIcon from '@/assets/img/loading_icon.svg?inline'
import LoadedIcon from '@/assets/img/loaded_icon.svg?inline'
import LedgerUsb from '@/assets/img/ledger_usb.svg?inline'
// import * as browser from 'webextension-polyfill'
// import { BridgeManager } from '@liquality/hw-web-bridge'

export default defineComponent({
  name: 'Ledger',
  components: {
    HeadLogo,
    LiqualityLogo,
    LoadingIcon,
    LoadedIcon,
    LedgerUsb
  },
  setup () {
    const statusList = {
      started: {
        name: 'started',
        title: 'Connect Ledger',
        actionText: 'Connect'
      },
      connecting: {
        name: 'connecting',
        title: 'Ledger Connecting',
        actionText: 'Connecting...'
      },
      connected: {
        name: 'connected',
        title: 'Ledger Connected',
        actionText: 'Connected!'
      },
      error: {
        name: 'error',
        title: 'Connect Ledger',
        actionText: 'Reconnect'
      }
    }

    // const portCreator = () => {
    //   const port = browser.runtime.connect('', { name: 'LEDGER-WEB-BRIDGE' })
    //   port.onDisconnect.addListener(() => {
    //     //
    //   })
    // }
    const status = ref(statusList.started)
    return {
      status
    }
  }
})
</script>
<style lang="scss" scoped>
.container {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
}

header {
  background-color: #302e78;
  display: flex;
  justify-content: center;
  padding: 1.875em;
  width: 100%;
}

main {
  width: 100%;
  max-width: 580px;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-wrap: nowrap;
  flex: 1;
  padding: 1.875em;

  h1 {
    font-size: 1.75em;
    font-weight: 400;
  }

  .logo {
    height: 3.159375em;
  }

  .activiy-indicator {
    position: absolute;
    display: flex;
    align-items: center;
    flex-direction: column;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 333;
  }

  .content {
    position: absolute;
    z-index: 999;
    display: flex;
    flex-direction: column;
    align-items: center;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    .ledger-logo {
      margin-top: 1.5em;
    }
  }
}

footer {
  width: 100%;
  max-width: 580px;
  display: flex;
  justify-content: center;
  padding: 1em 1.875em;

  button {
    margin: 1em;
    flex: 1;
  }
}
</style>
