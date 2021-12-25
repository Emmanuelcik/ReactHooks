export const heavyProcess = (iterations) => {

    for (let i = 0; i < iterations; i++) {

        console.log("Ahí vamos...", i);     
    }

    return `${ iterations } Iteraciones realizadas.`; 
}