"use strict";(self.webpackChunkrafflex_gamesite=self.webpackChunkrafflex_gamesite||[]).push([[5418],{55418:(t,a,n)=>{n.d(a,{TokenBoundSmartWalletConnector:()=>c});var e=n(2614),o=n(34042),s=n(80267);n(28379),n(84983),n(15452);class c extends o.SmartWalletConnector{constructor(t){super({...t,factoryAddress:t.registryAddress||s.a}),this.tbaConfig=t}defaultFactoryInfo(){return{createAccount:async t=>t.prepare("createAccount",[this.tbaConfig.accountImplementation,this.chainId,this.tbaConfig.tokenContract,this.tbaConfig.tokenId,this.tbaConfig.salt,e.YW("")]),getAccountAddress:async t=>await t.call("account",[this.tbaConfig.accountImplementation,this.chainId,this.tbaConfig.tokenContract,this.tbaConfig.tokenId,this.tbaConfig.salt])}}}}}]);
//# sourceMappingURL=5418.eaed6f74.chunk.js.map