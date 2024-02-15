delete Array.prototype.push()

function push (array, ...elements){


    if(elements.length > 0){

        for(let i = 0; i < elements.length; i++)
          array[array.length] = elements[i];
    
    return array.length

    }

}

console.log('CASE 1')

{
    const nums = [100, 200, 300, 400, 500]

    const length = push(nums, 600)

    console.log(length)
    // 6
    console.log(nums)
    // [100, 200, 300, 400, 500, 600]
}


console.log('CASE 2')

{
    const animals = ['pigs', 'goats', 'sheep']

    const length = push(animals, 'cows')

    console.log(length)
    // 4
    console.log(animals)
    // ['pigs', 'goats', 'sheep', 'cows']
}


console.log('CASE 3')

{
    const sports = ['soccer', 'baseball']

    const length = push(sports)

    console.log(length)
    // 2
    console.log(sports)
    // ['soccer', 'baseball']
}


console.log('CASE 4')

{
    const sports = ['soccer', 'baseball']

    const length = push(sports, undefined)

    console.log(length)
    // 3
    console.log(sports)
    // ['soccer', 'baseball', undefined]
}

console.log('CASE 5')

{
    const nums = [10, 20, 30]

    const length = push(nums, 40, 50, 60)

    console.log(length)
    // 6
    console.log(nums)
    // [10, 20, 30, 40, 50, 60]
}

console.log('CASE 6')

{
    const nums = [10, 20, 30]

    const length = push(nums, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200)

    console.log(length)
    // 20
    console.log(nums)
    // [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200]
}


console.log('CASE 7')

{
    const cart = [
        { brand: 'adidas', what: 'socks' },
        { brand: 'nike', what: 'shoes' },
        { brand: 'hat', what: 'skater' }
    ]

    const length = push(cart, { brand: 'mango', what: 'gloves' }, { brand: 'sara', what: 'glasses ' })

    console.log(length)
    // 5
    console.log(cart)
    /* [
        { brand: 'adidas', what: 'socks' },
        { brand: 'nike', what: 'shoes' },
        { brand: 'hat', what: 'skater' },
        { brand: 'mango', what: 'gloves' }, 
        { brand: 'sara', what: 'glasses '}
    ] */
}