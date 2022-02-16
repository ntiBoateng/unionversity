"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const courses_1 = require("./courses");
const studyGroup_1 = require("./studyGroup");
function searchEvents(options) {
    const events = options.eventType === 'courses' ? courses_1.default : studyGroup_1.default;
    return events.filter((event) => {
        if (typeof options.query === 'number') {
            return event.id === options.query;
        }
        if (typeof options.query === 'string') {
            return event.keywords.includes(options.query);
        }
    });
}
;
const searchResult = searchEvents({ query: 'art', eventType: 'courses' });
let enrolledEvents = [];
function enroll(event) {
    enrolledEvents = [...enrolledEvents, event];
}
enroll(searchResult[0]);
console.log(enrolledEvents);
