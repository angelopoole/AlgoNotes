state is immutable, 
pogo's -> all pass by reference.
when you pass something up the info from the child is the state downstairs. if you want to add something to the object you cannot add it from child

`info coming from child -> {personName:"", CerialName: ""}`
`info coming from child.id = math.floor(math.random() * 1000*)`
This is wrong -^-

The right way is this:

let newCerialWithId = {...infocomingFromChild, id: Math.floor(Math.random() *1000)}

Anytime that you want to update anything in a array and object. you have to use the spread operator. React treats state as immutable. 
`the Spred Operator is *[...]*` __yes__

whenever you want to update or add somehting to an object just make sure to spread operator something into an object

`
addOPneCereal = (infoComingFromChild) => {
  let newCerealWithId = {...infoComingFromChild, id: Math.floor(Math.random() * 1000)}
  this.setState({
    cerials: [newcerailWithId, ...this.state.cerials]
})
}
`

