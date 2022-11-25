export function getSum(req, res) {
	// number1 Number SI Body Primer número
	// a sumar
	// number2 Number SI Body Segundo
	// número a
	// sumar

    const quotient = req.body.number1
    const divisor = req.body.number2
    let msg
    if (typeof quotient == 'number') {
        if(typeof divisor == 'number' && divisor !==0){
            const result = {
                result: number1 / number2
            }
            return response.status(200).send(result)
        } else if(divisor!==0){

        }else {
            msg = "divisor debe ser un numero"
        }
    } else {
        msg = "quotient debe ser un numero"
    } 
    return response.status(400).send(msg)
}