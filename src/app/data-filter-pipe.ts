import * as _ from "lodash";
import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: "dataFilter"
})
export class DataFilterPipe implements PipeTransform {

    transform(array: any[], query: string): any {
        if (query) {
            return _.filter(array, function (row)
            {
            	var rawData = Object.values(row);
            	var row = rawData.toString().toLowerCase();

            	return row.indexOf(query.toLowerCase()) > -1;
            })
        }
        return array;
    }
}