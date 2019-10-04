import moment, { Moment } from "moment";

function getRegLink(): string {
    let monday: Moment = moment().startOf('isoWeek');
    return (monday.format('MM-DD-YYYY') + "/" + monday.day(+4).format('MM-DD-YYYY'));
}