let destino, nombreClient, personasAdult,Totaladult = 0, niños, TotalNiños = 0, subtotal = 0, descuento = 0, neto = 0, totalPerGuajira = 0, totalPerChicamocha = 0, totalPerLlanos = 0, sumGuajira = 0, sumChicamocha = 0, sumLlanos = 0, sumDescuento = 0, sumNeto = 0
const vlrAdultGuajira = 1980000, vlrNiñoGuajira = vlrAdultGuajira * 0.60
const vlrAdultChicamocha = 1600000, vlrNiñoChicamocha = vlrAdultChicamocha * 0.60
const vlrAdultLlanos = 1500000, vlrNiñoLlanos  = vlrAdultLlanos * 0.60






do {

    do {
        destino = prompt("Ingrese el destino: \n1.Guajira \n2.Cañón del Chicamocha \n3.Llanos Orientales")
    } while (destino < 1 || destino > 3);


    nombreClient = prompt("Ingrese el nombre del cliente:")
    personasAdult = parseInt(prompt("Ingrese el número de adultos:"))
    Totaladult += personasAdult
    niños = parseInt(prompt("Ingrese el número de niños:"))
    TotalNiños += niños

    if (destino == 1) {
        subtotal = (personasAdult * vlrAdultGuajira) + (niños * vlrNiñoGuajira)
        totalPerGuajira = personasAdult + niños

        if (personasAdult == 4 && niños == 2) {
            descuento = subtotal * 0.20
            sumDescuento += descuento
            neto = subtotal -descuento
            sumGuajira += neto
            sumNeto += neto
        } else{
            descuento = 0
            sumDescuento += descuento
            neto = subtotal
            sumGuajira += neto
            sumNeto += neto
        }
        
    } else if (destino == 2) {
        subtotal = (personasAdult * vlrAdultChicamocha) + (niños * vlrNiñoChicamocha)
        totalPerChicamocha = personasAdult + niños

        if (personasAdult == 4 && niños == 2) {
            descuento = subtotal * 0.20
            sumDescuento += descuento
            neto = subtotal - descuento
            sumChicamocha += neto
            sumNeto += neto
        } else{
            descuento = 0
            sumDescuento += descuento
            neto = subtotal
            sumChicamocha += neto
            sumNeto += neto
        }

    } else {
        subtotal = (personasAdult * vlrAdultLlanos) + (niños * vlrNiñoLlanos)
        totalPerLlanos = personasAdult + niños

        if (personasAdult == 4 && niños == 2) {
            descuento = subtotal * 0.20
            sumDescuento += descuento
            neto = subtotal - descuento
            sumLlanos += neto
            sumNeto += neto
        } else{
            descuento = 0
            sumDescuento += descuento
            neto = subtotal
            sumLlanos += neto
            sumNeto += neto
        }
    }

    destino = (destino == 1)? "Guajira":
            (destino == 2)? "Cañón del Chicamocha": "Llanos orientales"

    document.writeln("┌­─­─­─­─­─­─­─­─­─­─­─­─­─­─­─­─­─­─­─­─­─­─­─­─­─­─­─­─­─­─­─­─­─­─┐<br>")
    document.writeln("│ AGENCIA DE VIAJES XYZ            │<br>")
    document.writeln("├­─­─­─­─­─­─­─­─­─­─­─­─­─­─­─­─­─­─­─­─­─­─­─­─­─­─­─­─­─­─­─­─­─­─┤<br>")
    document.writeln(`Nombre del cliente: ${nombreClient}<br>`)
    document.writeln(`El destino es: ${destino}<br>`)
    document.writeln(`La cantidad de adultos son: ${personasAdult}<br>`)
    document.writeln(`La  cantidad de niños son: ${niños}<br>`)
    document.writeln(`Subtotal: ${subtotal}<br>`)
    document.writeln(`Descuento: ${descuento}<br>`)
    document.writeln(`Neto: ${neto}<br>`)
    document.writeln("└──────────────────────────────────┘<br>")


    ingresar = prompt("Desea continuar en el sistema web de XYZ: 1.Si 2.No")
} while (ingresar != 2 );

document.writeln(`Total, de personas Adultas : ${Totaladult}<br>`)
document.writeln(`Total, de niños: ${TotalNiños}<br>`)
document.writeln(`Cantidad de personas (adultos + niños) que viajan para la Guajira: ${totalPerGuajira}<br>`)
document.writeln(`Cantidad de personas (adultos + niños) que viajan para Cañón del Chicamocha: ${totalPerChicamocha}<br>`)
document.writeln(`Cantidad de personas (adultos + niños) que viajan para los llanos orientales: ${totalPerLlanos}<br>`)
document.writeln(`Suma, de dinero de los viajes para la Guajira: ${sumGuajira}<br>`)
document.writeln(`Suma, de dinero de los viajes para Cañón del Chicamocha: ${sumChicamocha}<br>`)
document.writeln(`Suma, de dinero de los viajes para los llanos orientales: ${sumLlanos}<br>`)
document.writeln(`Suma, del descuento: ${sumDescuento}<br>`)
document.writeln(`Suma, de Neto a pagar: ${sumNeto}`)