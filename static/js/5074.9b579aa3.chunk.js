"use strict";(self.webpackChunkrafflex_gamesite=self.webpackChunkrafflex_gamesite||[]).push([[5074],{69066:(t,i,s)=>{function n(t){return"string"===typeof t?Number.parseInt(t,"0x"===t.trim().substring(0,2)?16:10):"bigint"===typeof t?Number(t):t}s.d(i,{n:()=>n})},15074:(t,i,s)=>{s.d(i,{LocalWalletConnector:()=>g});var n=s(10019),e=s(69066),r=s(19532),a=s(81274),o=s(63112),c=s(38298),h=s(12220);s(28379);class d extends c.Signer{constructor(t){super(),this.signer=t,(0,h.defineReadOnly)(this,"provider",t.provider)}async getAddress(){return await this.signer.getAddress()}async signMessage(t){return await this.signer.signMessage(t)}async signTransaction(t){return await this.signer.signTransaction(t)}connect(t){return new d(this.signer.connect(t))}_signTypedData(t,i,s){return this.signer._signTypedData(t,i,s)}async sendTransaction(t){if(!this.provider)throw new Error("Provider not found");const i={...await(0,a.g)(this.provider),...t};return await this.signer.sendTransaction(i)}}class g extends r.C{constructor(t){super(),(0,n._)(this,"id","local_wallet"),(0,n._)(this,"name","Local Wallet"),(0,n._)(this,"shimDisconnectKey","localWallet.shimDisconnect"),(0,n._)(this,"onChainChanged",(t=>{const i=(0,e.n)(t),s=!this.options.chains.find((t=>t.chainId===i));this.emit("change",{chain:{id:i,unsupported:s}})})),this.options=t}async connect(t){t.chainId&&this.switchChain(t.chainId);const i=await this.getSigner();return await i.getAddress()}async disconnect(){this._provider=void 0,this._signer=void 0}async getAddress(){const t=await this.getSigner();if(!t)throw new Error("No signer found");return await t.getAddress()}async isConnected(){try{return!!await this.getAddress()}catch{return!1}}async getProvider(){return this._provider||(this._provider=(0,o.a$)(this.options.chain,{clientId:this.options.clientId,secretKey:this.options.secretKey})),this._provider}async getSigner(){if(!this._signer){const t=await this.getProvider();this._signer=p(this.options.ethersWallet,t)}return this._signer}async switchChain(t){const i=this.options.chains.find((i=>i.chainId===t));if(!i)throw new Error("Chain not found for chainId ".concat(t,", please add it to the chains property when creating this wallet"));this._provider=(0,o.a$)(i,{clientId:this.options.clientId,secretKey:this.options.secretKey}),this._signer=p(this.options.ethersWallet,this._provider),this.onChainChanged(t)}async setupListeners(){}updateChains(t){this.options.chains=t}}function p(t,i){let s=t;return i&&(s=t.connect(i)),new d(s)}}}]);
//# sourceMappingURL=5074.9b579aa3.chunk.js.map