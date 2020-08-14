# Blockchain-Trading-Hyperledger-Composer


The first participant is named as “user” and is uniquely identified by its userID. It has an enum “ROLE”
which specifies whether the user is a buyer or a seller.
The second participant is called the “registrar” and is uniquely identified by its registrarID. The last participant is called the “authenticator” and is uniquely identified by its authID.
All the participants only store the basic public information of the persons involved and no sensitive information is collected.



The following are the transactions available:

•	Register – Seller applies to register his product. Creates a new artifact with status “APPLIES”.

•	Process – Registrar processes the product application. Change status of the artifact to
“PROCESSING”.

•	Verify – Registrar needs to verify the product. Change status of the artifact to “VERIFYING”.

•	Verified – Authenticator completes product verification. Change status to “VERIFIED”.

•	Registered – Registrar completes registration. Change status of the artifact to “REGISTERED”. Status can be changed to “NOT_ON_SALE” or “ON_SALE” after this step.

•	Not_on_sale – Seller changes the status of the artifact to “NOT_ON_SALE”. No one except the seller (the owner) can view the artifacts with this status.

•	On_sale – Seller changes the status of the artifact to “ON_SALE”. The buyer can view the artifacts with this status.

•	Drafting_contract – Seller changes the status of the artifact to “DRAFTING_CONTRACT”. The seller can change the status of the artifact with this status to “ON_SALE” or 
“NOT_ON_SALE” in the case he does not want to continue selling.

•	Signing_contract – Seller changes the status of the artifact to “SIGNING_CONTRACT”. Cannot end the selling process now and the seller can only proceed with selling.

•	Sell – Registrar completes the sale and records it. Change status to “SOLD” and the ownership of the artifact is changed. Sellers can change the status of artifacts having this status to “NOT_ON_SALE” or “ON_SALE”.

•	changeRole – Users can change roles between the buyer and seller.

•	modifyParticipant – Users can change their information.


