"use strict";(self.webpackChunkrafflex_gamesite=self.webpackChunkrafflex_gamesite||[]).push([[169],{67882:(t,r,e)=>{e.d(r,{D:()=>m,F:()=>l,I:()=>c,a:()=>d,b:()=>g,c:()=>u,f:()=>p,g:()=>f,u:()=>h});var a=e(26252),i=e(89106),n=e(2776),s=e(10974),o=e(26382).Buffer;const c=(()=>i.arrayify("0x80ac58cd"))(),d=(()=>i.arrayify("0xd9b67a26"))(),l={name:"Failed to load NFT metadata"};async function p(t,r,e){if(r.startsWith("data:application/json;base64")&&"undefined"!==typeof o){const e=r.split(",")[1],i=JSON.parse(o.from(e,"base64").toString("utf-8"));return a.a.parse({...i,id:n.gH.from(t).toString(),uri:r})}const s=r.replace("{id}",i.hexZeroPad(n.gH.from(t).toHexString(),32).slice(2));let c;try{c=await e.downloadJSON(s)}catch(d){const a=r.replace("{id}",n.gH.from(t).toString());try{c=await e.downloadJSON(a)}catch(p){console.warn("failed to get token metadata: ".concat(JSON.stringify({tokenId:t.toString(),tokenUri:r})," -- falling back to default metadata")),c=l}}return a.a.parse({...c,id:n.gH.from(t).toString(),uri:r})}async function u(t,r,i,o){let u;const g=(await e.e(4811).then(e.t.bind(e,94811,19))).default,h=new s.NZ(t,g,r),[f,m]=await Promise.all([h.supportsInterface(c),h.supportsInterface(d)]);if(f){const a=(await Promise.resolve().then(e.t.bind(e,1024,19))).default,n=new s.NZ(t,a,r);u=await n.tokenURI(i)}else{if(!m)throw Error("Contract must implement ERC 1155 or ERC 721.");{const a=(await Promise.resolve().then(e.t.bind(e,51146,19))).default,n=new s.NZ(t,a,r);u=await n.uri(i)}}return u?p(i,u,o):a.a.parse({...l,id:n.gH.from(i).toString(),uri:""})}async function g(t,r){return"string"===typeof t?t:await r.upload(a.C.parse(t))}async function h(t,r,e,i){if(function(t){return void 0===t.find((t=>"string"!==typeof t))}(t))return t;if(function(t){return void 0===t.find((t=>"object"!==typeof t))}(t)){return await r.uploadBatch(t.map((t=>a.C.parse(t))),{rewriteFileNames:{fileStartNumber:e||0},onProgress:null===i||void 0===i?void 0:i.onProgress})}throw new Error("NFT metadatas must all be of the same type (all URI or all NFTMetadataInput)")}function f(t){const r=t[0].substring(0,t[0].lastIndexOf("/"));for(let e=0;e<t.length;e++){const a=t[e].substring(0,t[e].lastIndexOf("/"));if(r!==a)throw new Error("Can only create batches with the same base URI for every entry in the batch. Expected '".concat(r,"' but got '").concat(a,"'"))}return r.replace(/\/$/,"")+"/"}const m=100},88532:(t,r,e)=>{e.d(r,{c:()=>n});var a=e(63112),i=e(76328);function n(t){return(0,i.i)(t)?a.aW:t}},78527:(t,r,e)=>{e.d(r,{C:()=>a});class a{constructor(t){this.contractWrapper=t}overrideNextTransaction(t){this.contractWrapper.withTransactionOverride(t)}}},38918:(t,r,e)=>{e.d(r,{C:()=>s});var a=e(54705),i=e(81274),n=e(63112);class s{constructor(t){(0,a.A)(this,"featureName",n.dr.name),(0,a.A)(this,"set",(0,i.f)((async t=>{const r=await n.bH.parseAsync(t);return i.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"setPlatformFeeInfo",args:[r.platform_fee_recipient,r.platform_fee_basis_points]})}))),this.contractWrapper=t}async get(){const[t,r]=await this.contractWrapper.read("getPlatformFeeInfo",[]);return n.bH.parseAsync({platform_fee_recipient:t,platform_fee_basis_points:r})}}},43521:(t,r,e)=>{e.d(r,{C:()=>d});var a=e(54705),i=e(3404),n=e(63112),s=e(53053),o=e(81274),c=e(76328);class d{constructor(t,r){(0,a.A)(this,"featureName",n.d1.name),(0,a.A)(this,"setAll",(0,o.f)((async(t,r)=>{const e=r||await this.contractWrapper.getSignerAddress(),a=new c.C(this.contractWrapper),s=Object.keys(t);(0,i.A)(s.length,"you must provide at least one role to set"),(0,i.A)(s.every((t=>this.roles.includes(t))),"this contract does not support the given role");const d=await this.getAll(),l=[],p=s.sort((t=>"admin"===t?1:-1));for(let i=0;i<p.length;i++){var u,g;const r=p[i],[s,o]=await Promise.all([Promise.all((null===(u=t[r])||void 0===u?void 0:u.map((t=>(0,n.aM)(t))))||[]),Promise.all((null===(g=d[r])||void 0===g?void 0:g.map((t=>(0,n.aM)(t))))||[])]),c=s.filter((t=>!o.includes(t))),h=o.filter((t=>!s.includes(t)));if(h.length>1){const t=h.indexOf(e);t>-1&&(h.splice(t,1),h.push(e))}if(c.length&&c.forEach((t=>{l.push(a.encode("grantRole",[(0,n.H)(r),t]))})),h.length){(await Promise.all(h.map((t=>this.getRevokeRoleFunctionName(t))))).forEach(((t,e)=>l.push(a.encode(t,[(0,n.H)(r),h[e]]))))}}return o.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"multicall",args:[l]})}))),(0,a.A)(this,"grant",(0,o.f)((async(t,r)=>{(0,i.A)(this.roles.includes(t),'this contract does not support the "'.concat(t,'" role'));const e=await(0,n.aM)(r);return o.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"grantRole",args:[(0,n.H)(t),e]})}))),(0,a.A)(this,"revoke",(0,o.f)((async(t,r)=>{(0,i.A)(this.roles.includes(t),'this contract does not support the "'.concat(t,'" role'));const e=await(0,n.aM)(r),a=await this.getRevokeRoleFunctionName(e);return o.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:a,args:[(0,n.H)(t),e]})}))),this.contractWrapper=t,this.roles=r}async getAll(){(0,i.A)(this.roles.length,"this contract has no support for roles");const t={},r=Object.entries(this.roles);return(await Promise.all(r.map((t=>{let[,r]=t;return this.get(r)})))).forEach(((e,a)=>t[r[a][1]]=e)),t}async get(t){(0,i.A)(this.roles.includes(t),'this contract does not support the "'.concat(t,'" role'));const r=this.contractWrapper;if((0,s.h)("getRoleMemberCount",r)&&(0,s.h)("getRoleMember",r)){const e=(0,n.H)(t),a=(await r.read("getRoleMemberCount",[e])).toNumber();return await Promise.all(Array.from(Array(a).keys()).map((t=>r.read("getRoleMember",[e,t]))))}throw new Error("Contract does not support enumerating roles. Please implement IPermissionsEnumerable to unlock this functionality.")}async verify(t,r){await Promise.all(t.map((async t=>{const[e,a]=await Promise.all([this.get(t),(0,n.aM)(r)]);if(!e.map((t=>t.toLowerCase())).includes(a.toLowerCase()))throw new n.o(a,t)})))}async getRevokeRoleFunctionName(t){const[r,e]=await Promise.all([(0,n.aM)(t),this.contractWrapper.getSignerAddress()]);return e.toLowerCase()===r.toLowerCase()?"renounceRole":"revokeRole"}}},59837:(t,r,e)=>{e.d(r,{a:()=>g,g:()=>h,h:()=>l,i:()=>d,m:()=>u,v:()=>p});var a=e(10974),i=e(2776),n=e(3404),s=e(67882),o=e(63112),c=e(76328);async function d(t,r,i,n,o){try{const l=(await e.e(4811).then(e.t.bind(e,94811,19))).default,p=new a.NZ(i,l,t),[u,g]=await Promise.all([p.supportsInterface(s.I),p.supportsInterface(s.a)]);if(u){var c;const s=(await Promise.resolve().then(e.t.bind(e,57305,19))).default,l=new a.NZ(i,s,t);if(await l.isApprovedForAll(o,r))return!0;let p;try{p=await l.getApproved(n)}catch(d){}return(null===(c=p)||void 0===c?void 0:c.toLowerCase())===r.toLowerCase()}if(g){const n=(await Promise.resolve().then(e.t.bind(e,59355,19))).default,s=new a.NZ(i,n,t);return await s.isApprovedForAll(o,r)}return console.error("Contract does not implement ERC 1155 or ERC 721."),!1}catch(l){return console.error("Failed to check if token is approved",l),!1}}async function l(t,r,a,i,n){const c=(await e.e(4811).then(e.t.bind(e,94811,19))).default,d=new o.cs(t.getSignerOrProvider(),a,c,t.options,t.storage),[l,p]=await Promise.all([d.read("supportsInterface",[s.I]),d.read("supportsInterface",[s.a])]);if(l){const s=(await Promise.resolve().then(e.t.bind(e,57305,19))).default,c=new o.cs(t.getSignerOrProvider(),a,s,t.options,t.storage);if(!await c.read("isApprovedForAll",[n,r])){(await c.read("getApproved",[i])).toLowerCase()===r.toLowerCase()||await c.sendTransaction("setApprovalForAll",[r,!0])}}else{if(!p)throw Error("Contract must implement ERC 1155 or ERC 721.");{const i=(await Promise.resolve().then(e.t.bind(e,59355,19))).default,s=new o.cs(t.getSignerOrProvider(),a,i,t.options,t.storage);await s.read("isApprovedForAll",[n,r])||await s.sendTransaction("setApprovalForAll",[r,!0])}}}function p(t){if((0,n.A)(void 0!==t.assetContractAddress&&null!==t.assetContractAddress,"Asset contract address is required"),(0,n.A)(void 0!==t.buyoutPricePerToken&&null!==t.buyoutPricePerToken,"Buyout price is required"),(0,n.A)(void 0!==t.listingDurationInSeconds&&null!==t.listingDurationInSeconds,"Listing duration is required"),(0,n.A)(void 0!==t.startTimestamp&&null!==t.startTimestamp,"Start time is required"),(0,n.A)(void 0!==t.tokenId&&null!==t.tokenId,"Token ID is required"),(0,n.A)(void 0!==t.quantity&&null!==t.quantity,"Quantity is required"),"NewAuctionListing"===t.type)(0,n.A)(void 0!==t.reservePricePerToken&&null!==t.reservePricePerToken,"Reserve price is required")}async function u(t,r,e){return{quantity:e.quantityDesired,pricePerToken:e.pricePerToken,currencyContractAddress:e.currency,buyerAddress:e.offeror,quantityDesired:e.quantityWanted,currencyValue:await(0,c.a)(t,e.currency,e.quantityWanted.mul(e.pricePerToken)),listingId:r}}function g(t,r,e){if(e=i.gH.from(e),t=i.gH.from(t),r=i.gH.from(r),t.eq(i.gH.from(0)))return!1;return r.sub(t).mul(o.dB).div(t).gte(e)}async function h(t,r,e){const a=[];for(;r-t>s.D;)a.push(e(t,t+s.D-1)),t+=s.D;return a.push(e(t,r-1)),await Promise.all(a)}},10169:(t,r,e)=>{e.r(r),e.d(r,{Marketplace:()=>T});var a=e(54705),i=e(2776),n=e(73594),s=e(64301),o=e(81237),c=e(48987),d=e(10974),l=e(3404),p=e(67882),u=e(76328),g=e(63112),h=e(59837),f=e(81274),m=e(53053),w=e(78527),y=e(38918),v=e(43521),A=e(88532),W=e(49013),L=e(26252);let C=function(t){return t[t.Direct=0]="Direct",t[t.Auction=1]="Auction",t}({});e(6373),e(40462),e(28379);class P{constructor(t,r){(0,a.A)(this,"createListing",(0,f.f)((async t=>{(0,h.v)(t);const r=await(0,g.aM)(t.assetContractAddress),e=await(0,g.aM)(t.currencyContractAddress);await(0,h.h)(this.contractWrapper,this.getAddress(),r,t.tokenId,await this.contractWrapper.getSignerAddress());const a=await(0,W.n)(this.contractWrapper.getProvider(),t.buyoutPricePerToken,e),n=await(0,W.n)(this.contractWrapper.getProvider(),t.reservePricePerToken,e);let s=Math.floor(t.startTimestamp.getTime()/1e3);const o=(await this.contractWrapper.getProvider().getBlock("latest")).timestamp;s<o&&(s=o);const c=f.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"createListing",args:[{assetContract:r,tokenId:t.tokenId,buyoutPricePerToken:a,currencyToAccept:(0,A.c)(e),listingType:C.Auction,quantityToList:t.quantity,reservePricePerToken:n,secondsUntilEndTime:t.listingDurationInSeconds,startTime:i.gH.from(s)}],parse:t=>({id:this.contractWrapper.parseLogs("ListingAdded",null===t||void 0===t?void 0:t.logs)[0].args.listingId,receipt:t})});return c.setGasLimitMultiple(1.2),c}))),(0,a.A)(this,"createListingsBatch",(0,f.f)((async t=>{const r=(await Promise.all(t.map((t=>this.createListing.prepare(t))))).map((t=>t.encode())),e=f.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"multicall",args:[r],parse:t=>this.contractWrapper.parseLogs("ListingAdded",null===t||void 0===t?void 0:t.logs).map((r=>({id:r.args.listingId,receipt:t})))});return e.setGasLimitMultiple(1.2),e}))),(0,a.A)(this,"buyoutListing",(0,f.f)((async t=>{const r=await this.validateListing(i.gH.from(t)),e=await(0,u.f)(this.contractWrapper.getProvider(),r.currencyContractAddress);return this.makeBid.prepare(t,n.formatUnits(r.buyoutPrice,e.decimals))}))),(0,a.A)(this,"makeBid",(0,f.f)((async(t,r)=>{const e=await this.validateListing(i.gH.from(t)),a=await(0,W.n)(this.contractWrapper.getProvider(),r,e.currencyContractAddress);if(a.eq(i.gH.from(0)))throw new Error("Cannot make a bid with 0 value");const n=await this.contractWrapper.read("bidBufferBps",[]),o=await this.getWinningBid(t);if(o){const t=(0,h.a)(o.pricePerToken,a,n);(0,l.A)(t,"Bid price is too low based on the current winning bid and the bid buffer")}else{const t=a,r=i.gH.from(e.reservePrice);(0,l.A)(t.gte(r),"Bid price is too low based on reserve price")}const c=i.gH.from(e.quantity),d=a.mul(c),p=await this.contractWrapper.getCallOverrides()||{};await(0,L.s)(this.contractWrapper,d,e.currencyContractAddress,p);const u=f.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"offer",args:[t,e.quantity,e.currencyContractAddress,a,s.Is],overrides:p});return u.setGasLimitMultiple(1.2),u}))),(0,a.A)(this,"cancelListing",(0,f.f)((async t=>{const r=await this.validateListing(i.gH.from(t)),e=i.gH.from(Math.floor(Date.now()/1e3)),a=i.gH.from(r.startTimeInEpochSeconds),n=await this.contractWrapper.read("winningBid",[t]);if(e.gt(a)&&n.offeror!==o.L)throw new g.t(t.toString());const s=f.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"closeAuction",args:[i.gH.from(t),await this.contractWrapper.getSignerAddress()]});return s.setGasLimitMultiple(1.2),s}))),(0,a.A)(this,"closeListing",(0,f.f)((async(t,r)=>{r||(r=await this.contractWrapper.getSignerAddress());const e=await this.validateListing(i.gH.from(t));try{const e=f.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"closeAuction",args:[i.gH.from(t),r]});return e.setGasLimitMultiple(1.2),e}catch(a){throw a.message.includes("cannot close auction before it has ended")?new g.w(t.toString(),e.endTimeInEpochSeconds.toString()):a}}))),(0,a.A)(this,"executeSale",(0,f.f)((async t=>{const r=await this.validateListing(i.gH.from(t));try{const e=await this.getWinningBid(t);(0,l.A)(e,"No winning bid found");const a=this.encoder.encode("closeAuction",[t,r.sellerAddress]),i=this.encoder.encode("closeAuction",[t,e.buyerAddress]),n=f.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"multicall",args:[a,i]});return n.setGasLimitMultiple(1.2),n}catch(e){throw e.message.includes("cannot close auction before it has ended")?new g.w(t.toString(),r.endTimeInEpochSeconds.toString()):e}}))),(0,a.A)(this,"updateListing",(0,f.f)((async t=>{const r=f.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"updateListing",args:[t.id,t.quantity,t.reservePrice,t.buyoutPrice,t.currencyContractAddress,t.startTimeInEpochSeconds,t.endTimeInEpochSeconds]});return r.setGasLimitMultiple(1.2),r}))),this.contractWrapper=t,this.storage=r,this.encoder=new u.C(t)}getAddress(){return this.contractWrapper.address}async getListing(t){const r=await this.contractWrapper.read("listings",[t]);if(r.listingId.toString()!==t.toString())throw new g.L(this.getAddress(),t.toString());if(r.listingType!==C.Auction)throw new g.W(this.getAddress(),t.toString(),"Direct","Auction");return await this.mapListing(r)}async getWinningBid(t){await this.validateListing(i.gH.from(t));const r=await this.contractWrapper.read("winningBid",[t]);if(r.offeror!==o.L)return await(0,h.m)(this.contractWrapper.getProvider(),i.gH.from(t),r)}async getWinner(t){const r=await this.validateListing(i.gH.from(t)),e=await this.contractWrapper.read("winningBid",[t]),a=i.gH.from(Math.floor(Date.now()/1e3)),n=i.gH.from(r.endTimeInEpochSeconds);if(a.gt(n)&&e.offeror!==o.L)return e.offeror;const s=new m.a(this.contractWrapper),c=(await s.getEvents("AuctionClosed")).find((r=>r.data.listingId.eq(i.gH.from(t))));if(!c)throw new Error("Could not find auction with listingId ".concat(t," in closed auctions"));return c.data.winningBidder}async getBidBufferBps(){return this.contractWrapper.read("bidBufferBps",[])}async getMinimumNextBid(t){const[r,e,a]=await Promise.all([this.getBidBufferBps(),this.getWinningBid(t),this.validateListing(i.gH.from(t))]),n=e?e.currencyValue.value:a.reservePrice,s=n.add(n.mul(r).div(1e4));return(0,u.a)(this.contractWrapper.getProvider(),a.currencyContractAddress,s)}async validateListing(t){try{return await this.getListing(t)}catch(r){throw console.error("Error getting the listing with id ".concat(t)),r}}async mapListing(t){return{assetContractAddress:t.assetContract,buyoutPrice:i.gH.from(t.buyoutPricePerToken),currencyContractAddress:t.currency,buyoutCurrencyValuePerToken:await(0,u.a)(this.contractWrapper.getProvider(),t.currency,t.buyoutPricePerToken),id:t.listingId.toString(),tokenId:t.tokenId,quantity:t.quantity,startTimeInEpochSeconds:t.startTime,asset:await(0,p.c)(t.assetContract,this.contractWrapper.getProvider(),t.tokenId,this.storage),reservePriceCurrencyValuePerToken:await(0,u.a)(this.contractWrapper.getProvider(),t.currency,t.reservePricePerToken),reservePrice:i.gH.from(t.reservePricePerToken),endTimeInEpochSeconds:t.endTime,sellerAddress:t.tokenOwner,type:C.Auction}}}class b{constructor(t,r){(0,a.A)(this,"createListing",(0,f.f)((async t=>{(0,h.v)(t);const r=await(0,g.aM)(t.assetContractAddress),e=await(0,g.aM)(t.currencyContractAddress);await(0,h.h)(this.contractWrapper,this.getAddress(),r,t.tokenId,await this.contractWrapper.getSignerAddress());const a=await(0,W.n)(this.contractWrapper.getProvider(),t.buyoutPricePerToken,e);let n=Math.floor(t.startTimestamp.getTime()/1e3);const s=(await this.contractWrapper.getProvider().getBlock("latest")).timestamp;n<s&&(n=s);const o=f.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"createListing",args:[{assetContract:r,tokenId:t.tokenId,buyoutPricePerToken:a,currencyToAccept:(0,A.c)(e),listingType:C.Direct,quantityToList:t.quantity,reservePricePerToken:a,secondsUntilEndTime:t.listingDurationInSeconds,startTime:i.gH.from(n)}],parse:t=>({id:this.contractWrapper.parseLogs("ListingAdded",null===t||void 0===t?void 0:t.logs)[0].args.listingId,receipt:t})});return o.setGasLimitMultiple(1.2),o}))),(0,a.A)(this,"createListingsBatch",(0,f.f)((async t=>{const r=(await Promise.all(t.map((t=>this.createListing.prepare(t))))).map((t=>t.encode())),e=f.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"multicall",args:[r],parse:t=>this.contractWrapper.parseLogs("ListingAdded",null===t||void 0===t?void 0:t.logs).map((r=>({id:r.args.listingId,receipt:t})))});return e.setGasLimitMultiple(1.2),e}))),(0,a.A)(this,"makeOffer",(0,f.f)((async(t,r,e,a,n)=>{if((0,u.i)(e))throw new Error("You must use the wrapped native token address when making an offer with a native token");const o=await(0,W.n)(this.contractWrapper.getProvider(),a,e);try{await this.getListing(t)}catch(h){throw console.error("Failed to get listing, err =",h),new Error("Error getting the listing with id ".concat(t))}const c=i.gH.from(r),d=i.gH.from(o).mul(c),l=await this.contractWrapper.getCallOverrides()||{};await(0,L.s)(this.contractWrapper,d,e,l);let p=s.Is;n&&(p=i.gH.from(Math.floor(n.getTime()/1e3)));const g=f.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"offer",args:[t,r,e,o,p],overrides:l});return g.setGasLimitMultiple(1.2),g}))),(0,a.A)(this,"acceptOffer",(0,f.f)((async(t,r)=>{await this.validateListing(i.gH.from(t));const e=await(0,g.aM)(r),a=await this.contractWrapper.read("offers",[t,e]),n=f.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"acceptOffer",args:[t,e,a.currency,a.pricePerToken]});return n.setGasLimitMultiple(1.2),n}))),(0,a.A)(this,"buyoutListing",(0,f.f)((async(t,r,e)=>{const a=await this.validateListing(i.gH.from(t)),{valid:n,error:s}=await this.isStillValidListing(a,r);if(!n)throw new Error("Listing ".concat(t," is no longer valid. ").concat(s));const o=e||await this.contractWrapper.getSignerAddress(),c=i.gH.from(r),d=i.gH.from(a.buyoutPrice).mul(c),l=await this.contractWrapper.getCallOverrides()||{};await(0,L.s)(this.contractWrapper,d,a.currencyContractAddress,l);const p=f.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"buy",args:[t,o,c,a.currencyContractAddress,d],overrides:l});return p.setGasLimitMultiple(1.2),p}))),(0,a.A)(this,"updateListing",(0,f.f)((async t=>{const r=f.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"updateListing",args:[t.id,t.quantity,t.buyoutPrice,t.buyoutPrice,await(0,g.aM)(t.currencyContractAddress),t.startTimeInSeconds,t.secondsUntilEnd]});return r.setGasLimitMultiple(1.2),r}))),(0,a.A)(this,"cancelListing",(0,f.f)((async t=>{const r=f.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"cancelDirectListing",args:[t]});return r.setGasLimitMultiple(1.2),r}))),this.contractWrapper=t,this.storage=r}getAddress(){return this.contractWrapper.address}async getListing(t){const r=await this.contractWrapper.read("listings",[t]);if(r.assetContract===o.L)throw new g.L(this.getAddress(),t.toString());if(r.listingType!==C.Direct)throw new g.W(this.getAddress(),t.toString(),"Auction","Direct");return await this.mapListing(r)}async getActiveOffer(t,r){await this.validateListing(i.gH.from(t)),(0,l.A)(c.isAddress(r),"Address must be a valid address");const e=await this.contractWrapper.read("offers",[t,await(0,g.aM)(r)]);if(e.offeror!==o.L)return await(0,h.m)(this.contractWrapper.getProvider(),i.gH.from(t),e)}async validateListing(t){try{return await this.getListing(t)}catch(r){throw console.error("Error getting the listing with id ".concat(t)),r}}async mapListing(t){return{assetContractAddress:t.assetContract,buyoutPrice:i.gH.from(t.buyoutPricePerToken),currencyContractAddress:t.currency,buyoutCurrencyValuePerToken:await(0,u.a)(this.contractWrapper.getProvider(),t.currency,t.buyoutPricePerToken),id:t.listingId.toString(),tokenId:t.tokenId,quantity:t.quantity,startTimeInSeconds:t.startTime,asset:await(0,p.c)(t.assetContract,this.contractWrapper.getProvider(),t.tokenId,this.storage),secondsUntilEnd:t.endTime,sellerAddress:t.tokenOwner,type:C.Direct}}async isStillValidListing(t,r){if(!await(0,h.i)(this.contractWrapper.getProvider(),this.getAddress(),t.assetContractAddress,t.tokenId,t.sellerAddress))return{valid:!1,error:"Token '".concat(t.tokenId,"' from contract '").concat(t.assetContractAddress,"' is not approved for transfer")};const a=this.contractWrapper.getProvider(),i=(await e.e(4811).then(e.t.bind(e,94811,19))).default,n=new d.NZ(t.assetContractAddress,i,a),s=await n.supportsInterface(p.I),o=await n.supportsInterface(p.a);if(s){var c;const r=(await Promise.resolve().then(e.t.bind(e,57305,19))).default,i=new d.NZ(t.assetContractAddress,r,a);let n;try{n=await i.ownerOf(t.tokenId)}catch(l){}const s=(null===(c=n)||void 0===c?void 0:c.toLowerCase())===t.sellerAddress.toLowerCase();return{valid:s,error:s?void 0:"Seller is not the owner of Token '".concat(t.tokenId,"' from contract '").concat(t.assetContractAddress," anymore'")}}if(o){const i=(await Promise.resolve().then(e.t.bind(e,59355,19))).default,n=new d.NZ(t.assetContractAddress,i,a),s=(await n.balanceOf(t.sellerAddress,t.tokenId)).gte(r||t.quantity);return{valid:s,error:s?void 0:"Seller does not have enough balance of Token '".concat(t.tokenId,"' from contract '").concat(t.assetContractAddress," to fulfill the listing")}}return{valid:!1,error:"Contract does not implement ERC 1155 or ERC 721."}}}class T{get chainId(){return this._chainId}constructor(t,r,e){(0,a.A)(this,"getAll",this.getAllListings),(0,a.A)(this,"buyoutListing",(0,f.f)((async(t,r,e)=>{const a=await this.contractWrapper.read("listings",[t]);if(a.listingId.toString()!==t.toString())throw new g.L(this.getAddress(),t.toString());switch(a.listingType){case C.Direct:return(0,l.A)(void 0!==r,"quantityDesired is required when buying out a direct listing"),await this.direct.buyoutListing.prepare(t,r,e);case C.Auction:return await this.auction.buyoutListing.prepare(t);default:throw Error("Unknown listing type: ".concat(a.listingType))}}))),(0,a.A)(this,"makeOffer",(0,f.f)((async(t,r,e)=>{const a=await this.contractWrapper.read("listings",[t]);if(a.listingId.toString()!==t.toString())throw new g.L(this.getAddress(),t.toString());const i=await this.contractWrapper.getChainID();switch(a.listingType){case C.Direct:return(0,l.A)(e,"quantity is required when making an offer on a direct listing"),await this.direct.makeOffer.prepare(t,e,(0,u.i)(a.currency)?g.aX[i].wrapped.address:a.currency,r);case C.Auction:return await this.auction.makeBid.prepare(t,r);default:throw Error("Unknown listing type: ".concat(a.listingType))}}))),(0,a.A)(this,"setBidBufferBps",(0,f.f)((async t=>{await this.roles.verify(["admin"],await this.contractWrapper.getSignerAddress());const r=await this.getTimeBufferInSeconds();return f.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"setAuctionBuffers",args:[r,i.gH.from(t)]})}))),(0,a.A)(this,"setTimeBufferInSeconds",(0,f.f)((async t=>{await this.roles.verify(["admin"],await this.contractWrapper.getSignerAddress());const r=await this.getBidBufferBps();return f.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"setAuctionBuffers",args:[i.gH.from(t),r]})}))),(0,a.A)(this,"allowListingFromSpecificAssetOnly",(0,f.f)((async t=>{const r=[];return(await this.roles.get("asset")).includes(o.L)&&r.push(this.encoder.encode("revokeRole",[(0,g.H)("asset"),o.L])),r.push(this.encoder.encode("grantRole",[(0,g.H)("asset"),t])),f.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"multicall",args:[r]})}))),(0,a.A)(this,"allowListingFromAnyAsset",(0,f.f)((async()=>{const t=[],r=await this.roles.get("asset");for(const e in r)t.push(this.encoder.encode("revokeRole",[(0,g.H)("asset"),e]));return t.push(this.encoder.encode("grantRole",[(0,g.H)("asset"),o.L])),f.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"multicall",args:[t]})})));let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},s=arguments.length>4?arguments[4]:void 0,c=arguments.length>5?arguments[5]:void 0,d=arguments.length>6&&void 0!==arguments[6]?arguments[6]:new g.cs(t,r,s,n,e);this._chainId=c,this.abi=g.bk.parse(s||[]),this.contractWrapper=d,this.storage=e,this.metadata=new m.C(this.contractWrapper,g.b$,this.storage),this.app=new m.b(this.contractWrapper,this.metadata,this.storage),this.roles=new v.C(this.contractWrapper,T.contractRoles),this.encoder=new u.C(this.contractWrapper),this.estimator=new m.G(this.contractWrapper),this.direct=new b(this.contractWrapper,this.storage),this.auction=new P(this.contractWrapper,this.storage),this.events=new m.a(this.contractWrapper),this.platformFees=new y.C(this.contractWrapper),this.interceptor=new w.C(this.contractWrapper)}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.address}async getListing(t){const r=await this.contractWrapper.read("listings",[t]);if(r.assetContract===o.L)throw new g.L(this.getAddress(),t.toString());switch(r.listingType){case C.Auction:return await this.auction.mapListing(r);case C.Direct:return await this.direct.mapListing(r);default:throw new Error("Unknown listing type: ".concat(r.listingType))}}async getActiveListings(t){const r=await this.getAllListingsNoFilter(!0),e=this.applyFilter(r,t),a=i.gH.from(Math.floor(Date.now()/1e3));return e.filter((t=>t.type===C.Auction&&i.gH.from(t.endTimeInEpochSeconds).gt(a)&&i.gH.from(t.startTimeInEpochSeconds).lte(a)||t.type===C.Direct&&i.gH.from(t.quantity).gt(0)))}async getAllListings(t){const r=await this.getAllListingsNoFilter(!1);return this.applyFilter(r,t)}async getTotalCount(){return await this.contractWrapper.read("totalListings",[])}async isRestrictedToListerRoleOnly(){return!await this.contractWrapper.read("hasRole",[(0,g.H)("lister"),o.L])}async getBidBufferBps(){return this.contractWrapper.read("bidBufferBps",[])}async getTimeBufferInSeconds(){return this.contractWrapper.read("timeBuffer",[])}async getOffers(t){const r=await this.events.getEvents("NewOffer",{order:"desc",filters:{listingId:t}});return await Promise.all(r.map((r=>(0,h.m)(this.contractWrapper.getProvider(),i.gH.from(t),{quantityWanted:r.data.quantityWanted,pricePerToken:r.data.quantityWanted.gt(0)?r.data.totalOfferAmount.div(r.data.quantityWanted):r.data.totalOfferAmount,currency:r.data.currency,offeror:r.data.offeror}))))}async getAllListingsNoFilter(t){return(await Promise.all(Array.from(Array((await this.contractWrapper.read("totalListings",[])).toNumber()).keys()).map((async r=>{let e;try{e=await this.getListing(r)}catch(a){return a instanceof g.L?void 0:void console.warn("Failed to get listing ".concat(r,"' - skipping. Try 'marketplace.getListing(").concat(r,")' to get the underlying error."))}if(e.type===C.Auction)return e;if(t){const{valid:t}=await this.direct.isStillValidListing(e);if(!t)return}return e})))).filter((t=>void 0!==t))}applyFilter(t,r){let e=[...t];const a=i.gH.from((null===r||void 0===r?void 0:r.start)||0).toNumber(),n=i.gH.from((null===r||void 0===r?void 0:r.count)||p.D).toNumber();return r&&(r.seller&&(e=e.filter((t=>{var e;return t.sellerAddress.toString().toLowerCase()===(null===r||void 0===r||null===(e=r.seller)||void 0===e?void 0:e.toString().toLowerCase())}))),r.tokenContract&&(e=e.filter((t=>{var e;return t.assetContractAddress.toString().toLowerCase()===(null===r||void 0===r||null===(e=r.tokenContract)||void 0===e?void 0:e.toString().toLowerCase())}))),void 0!==r.tokenId&&(e=e.filter((t=>{var e;return t.tokenId.toString()===(null===r||void 0===r||null===(e=r.tokenId)||void 0===e?void 0:e.toString())}))),e=e.filter(((t,r)=>r>=a)),e=e.slice(0,n)),e}async prepare(t,r,e){return f.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:r,overrides:e})}async call(t,r,e){return this.contractWrapper.call(t,r,e)}}(0,a.A)(T,"contractRoles",g.dE)},26252:(t,r,e)=>{e.d(r,{B:()=>c,C:()=>d,N:()=>l,a:()=>p,s:()=>u});var a=e(63112),i=e(97665),n=e(76328);const s=(()=>i.z.object({}).catchall(i.z.union([a.cx,i.z.unknown()])))(),o=(()=>i.z.union([i.z.array(i.z.array(s)).transform((t=>t.flat())),i.z.array(s),s]).optional().nullable())(),c=(()=>i.z.object({name:i.z.union([i.z.string(),i.z.number()]).optional().nullable(),description:i.z.string().nullable().optional().nullable(),image:a.cy.nullable().optional(),animation_url:a.cy.optional().nullable()}))(),d=(()=>c.extend({external_url:a.cy.nullable().optional(),background_color:a.cz.optional().nullable(),properties:o,attributes:o}).catchall(i.z.union([a.cx,i.z.unknown()])))(),l=(()=>i.z.union([d,i.z.string()]))(),p=(()=>d.extend({id:i.z.string(),uri:i.z.string(),image:i.z.string().nullable().optional(),external_url:i.z.string().nullable().optional(),animation_url:i.z.string().nullable().optional()}))();async function u(t,r,i,s){if(!(0,n.i)(i)){const n=(await Promise.resolve().then(e.t.bind(e,96337,19))).default,o=t.getSigner(),c=t.getProvider(),d=new a.cs(o||c,i,n,t.options,t.storage),l=await t.getSignerAddress(),p=t.address;return(await d.read("allowance",[l,p])).lt(r)&&await d.sendTransaction("approve",[p,r]),s}s.value=r}}}]);
//# sourceMappingURL=169.8914f907.chunk.js.map