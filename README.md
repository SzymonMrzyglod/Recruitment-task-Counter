# Recruitment task

Your job is to implement a React components Counter, CounterResult and counter logics that meet the following requirements:

CounterResult should take counter value as a prop and present it in a following way: Counter: {counter}
Counter component should have a logic to START, STOP, INCREMENT and RESET counter - implement buttons in Counter component to trigger these actions.
Counter value can be in one of three states = [IDLE, RUNNING, PAUSED] - already declared in interface
Each button should contain one of mentioned names, e.g. <button>START</button> and follow order by actions [START, STOP, INCREMENT, RESET] - already declared in interface
idle

START action can only be triggered in the [IDLE, PAUSED] states - it increments counter value by one every second, sets state to RUNNING
STOP action can only be triggered in the [RUNNING] state - it should stop value incrementation, sets state to PAUSED
INCREMENT action can be triggered in the [RUNNING] states - it should increment value by 5, state remains as current
RESET action can be triggered in the [PAUSED] state - it should reset the counter to 0, sets state to IDLE
Default state: IDLE, default counter value: 0
CounterResult component should be rendered inside of Counter.

## CAUTION:

Feel free to add new state if you believe it is needed to complete the entire task!
Don't hesitate to import whatever you need from the React library
It may be a good idea to place counter logics outside theCounter component - custom hook may come in handy here
