import fs from "fs"

const arrayDatos = [2,10,"a",4,"b",6,"d",true,"e",9,1,"z",12,"r", "c", false]
console.log("Array original")
console.log(arrayDatos)
console.log("-".repeat(30))

// Definición de la condición
const tipo = "number"

// Condiciones válidas
const condicionesValidas = new Set( ["number", "string", "boolean"] );

const filtrarDatos = (datos, condicion) => {

    try {
        // Verificación de condición válida
        if (!condicionesValidas.has(condicion)) {
            throw new Error("Falta condición o condición inválida");
        }

         const arrayDatosFiltrados = datos.filter( (elemento) => typeof(elemento) === condicion ).sort( (a,b) => a - b )

        const arrayDatosFiltradosSinRepetidos = [...new Set(arrayDatosFiltrados)]

        if (arrayDatosFiltradosSinRepetidos.length > 0) {
            fs.writeFileSync( "documento.txt", arrayDatosFiltradosSinRepetidos.join(", ") )
            const textoArchivo = fs.readFileSync("documento.txt", "utf-8")
            console.log('ArrayDatosFiltradosSinRepetidos (como texto): ', textoArchivo)
        }
       
    } 
    catch (error) {
        console.log("Se produjo un error: ", error.message)
    }
   
}

// Invocación válida
filtrarDatos(arrayDatos, tipo)

// Invocación sin condición
filtrarDatos(arrayDatos)

// Invocación con condición inválida
filtrarDatos(arrayDatos, "tipo")




