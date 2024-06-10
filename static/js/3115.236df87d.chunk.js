"use strict";(self.webpackChunkrafflex_gamesite=self.webpackChunkrafflex_gamesite||[]).push([[3115],{78527:(t,r,a)=>{a.d(r,{C:()=>e});class e{constructor(t){this.contractWrapper=t}overrideNextTransaction(t){this.contractWrapper.withTransactionOverride(t)}}},3115:(t,r,a)=>{a.r(r),a.d(r,{Vote:()=>g});var e=a(54705),s=a(30413),o=a(2776),n=a(73594),i=a(10974),c=a(76328),p=a(63112),d=a(81274),h=a(53053),l=a(78527);let u=function(t){return t[t.Against=0]="Against",t[t.For=1]="For",t[t.Abstain=2]="Abstain",t}({});a(6373),a(40462),a(28379);class g{get chainId(){return this._chainId}constructor(t,r,a){(0,e.A)(this,"propose",(0,d.f)((async(t,r)=>{r||(r=[{toAddress:this.contractWrapper.address,nativeTokenValue:0,transactionData:"0x"}]);const a=r.map((t=>t.toAddress)),e=r.map((t=>t.nativeTokenValue)),s=r.map((t=>t.transactionData));return d.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"propose",args:[a,e,s,t],parse:t=>({id:this.contractWrapper.parseLogs("ProposalCreated",null===t||void 0===t?void 0:t.logs)[0].args.proposalId,receipt:t})})}))),(0,e.A)(this,"vote",(0,d.f)((()=>{var t=this;return async function(r,a){let e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return await t.ensureExists(r),d.T.fromContractWrapper({contractWrapper:t.contractWrapper,method:"castVoteWithReason",args:[r,a,e]})}})())),(0,e.A)(this,"execute",(0,d.f)((async t=>{await this.ensureExists(t);const r=await this.get(t),a=r.executions.map((t=>t.toAddress)),e=r.executions.map((t=>t.nativeTokenValue)),o=r.executions.map((t=>t.transactionData)),n=s.id(r.description);return d.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"execute",args:[a,e,o,n]})})));let o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},n=arguments.length>4?arguments[4]:void 0,i=arguments.length>5?arguments[5]:void 0,u=arguments.length>6&&void 0!==arguments[6]?arguments[6]:new p.cs(t,r,n,o,a);this._chainId=i,this.abi=p.bk.parse(n||[]),this.contractWrapper=u,this.storage=a,this.metadata=new h.C(this.contractWrapper,p.cp,this.storage),this.app=new h.b(this.contractWrapper,this.metadata,this.storage),this.encoder=new c.C(this.contractWrapper),this.estimator=new h.G(this.contractWrapper),this.events=new h.a(this.contractWrapper),this.interceptor=new l.C(this.contractWrapper)}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.address}async get(t){const r=(await this.getAll()).filter((r=>r.proposalId.eq(o.gH.from(t))));if(0===r.length)throw new Error("proposal not found");return r[0]}async getAll(){var t;const r=null!==(t=await this.contractWrapper.read("getAllProposals",[]))&&void 0!==t?t:[];return(await Promise.all(r.map((t=>Promise.all([this.contractWrapper.read("state",[t.proposalId]),this.getProposalVotes(t.proposalId)]))))).map(((t,a)=>{let[e,s]=t;const o=r[a];return{proposalId:o.proposalId,proposer:o.proposer,description:o.description,startBlock:o.startBlock,endBlock:o.endBlock,state:e,votes:s,executions:o[3].map(((t,r)=>({toAddress:o.targets[r],nativeTokenValue:t,transactionData:o.calldatas[r]})))}}))}async getProposalVotes(t){const r=await this.contractWrapper.read("proposalVotes",[t]);return[{type:u.Against,label:"Against",count:r.againstVotes},{type:u.For,label:"For",count:r.forVotes},{type:u.Abstain,label:"Abstain",count:r.abstainVotes}]}async hasVoted(t,r){return r||(r=await this.contractWrapper.getSignerAddress()),this.contractWrapper.read("hasVoted",[t,await(0,p.aM)(r)])}async canExecute(t){await this.ensureExists(t);const r=await this.get(t),a=r.executions.map((t=>t.toAddress)),e=r.executions.map((t=>t.nativeTokenValue)),o=r.executions.map((t=>t.transactionData)),n=s.id(r.description);try{return await this.contractWrapper.callStatic().execute(a,e,o,n),!0}catch(i){return!1}}async balance(){const t=await this.contractWrapper.getProvider().getBalance(this.contractWrapper.address);return{name:"",symbol:"",decimals:18,value:t,displayValue:n.formatUnits(t,18)}}async balanceOfToken(t){const r=(await Promise.resolve().then(a.t.bind(a,96337,19))).default,e=new i.NZ(await(0,p.aM)(t),r,this.contractWrapper.getProvider());return await(0,c.a)(this.contractWrapper.getProvider(),t,await e.balanceOf(this.contractWrapper.address))}async ensureExists(t){try{await this.contractWrapper.read("state",[t])}catch(r){throw Error("Proposal ".concat(t," not found"))}}async settings(){const[t,r,a,e,s]=await Promise.all([this.contractWrapper.read("votingDelay",[]),this.contractWrapper.read("votingPeriod",[]),this.contractWrapper.read("token",[]),this.contractWrapper.read("quorumNumerator",[]),this.contractWrapper.read("proposalThreshold",[])]),o=await(0,c.f)(this.contractWrapper.getProvider(),a);return{votingDelay:t.toString(),votingPeriod:r.toString(),votingTokenAddress:a,votingTokenMetadata:o,votingQuorumFraction:e.toString(),proposalTokenThreshold:s.toString()}}async prepare(t,r,a){return d.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:r,overrides:a})}async call(t,r,a){return this.contractWrapper.call(t,r,a)}}}}]);
//# sourceMappingURL=3115.236df87d.chunk.js.map