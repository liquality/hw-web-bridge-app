<template>
  <div class="container">
    <header>
      <HeadLogo />
    </header>
    <main>
      <h1>{{ statuses[status].title }}</h1>
      <div class="activiy-indicator">
        <LoadingIcon
          class="infinity-rotate"
          v-if="statuses[status].name === 'connecting'"
        />
        <LoadedIcon v-if="statuses[status].name === 'connected'" />
      </div>
      <div class="content">
        <LiqualityLogo />
        <LedgerUsb class="ledger-logo" />
      </div>
    </main>
    <footer>
      <button class="primary full" @click="createMessenger">
        {{ statuses[status].actionText }}
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
// import {
//   LedgerBridgeMessageHandler
// } from '@liquality/hw-web-bridge'
// import WebUSBTransport from '@ledgerhq/hw-transport-webusb'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare var chrome: any

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
    const statuses = {
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

    const createMessenger = () => {
      try {
        const id = window.location.hash.substring(1)
        console.log('id', id)
        const messenger = chrome.runtime.connect(id, { name: 'ledger-bridge' })
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        messenger.onDisconnect.addListener((port: any) => {
          status.value = statuses.error.name
          statusDetail.value = 'Disconnected from the Extension'
          console.error('onDisconnect', chrome.runtime.lastError?.message, port.name)
        })
      } catch (error) {
        console.error('error', error)
      }
    }

    const onConnect = async () => {
      // try {
      //   const transport = await WebUSBTransport.create()
      //   const messenger = createMessenger()
      //   const bridge = new LedgerBridgeMessageHandler(transport, messenger)
      //   messenger.onMessage.addListener(bridge.onMessage)
      // } catch (error) {
      //   status.value = statuses.error.name
      //   statusDetail.value = 'Cannot connect to the wallet'
      //   console.error(error)
      // }
    }

    const status = ref<string>(statuses.started.name)
    const statusDetail = ref<string>('')
    return {
      statuses,
      status,
      statusDetail,
      onConnect,
      createMessenger
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
