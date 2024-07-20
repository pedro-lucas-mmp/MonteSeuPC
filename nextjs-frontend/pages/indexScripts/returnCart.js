import Cart from '../../components/Cart'
import isCompatible from './returnCompatibilityTests.js'


export function returnCart(cartData, tipo, itemTittle, cartAdd, setSelectedCategory){
    
    if (!!cartData && !!cartData[tipo]?.data){return (<>
        <Cart key={cartData[tipo].data.id} hardware={cartData[tipo]} tipo={tipo} isCompatible={isCompatible} cartData={cartData} itemTittle={itemTittle} cartAdd={cartAdd} setSelectedCategory={setSelectedCategory}/>
    </>)}
    else{
        return
    }
    }
    


// Em caso onde cartData seja um array de carts e não de peças
// export function returnCart(cartData, tipo, itemTittle, cartAdd, setSelectedCategory){
//     return (<>{cartData.map(hardware => (
//         <Cart key={hardware.id} hardware={hardware.attributes[tipo]} tipo={tipo} isCompatible={isCompatible} cartData={cartData} itemTittle={itemTittle} cartAdd={cartAdd} setSelectedCategory={setSelectedCategory}/>
//     ))}</>)}