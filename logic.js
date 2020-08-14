
/**
*	creates an asset
*	@param  {org.example.empty.register}  Register
*	@transaction
*/

async  function  Register(tx){ const  ns='org.example.empty';

//create new artifact

var  factory  =  getFactory();
var  newArtifact=factory.newResource(ns,'artifact',tx.artifactID); newArtifact.artifactName  =  tx.artifactName newArtifact.artifactDesc  =  tx.artifactDesc;
newArtifact.owner = tx.owner; newArtifact.status  =  'APPLIED';

//  add  the  new  artifact  to  the  artifact  registry

const  registerReg  =  await  getAssetRegistry(ns+'.artifact'); await  registerReg.add(newArtifact);
}

/*
*	registrar processeses registration
*	@param  {org.example.empty.process}  process
*	@transaction
*/
async  function  process(tx){
const  ns='org.example.empty'; currentArtifact = tx.processArtifact;
if(  currentArtifact.status  !==  'APPLIED')
{
throw  new  Error('Current  order'+currentArtifact.artifactID+'  is  in  wrong status');
}
else
{
currentArtifact.status  =  'PROCESSING';
}
//  update  artifact  with  currentArtifact
const  artifactReg  =  await  getAssetRegistry(ns+'.artifact'); await  artifactReg.update(currentArtifact);
//  emit  the  event
const  factory=getFactory();
const  processEvent=factory.newEvent(ns,'process1'); processEvent.processArtifact=currentArtifact; emit(processEvent);
}

/*
*	registrar  sets  status  to  verifying
*	@param  {org.example.empty.verify}  verify
*	@transaction
*/
async  function  verify(tx){
const  ns='org.example.empty'; currentArtifact  =  tx.verifyArtifact;
if(  currentArtifact.status  !==  'PROCESSING')
{
throw  new  Error('Current  order'+currentArtifact.artifactID+'  is  in  wrong status');
}
else
{
currentArtifact.status  =  'VERIFYING';
}
//  update  artifact  with  currentArtifact
const  artifactReg  =  await  getAssetRegistry(ns+'.artifact'); await  artifactReg.update(currentArtifact);
//  emit  the  event
const  factory=getFactory();
const  verifyEvent=factory.newEvent(ns,'verify1'); verifyEvent.verifyArtifact=currentArtifact; emit(verifyEvent);
}
/*
*	authenticator  verifies  artifact
*	@param  {org.example.empty.verified}  verified
*	@transaction
*/
async  function  verified(tx){ const  ns='org.example.empty';
currentArtifact = tx.verifiedArtifact;
if(  currentArtifact.status  !==  'VERIFYING')
{
throw  new  Error('Current  order'+currentArtifact.artifactID+'  is  in  wrong status');
}
else
{
currentArtifact.status  =  'VERIFIED';
}
//  update  artifact  with  currentArtifact
const  artifactReg  =  await  getAssetRegistry(ns+'.artifact'); await  artifactReg.update(currentArtifact);
//  emit  the  event
const  factory=getFactory();
const  verifiedEvent=factory.newEvent(ns,'verified1'); verifiedEvent.verifiedArtifact=currentArtifact; emit(verifiedEvent);
}

/*
*	registrar registers artifact
*	@param  {org.example.empty.registered}  registered
*	@transaction
*/
async  function  registered(tx){ const  ns='org.example.empty';
currentArtifact  =  tx.registeredArtifact;
if(  currentArtifact.status  ==  'VERIFIED'  ||  currentArtifact.status  ==  'REGIST ERED'  ||  currentArtifact.status  ==  'DRAFTING_CONTRACT'  ||  currentArtifact.status
== 'ONSALE')
{
currentArtifact.status  =  'REGISTERED';
}
else
{
 throw  new  Error('Current  order'+currentArtifact.artifactID+'  is  in  wrong status');;
}
//  update  artifact  with  currentArtifact
const  artifactReg  =  await  getAssetRegistry(ns+'.artifact'); await  artifactReg.update(currentArtifact);
//  emit  the  event
const  factory=getFactory();
const  registeredEvent=factory.newEvent(ns,'registered1'); registeredEvent.registeredArtifact=currentArtifact; emit(registeredEvent);
}

