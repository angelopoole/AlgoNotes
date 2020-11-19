PRINCI-PALS :) OF REDUX
let 1 = single source of truth
let 2 = read only
let 3 = pure functions
let 4 = unidirectional flow

1= the state of your whole application is stored in an object tree within a single store. 
*Store* An object that has methods such as getstate and dispatch as a gatekeeper, pojo that holds state. 

2= We do not mutate state directly, the store is alerted of changes, and then based on that pervious state a new state is returned. 
the only wat to change state is to *dispatch* an *action.*

Set state merges your state. this is a key difference in redux vs react. 
Actions: pojo that takes two keys, type: the command string describnig the state change,  and payload: any data needed to complete the state change. 

function => state? NO 
action => store => state => correct
store can replace state object. 

3= when we get an action telling us how the state should change, we use pure functions called *reducers*. The reducer does not mitate the existing state object, but instead returns a new state object 

Reducer is just what do we want to do with the action that gets dispatched
reducers are apire funcs that take in the current state and an action as arguments
it contains a switch statment that returns a new state based on the action type sent. 

siminalrly to the recude method, reducers take in data amnd reduce it to a single object. 
=====================================================
action 
          =====> reducer(pure function) => newState
current state
=====================================================

4= unidirectional flow,
step 1 component triggers an action
step 2 action dispatched to reducer
step 3 reducer returns the new state
step 4 change in store causes rerender in components
flow: component => action => reducer => store => [state] => component ...

look for >

seperate concerns


