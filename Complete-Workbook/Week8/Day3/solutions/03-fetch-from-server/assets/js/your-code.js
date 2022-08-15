export function getAllDogs() {
    // Your code here
    const url = '/dogs'

    // const options = {
    //     method: 'GET',
    //     headers: {
    //         "Content-Type": 'text/html'
    //     }
    // }

    return fetch(url)
}

export function getDogNumberTwo() {
    // Your code here
    return fetch('/dogs/2')
}

export function postNewDog() {
    // Your code here
    return fetch('/dogs', {
        method: 'POST',
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams({
            "name":"hachi roku",
            "age": 86
        })
    })
}

export function postNewDogV2(name, age) {
     // Your code here
     return fetch('/dogs', {
        method: 'POST',
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams({
            name,
            age
        })
    })
}

export function deleteDog(id) {
      // Your code here
    return fetch(`/dogs/${id}/delete`, {
        method: "POST",
        headers: {
            AUTH: "ckyut5wau0000jyv5bsrud90y"
        }
    })
}