/*
*	Seller  denotes  artifact  is  not  for  sale
*	@param  {org.example.empty.notonsale}  notonsale
*	@transaction
*/
async  function  notonsale(tx){ const  ns='org.example.empty';
currentArtifact = tx.notonsaleArtifact;
if(  currentArtifact.status  ==  'REGISTERED'  ||  currentArtifact.status  ==  'DRAF TING_CONTRACT'  ||  currentArtifact.status  ==  'ONSALE')
{
currentArtifact.status  =  'NOT_ON_SALE';
}
else
{
throw  new  Error('Current  order'+currentArtifact.artifactID+'  is  in  wrong status');;
}
//  update  artifact  with  currentArtifact
const  artifactReg  =  await  getAssetRegistry(ns+'.artifact'); await  artifactReg.update(currentArtifact);
//  emit  the  event
const  factory=getFactory();
const  notonsaleEvent=factory.newEvent(ns,'notonsale1'); notonsaleEvent.notonsaleArtifact=currentArtifact; emit(notonsaleEvent);
}
throw  new  Error('Current  order'+currentArtifact.artifactID+'  is  in  wrong status');;
}
//  update  artifact  with  currentArtifact
const  artifactReg  =  await  getAssetRegistry(ns+'.artifact'); await  artifactReg.update(currentArtifact);
//  emit  the  event
const  factory=getFactory();
const  registeredEvent=factory.newEvent(ns,'registered1'); registeredEvent.registeredArtifact=currentArtifact; emit(registeredEvent);
}

/*
*	Seller  denotes  artifact  is  not  for  sale
*	@param  {org.example.empty.notonsale}  notonsale
*	@transaction
*/
async  function  notonsale(tx){ const  ns='org.example.empty';
currentArtifact = tx.notonsaleArtifact;
if(  currentArtifact.status  ==  'REGISTERED'  ||  currentArtifact.status  ==  'DRAF TING_CONTRACT'  ||  currentArtifact.status  ==  'ONSALE')
{
currentArtifact.status  =  'NOT_ON_SALE';
}
else
{
throw  new  Error('Current  order'+currentArtifact.artifactID+'  is  in  wrong status');;
}
//  update  artifact  with  currentArtifact
const  artifactReg  =  await  getAssetRegistry(ns+'.artifact'); await  artifactReg.update(currentArtifact);
//  emit  the  event
const  factory=getFactory();
const  notonsaleEvent=factory.newEvent(ns,'notonsale1'); notonsaleEvent.notonsaleArtifact=currentArtifact; emit(notonsaleEvent);
}
throw  new  Error('Current  order'+currentArtifact.artifactID+'  is  in  wrong status');;
}
//  update  artifact  with  currentArtifact
const  artifactReg  =  await  getAssetRegistry(ns+'.artifact'); await  artifactReg.update(currentArtifact);
//  emit  the  event
const  factory=getFactory();
const  registeredEvent=factory.newEvent(ns,'registered1'); registeredEvent.registeredArtifact=currentArtifact; emit(registeredEvent);
}

/*
*	Seller  denotes  artifact  is  not  for  sale
*	@param  {org.example.empty.notonsale}  notonsale
*	@transaction
*/
async  function  notonsale(tx){ const  ns='org.example.empty';
currentArtifact = tx.notonsaleArtifact;
if(  currentArtifact.status  ==  'REGISTERED'  ||  currentArtifact.status  ==  'DRAF TING_CONTRACT'  ||  currentArtifact.status  ==  'ONSALE')
{
currentArtifact.status  =  'NOT_ON_SALE';
}
else
{
throw  new  Error('Current  order'+currentArtifact.artifactID+'  is  in  wrong status');;
}
//  update  artifact  with  currentArtifact
const  artifactReg  =  await  getAssetRegistry(ns+'.artifact'); await  artifactReg.update(currentArtifact);
//  emit  the  event
const  factory=getFactory();
const  notonsaleEvent=factory.newEvent(ns,'notonsale1'); notonsaleEvent.notonsaleArtifact=currentArtifact; emit(notonsaleEvent);
}
/*
*	seller  sets  artifact  status  as  on  sale
*	@param  {org.example.empty.onsale}  onsale
*	@transaction
*/
async  function  onsale(tx){
const  ns='org.example.empty'; currentArtifact = tx.onsaleArtifact;
if(  currentArtifact.status  ==  'REGISTERED'  ||  currentArtifact.status  ==  'DRAF TING_CONTRACT'  ||  currentArtifact.status  ==  'SOLD'  ||  currentArtifact.status  ==  ' NOT_ON_SALE')
{
currentArtifact.status  =  'ON_SALE';
}
else
{
throw  new  Error('Current  order'+currentArtifact.artifactID+'  is  in  wrong status');
}
//  update  artifact  with  currentArtifact
const  artifactReg  =  await  getAssetRegistry(ns+'.artifact'); await  artifactReg.update(currentArtifact);
//  emit  the  event
const  factory=getFactory();
const  onsaleEvent=factory.newEvent(ns,'onsale1'); onsaleEvent.onsaleArtifact=currentArtifact; emit(onsaleEvent);
}

