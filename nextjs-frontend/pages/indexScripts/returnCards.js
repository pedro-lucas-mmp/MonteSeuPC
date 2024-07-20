import Card from '../../components/Card'
import isCompatible from './returnCompatibilityTests.js'

export function returnCards(hardwareData, renderKey, tipo, cartAdd, cartData, justCompatible){
  return (<>
    {hardwareData.map(hardware => (   
      <Card key={`${renderKey}-${hardware.id}`} hardware={hardware} tipo={tipo} cartAdd={cartAdd} isCompatible={isCompatible} cartData={cartData} justCompatible={justCompatible}/>
    ))}</>)
  }



