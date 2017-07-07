System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var HOUR, SECOND, clock, defaultPeople, people;
    return {
        setters:[],
        execute: function() {
            exports_1("HOUR", HOUR = 'HOUR');
            exports_1("SECOND", SECOND = 'SECOND');
            exports_1("clock", clock = function (state, _a) {
                if (state === void 0) { state = new Date(); }
                var type = _a.type, payload = _a.payload;
                var date = new Date(state.getTime());
                console.warn('type: ', type);
                switch (type) {
                    case SECOND:
                        date.setSeconds(date.getSeconds() + payload);
                        return date;
                    case HOUR:
                        console.warn('HOUR? : ', payload);
                        date.setSeconds(date.getSeconds() + payload);
                        return date;
                }
                return state;
            });
            defaultPeople = [
                { name: "Sara 1", time: "clock" },
                { name: "Sara 2", time: "clock" },
                { name: "Sara 3", time: "clock" },
                { name: "Sara 4", time: "clock" }
            ];
            exports_1("people", people = function (state, _a) {
                if (state === void 0) { state = defaultPeople; }
                var type = _a.type, payload = _a.payload;
                switch (type) {
                    default:
                        return state;
                }
            });
        }
    }
});
//# sourceMappingURL=reducer.js.map