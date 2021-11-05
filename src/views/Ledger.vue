<template>
  <div class="container">
    <header>
      <HeadLogo />
    </header>
    <main>
      <h1>{{ statuses[status].title }}</h1>
      <div class="activiy-indicator">
        <LoadingIcon class="infinity-rotate" v-if="status === 'connecting'" />
        <LoadedIcon v-if="status === 'connected'" />
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
import { defineComponent } from 'vue'
import HeadLogo from '@/assets/img/head_logo.svg?inline'
import LiqualityLogo from '@/assets/img/logo.svg?inline'
import LoadingIcon from '@/assets/img/loading_icon.svg?inline'
import LoadedIcon from '@/assets/img/loaded_icon.svg?inline'
import LedgerUsb from '@/assets/img/ledger_usb.svg?inline'
import {
  BridgeManager
} from '@liquality/hw-web-bridge'
import TransportWebUSB from '@ledgerhq/hw-transport-webusb'

let bridgeManager: BridgeManager

const statuses = {
  started: {
    name: 'started',
    title: 'Connect Ledger',
    disableAction: false,
    actionText: 'Connect'
  },
  connecting: {
    name: 'connecting',
    title: 'Ledger Connecting',
    disableAction: true,
    actionText: 'Connecting...'
  },
  connected: {
    name: 'connected',
    title: 'Ledger Connected',
    disableAction: true,
    actionText: 'Connected!'
  },
  bridgeError: {
    name: 'bridgeError',
    title: "Can't connect to the Wallet",
    disableAction: false,
    actionText: 'Try to reconnect'
  },
  transportError: {
    name: 'transportError',
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
      statusDetail: ''
    }
  },
  computed: {
    statuses () {
      return statuses
    }
  },
  created () {
    this.createPort()
  },
  methods: {
    createPort () {
      const { extensionId } = this.$route.query as { extensionId: string }
      bridgeManager = new BridgeManager(extensionId)
      bridgeManager.createPort(() => {
        this.status = statuses.bridgeError.name
        this.statusDetail = 'Disconnected from the Extension'
      })
    },
    async createTransport () {
      this.status = statuses.connecting.name
      this.statusDetail = ''
      let transport = null
      try {
        transport = await TransportWebUSB.create()
      } catch (error) {
        this.status = statuses.transportError.name
        this.statusDetail = 'Error connecting to usb device'
      }

      if (transport) {
        try {
          bridgeManager.tryCreateBridge(transport, () => {
            this.status = statuses.transportError.name
            this.statusDetail = 'Error connecting to usb device'
          })
          this.status = statuses.connected.name
          this.statusDetail = ''
        } catch (error) {
          this.status = statuses.bridgeError.name
          this.statusDetail = 'Disconnected from the Extension'
        }
      }
    },
    async tryConnect () {
      if (!bridgeManager || !bridgeManager.connected) {
        this.createPort()
      }
      await this.createTransport()
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
