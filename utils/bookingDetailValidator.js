const bookingDetailValidator = ({ tripId, boardingPointId, droppingPointId, seatsInfo, pocDetails }) => {

    return new Promise ((res,  rej) => {
        if (!tripId || tripId != "string") return rej('trip Id Must Filled & its should be a string')
        if (!boardingPointId || boardingPointId != "Number") return rej('trip Id Must Filled & its should be a Number')
        if (!droppingPointId || droppingPointId != "Number") return rej('trip Id Must Filled & its should be a Number')
        if (!seatsInfo || seatsInfo != "string") return rej('trip Id Must Filled & its should be a string')
        if (!pocDetails || pocDetails != "string") return rej('trip Id Must Filled & its should be a string')
        
        res('Booking successful')

      })


}

module.exports = bookingDetailValidator;