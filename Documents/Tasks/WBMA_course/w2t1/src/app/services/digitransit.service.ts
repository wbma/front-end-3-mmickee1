import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class DigitransitService {

  apiUrl = 'https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql';

  constructor(private http: HttpClient) {
  }

  getRoutes(stopName) {
    const body = `{
          stops (name: "${stopName}") {
          name
          lat
          lon
            patterns {
              name
              route {
                shortName
                longName
            }
              directionId
          }
          }
        }`;
    const settings = {
      headers: new HttpHeaders().set('Content-Type', 'application/graphql'),
    };

    interface StopData {
      stops: string[];
    }

    interface ResponseData {
      data: StopData;
    }

    // return this.http.post(this.apiUrl, body, settings);
    // and now you can
     return this.http.post<ResponseData>(this.apiUrl, body, settings);
  }
}
