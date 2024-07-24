import Card from '../Card.js'
import isCompatible from './returnCompatibilityTests.js'

 export function returnCards(hardwareData, renderKey, tipo, cartAdd, cartData, justCompatible, search){
   return (<>
     {hardwareData?.map(hardware => (   
       <Card key={`${renderKey}-${hardware.id}`} hardware={hardware} tipo={tipo} cartAdd={cartAdd} isCompatible={isCompatible} cartData={cartData} justCompatible={justCompatible} search={search}/>
     ))}</>)
   }


