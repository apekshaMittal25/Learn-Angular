import * as _ from "lodash";
import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: "dataFilter"
})
export class DataFilterPipe implements PipeTransform {

    transform(array: any[], query: string): any {
    console.trace("Kutttttttttttttttttu");
        if (query) {
            return _.filter(array, function (row)
            {
            	let rawData = Object.values(row);
            	let rowString = rawData.toString().toLowerCase();

            	return rowString.indexOf(query.toLowerCase()) > -1;
            })
        }
        return array;
    }
}