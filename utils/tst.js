fetch('https://puzzle.mead.io/puzzle')
.then((response)=>json())
.then(log(data))
