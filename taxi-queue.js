function TaxiQueue() {
let queueCount =0;
let taxiQueueCount= 0;



	function joinQueue() {
		return queueCount++ ;
	}

	function leaveQueue() {
		return queueCount--
	}

	function joinTaxiQueue() {
		return taxiQueueCount++
	
}

	function queueLength() {
  if(queueCount<= 0){
	  return 0
  }else{
	  return queueCount;
  }
  
	}

	function taxiQueueLength() {
	return taxiQueueCount;
	}

	function taxiDepart(){
		if(taxiQueueCount>0){
			if(queueCount >= 12){
				queueCount = queueCount -12 ;
				
			}
			taxiQueueCount--
		}
		return taxiQueueLength();
	}

	return {
		joinQueue,
		leaveQueue,
		joinTaxiQueue,
		queueLength,
		taxiQueueLength,
		taxiDepart
	}
}