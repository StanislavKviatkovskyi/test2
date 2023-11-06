let arr_inf = []

arr_inf[0] = parseInt('2004', 10)
arr_inf[1] = 18
arr_inf[2] = null
arr_inf[3] = undefined
arr_inf[4] = "Станіслав Квятковський"


let User_ME =
{
    name_u : arr_inf[4],
    age : arr_inf[1],
    yearBorn : arr_inf[0]
}

console.table({arr_inf})
console.table({User_ME})