const departTripTicket = {
    name:"Sydney",
    from:"Los Angeles International Airport",
    to:"Narita International Airport",
    businessClass:false,
    upgrade (){
        if (departTripTicket.businessClass){
            console.log("Your ticket is already business class!");
        } else {
            departTripTicket.businessClass = true
        }
    },
    leaveTime:ikghy
}

const returnTripTicket = {
    name:"Sydney",
    to:"Los Angeles International Airport",
    from:"Narita International Airport",
    businessClass:false,
    upgrade (){
        if (returnTripTicket.businessClass){
            console.log("Your ticket is already business class!");
        } else {
            returnTripTicket.businessClass = true
        }
    }
}

returnTripTicket.upgrade()
console.log(departTripTicket)
console.log(returnTripTicket)