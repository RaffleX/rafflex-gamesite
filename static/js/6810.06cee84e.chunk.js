"use strict";(self.webpackChunkrafflex_gamesite=self.webpackChunkrafflex_gamesite||[]).push([[6810],{78527:(t,r,e)=>{e.d(r,{C:()=>a});class a{constructor(t){this.contractWrapper=t}overrideNextTransaction(t){this.contractWrapper.withTransactionOverride(t)}}},38918:(t,r,e)=>{e.d(r,{C:()=>c});var a=e(54705),s=e(81274),n=e(63112);class c{constructor(t){(0,a.A)(this,"featureName",n.dr.name),(0,a.A)(this,"set",(0,s.f)((async t=>{const r=await n.bH.parseAsync(t);return s.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"setPlatformFeeInfo",args:[r.platform_fee_recipient,r.platform_fee_basis_points]})}))),this.contractWrapper=t}async get(){const[t,r]=await this.contractWrapper.read("getPlatformFeeInfo",[]);return n.bH.parseAsync({platform_fee_recipient:t,platform_fee_basis_points:r})}}},8280:(t,r,e)=>{e.d(r,{C:()=>c});var a=e(54705),s=e(81274),n=e(63112);class c{constructor(t){(0,a.A)(this,"featureName",n.d4.name),(0,a.A)(this,"setRecipient",(0,s.f)((async t=>s.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"setPrimarySaleRecipient",args:[t]})))),this.contractWrapper=t}async getRecipient(){return await this.contractWrapper.read("primarySaleRecipient",[])}}},54678:(t,r,e)=>{e.d(r,{S:()=>c});var a=e(54705),s=e(81274),n=e(2021);class c{get chainId(){return this._chainId}constructor(t,r,e){(0,a.A)(this,"transfer",(0,s.f)((async(t,r)=>this.erc20.transfer.prepare(t,r)))),(0,a.A)(this,"transferFrom",(0,s.f)((async(t,r,e)=>this.erc20.transferFrom.prepare(t,r,e)))),(0,a.A)(this,"setAllowance",(0,s.f)((async(t,r)=>this.erc20.setAllowance.prepare(t,r)))),(0,a.A)(this,"transferBatch",(0,s.f)((async t=>this.erc20.transferBatch.prepare(t)))),this.contractWrapper=t,this.storage=r,this.erc20=new n.E(this.contractWrapper,this.storage,e),this._chainId=e}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.address}async get(){return this.erc20.get()}async balance(){return await this.erc20.balance()}async balanceOf(t){return this.erc20.balanceOf(t)}async totalSupply(){return await this.erc20.totalSupply()}async allowance(t){return await this.erc20.allowance(t)}async allowanceOf(t,r){return await this.erc20.allowanceOf(t,r)}}},16810:(t,r,e)=>{e.r(r),e.d(r,{Token:()=>w});var a=e(54705),s=e(81237),n=e(2776),c=e(63112),i=e(81274),o=e(53053),p=e(76328),h=e(78527),l=e(38918),d=e(43521),f=e(8280),u=e(2021),g=e(54678);e(6373),e(40462),e(28379),e(122);class m{constructor(t,r){this.contractWrapper=t,this.events=r}async getAllHolderBalances(){const t=(await this.events.getEvents("Transfer")).map((t=>t.data)),r={};t.forEach((t=>{const e=null===t||void 0===t?void 0:t.from,a=null===t||void 0===t?void 0:t.to,c=null===t||void 0===t?void 0:t.value;e!==s.L&&(e in r||(r[e]=n.gH.from(0)),r[e]=r[e].sub(c)),a!==s.L&&(a in r||(r[a]=n.gH.from(0)),r[a]=r[a].add(c))}));const e=Object.entries(r),a=await Promise.all(e.map((t=>{let[,r]=t;return(0,p.a)(this.contractWrapper.getProvider(),this.contractWrapper.address,r)})));return e.map(((t,r)=>{let[e]=t;return{holder:e,balance:a[r]}}))}}class w extends g.S{constructor(t,r,e){let s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},n=arguments.length>4?arguments[4]:void 0,g=arguments.length>5?arguments[5]:void 0;super(arguments.length>6&&void 0!==arguments[6]?arguments[6]:new c.cs(t,r,n,s,e),e,g),(0,a.A)(this,"mint",(0,i.f)((async t=>this.erc20.mint.prepare(t)))),(0,a.A)(this,"mintTo",(0,i.f)((async(t,r)=>this.erc20.mintTo.prepare(t,r)))),(0,a.A)(this,"mintBatchTo",(0,i.f)((async t=>this.erc20.mintBatchTo.prepare(t)))),(0,a.A)(this,"delegateTo",(0,i.f)((async t=>i.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"delegate",args:[await(0,c.aM)(t)]})))),(0,a.A)(this,"burn",(0,i.f)((t=>this.erc20.burn.prepare(t)))),(0,a.A)(this,"burnFrom",(0,i.f)((async(t,r)=>this.erc20.burnFrom.prepare(t,r)))),this.abi=c.bk.parse(n||[]),this.metadata=new o.C(this.contractWrapper,c.cb,this.storage),this.app=new o.b(this.contractWrapper,this.metadata,this.storage),this.roles=new d.C(this.contractWrapper,w.contractRoles),this.sales=new f.C(this.contractWrapper),this.events=new o.a(this.contractWrapper),this.history=new m(this.contractWrapper,this.events),this.encoder=new p.C(this.contractWrapper),this.estimator=new o.G(this.contractWrapper),this.platformFees=new l.C(this.contractWrapper),this.interceptor=new h.C(this.contractWrapper),this.signature=new u.a(this.contractWrapper,this.roles)}async getVoteBalance(){return await this.getVoteBalanceOf(await this.contractWrapper.getSignerAddress())}async getVoteBalanceOf(t){return await this.erc20.getValue(await this.contractWrapper.read("getVotes",[t]))}async getDelegation(){return await this.getDelegationOf(await this.contractWrapper.getSignerAddress())}async getDelegationOf(t){return await this.contractWrapper.read("delegates",[await(0,c.aM)(t)])}async isTransferRestricted(){return!await this.contractWrapper.read("hasRole",[(0,c.H)("transfer"),s.L])}async getMintTransaction(t,r){return this.erc20.getMintTransaction(t,r)}async prepare(t,r,e){return i.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:r,overrides:e})}async call(t,r,e){return this.contractWrapper.call(t,r,e)}}(0,a.A)(w,"contractRoles",c.dD)}}]);
//# sourceMappingURL=6810.06cee84e.chunk.js.map