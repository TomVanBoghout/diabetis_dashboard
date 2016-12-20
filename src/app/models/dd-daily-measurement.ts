import {IMeasurement} from "./dd-measurement";
export interface IDailyMeasurement {
  id: number;
  date: string;
  morning: IMeasurement;
  noon: IMeasurement;
  evening: IMeasurement;
  night: IMeasurement;
}