/*
*	buyer  and  seller  are  drafting  the  contract
*	@param  {org.example.empty.draftingContract}  draftingContract
*	@transaction
*/
async  function  draftingContract(tx){ const  ns='org.example.empty';
currentArtifact = tx.draftingArtifact; if(  currentArtifact.status  !==  'ON_SALE')
{
throw  new  Error('Current  order'+currentArtifact.artifactID+'  is  in  wrong status');
}
else
 {
currentArtifact.status  =  'DRAFTING_CONTRACT';
}
//  update  artifact  with  currentArtifact
const  artifactReg  =  await  getAssetRegistry(ns+'.artifact'); await  artifactReg.update(currentArtifact);
//  emit  the  event
const  factory=getFactory();
const  draftingContractEvent=factory.newEvent(ns,'draftingContract1'); draftingContractEvent.draftingArtifact=currentArtifact; emit(draftingContractEvent);
}

/*
*	buyer  and  seller  decide  to  sign  the  contract
*	@param  {org.example.empty.signingContract}  signingContract
*	@transaction
*/
async  function  signingContract(tx){  const  ns='org.example.empty'; currentArtifact = tx.signingArtifact;
if(  currentArtifact.status  !==  'DRAFTING_CONTRACT')
{
throw  new  Error('Current  order'+currentArtifact.artifactID+'  is  in  wrong status');
}
else
{
currentArtifact.status  =  'SIGNING_CONTRACT';
}
//  update  artifact  with  currentArtifact
const  artifactReg  =  await  getAssetRegistry(ns+'.artifact'); await  artifactReg.update(currentArtifact);
//  emit  the  event
const  factory=getFactory();
const  signingContractEvent=factory.newEvent(ns,'signingContract1'); signingContractEvent.signingArtifact=currentArtifact; emit(signingContractEvent);
}
/*
*	Ownership Changes
*	@param  {org.example.empty.sell}  sell
*	@transaction
*/
async  function  sell(tx)  {
const  ns='org.example.empty'; currentArtifact = tx.soldArtifact;
if(  currentArtifact.status  !==  'SIGNING_CONTRACT')
{
throw  new  Error('Current  order'+currentArtifact.artifactID+'  is  in  wrong status');
}
else
{
//  check  if  participant  exists var  newowner  =  tx.newowner;
const  participantRegistry  =  await  getParticipantRegistry(ns+'.user'); return  participantRegistry.exists(newowner.getIdentifier())
.then(function(exists){ if(exists)
{
//  update  artifact  with  currentArtifact currentArtifact.status  =  'SOLD'; currentArtifact.owner  =  tx.newowner; return  getAssetRegistry(ns+".artifact")
.then(function(artifactRegistry  )  {
return  artifactRegistry.update(tx.soldArtifact)
})

// emit the event
const  factory=getFactory();
const  sellEvent=factory.newEvent(ns,'sell1'); sellEvent.soldArtifact=currentArtifact; emit(sellEvent);
}
else
{
throw  new  Error("New  Owner,"+newowner.getIdentifier()+",does  not  exis
t.  Enter  an  existing  new  Owner");
}
});
}
}

/*
*	Modify  user  details
*	@param  {org.example.empty.modifyParticipant}  modifyPaticipant
*	@transaction
*/
async  function  modifyPaticipant(tx)  { const  ns='org.example.empty'; currentUser = tx.user; currentUser.Address  =  tx.addr; currentUser.ph  =  tx.ph;
//  update  participant  with  currentUser
const  participantReg  =  await  getParticipantRegistry(ns+'.user'); await  participantReg.update(currentUser);
}

/*
*	Change user role
*	@param  {org.example.empty.changeRole}  changeRole
*	@transaction
*/
async  function  changeRolet(tx)  { const  ns='org.example.empty'; currentUser = tx.user; currentUser.role  =  tx.role;
//  update  participant  with  currentUser
const  participantReg  =  await  getParticipantRegistry(ns+'.user'); await  participantReg.update(currentUser);
}
