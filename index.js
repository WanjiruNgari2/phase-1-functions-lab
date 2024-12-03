 //returns the number of blocks given a value

 function distanceFromHqInBlocks(pickupLocation) {
   const scuberHq = 42;
    return Math.abs(scuberHq-pickupLocation); 

}

     //distanceinfeet
     function distanceTravelledInFeet (start,destination) {
          const blocksCovered = Math.abs(destination-start);
          return  blocksCovered * 264;
     }
   
     //fareprices
      function calculatesFarePrice(start,destination) {
         const distance = Math.abs (destination -start)*264;
         if(distance <= 400) {
           return 0;
         }

         else if(distance > 400 && distance <= 2000) {
           return (distance - 400)*0.02;
         }

         else if(distance > 2000 && distance <= 2500) {
           return 25;
         }

         else if (distance > 2500) {
           return 'cannot travel that far';
         }
      }



//distancefromhqfeet
function distanceFromHqInFeet (location) {
   const hq = 42;
   const blocksCovered = Math.abs (location - hq);
    return blocksCovered * 264;
}
