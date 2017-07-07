export const HOUR = 'HOUR';
export const SECOND = 'SECOND';
export const ADVANCE = 'ADVANCE';
export const RECALL = 'RECALL';


export const clock = (state = new Date(), {type, payload} = {type: ""})=> {
    const date = new Date(state.getTime());
    switch (type) {
        case SECOND:
            date.setSeconds(date.getSeconds() + payload);
            return date;

        case HOUR:
            date.setHours(date.getHours() + payload);
            return date;


        default:
            return state;
    }
};


const defaultPeople = [
    {name: "Sara", time: clock()},
    {name: "John", time: clock()},
    {name: "Nancy", time: clock()},
    {name: "Drew", time: clock()},
];
export const people = (state = defaultPeople, {type, payload})=> {
    switch (type) {
         case ADVANCE:
            return state.map((person) =>{
                console.warn('person', payload);
                if(person === payload){
                    return {
                        name: person.name,
                        time: clock(person.time, {type: HOUR, payload: 2})
                    }
                }
                return person;
            });
        case RECALL:
            return state.map((person) => {
                console.warn('call', payload);
                return {
                    name: person.name,
                    time: payload
                }
            
            });

        default:
            return state;
    }
};