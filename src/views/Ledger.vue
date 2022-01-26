<template>
  <div class="container">
    <header>
      <HeadLogo />
    </header>
    <main>
      <h1>{{ statuses[status].title }}</h1>
      <div class="activiy-indicator">
        <LoadingIcon class="infinity-rotate" v-if="status === bridgeStatus.Connecting" />
        <LoadedIcon v-if="status === bridgeStatus.Connected" />
      </div>
      <div class="content">
        <LiqualityLogo />
        <LedgerUsb class="ledger-logo" />
      </div>
    </main>
    <footer>
      <button
        class="primary full"
        @click="tryConnect"
        :disabled="statuses[status].disableAction"
      >
        {{ statuses[status].actionText }}
      </button>
    </footer>
  </div>
</template>

<script lang="ts">
/* global chrome */
import { defineComponent } from 'vue'
import HeadLogo from '@/assets/img/head_logo.svg?inline'
import LiqualityLogo from '@/assets/img/logo.svg?inline'
import LoadingIcon from '@/assets/img/loading_icon.svg?inline'
import LoadedIcon from '@/assets/img/loaded_icon.svg?inline'
import LedgerUsb from '@/assets/img/ledger_usb.svg?inline'
import {
  createBridgePort,
  createLedgerTransport,
  MessageHandler
} from '../bridge'

let bridgePort: chrome.runtime.Port | null = null
let messageHandler: MessageHandler

enum BridgeStatus {
  Started = 'started',
  Connecting = 'connecting',
  Connected = 'connected',
  BridgeError = 'bridgeError',
  TransportError = 'transportError'
}
const statuses = {
  [BridgeStatus.Started]: {
    title: 'Connect Ledger',
    disableAction: false,
    actionText: 'Connect'
  },
  [BridgeStatus.Connecting]: {
    title: 'Ledger Connecting',
    disableAction: true,
    actionText: 'Connecting...'
  },
  [BridgeStatus.Connected]: {
    title: 'Ledger Connected',
    disableAction: true,
    actionText: 'Connected!'
  },
  [BridgeStatus.BridgeError]: {
    title: 'Not connected with the Wallet',
    disableAction: false,
    actionText: 'Try to reconnect'
  },
  [BridgeStatus.TransportError]: {
    title: 'Connect Ledger',
    disableAction: false,
    actionText: 'Reconnect'
  }
}

export default defineComponent({
  name: 'Ledger',
  components: {
    HeadLogo,
    LiqualityLogo,
    LoadingIcon,
    LoadedIcon,
    LedgerUsb
  },
  data: function () {
    return {
      status: 'started',
      portConnected: false,
      addPortListener: true,
      transportCreated: false
    }
  },
  computed: {
    statuses () {
      return statuses
    },
    bridgeStatus () {
      return BridgeStatus
    }
  },
  created () {
    messageHandler = new MessageHandler()
    this.createPort()
  },
  methods: {
    createPort () {
      const { extensionId } = this.$route.query as { extensionId: string }
      bridgePort = createBridgePort(extensionId, () => {
        bridgePort = null
        this.status = BridgeStatus.BridgeError
      })
      messageHandler.setPort(bridgePort)
    },
    async createTransport () {
      this.status = BridgeStatus.Connecting
      if (bridgePort) {
        try {
          const ledgerTransport = await createLedgerTransport(bridgePort, () => {
            this.status = BridgeStatus.TransportError
            ledgerTransport.close()
          })
          messageHandler.setTransport(ledgerTransport)
          messageHandler.startListener()
          this.status = BridgeStatus.Connected
        } catch (error) {
          console.error('On create transport', error)
          this.status = BridgeStatus.TransportError
        }
      } else {
        this.status = BridgeStatus.BridgeError
      }
    },
    tryConnect () {
      if (!bridgePort) {
        this.createPort()
      }
      this.createTransport()
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
  height: 100%;

  h1 {
    text-align: center;
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
    margin-top: 4em;
    z-index: 333;
  }

  .content {
    position: absolute;
    z-index: 999;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 7em;

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
