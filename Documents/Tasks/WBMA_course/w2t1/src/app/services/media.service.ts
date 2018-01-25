import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class MediaService {

  test = 'Howdyyyyyyy';
  apiUrl = 'http://media.mw.metropolia.fi/wbma/';
  uploadUrl = 'http://media.mw.metropolia.fi/wbma/uploads/';
  mediaUrl = 'http://media.mw.metropolia.fi/wbma/media/';

  constructor(private http: HttpClient) {
  }

  getAllMedia() {
    return this.http.get(this.mediaUrl);
  }
}
