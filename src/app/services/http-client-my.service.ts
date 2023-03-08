import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, retryWhen } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpClientMyService {
  constructor(
    private httpClientServisim: HttpClient, @Inject('baseUrl') private baseUrl: string) { }

  private url(requestParameters: Partial<HttpRequestParameters>): string {
    return `${requestParameters.baseUrl ? requestParameters.baseUrl : this.baseUrl
      }/${requestParameters.controller}${requestParameters.action ? `/${requestParameters.action}` : ''
      }`;
  }

  IsFullEndPoint(requestParameters: Partial<HttpRequestParameters>, id?: string): string {
    let url: string = '';
    if (requestParameters.fullEndPoint) url = requestParameters.fullEndPoint;
    else
      url = `${this.url(requestParameters)}${id ? `/${id}` : ''}${requestParameters.queryString ? `?${requestParameters.queryString}` : ''
        }`;

    return url;
  }

  get<T>(requestParameters: Partial<HttpRequestParameters>, id?: string): Observable<T> {
    let getUrl = this.IsFullEndPoint(requestParameters, id);
    alert(this.url);
    return this.httpClientServisim.get<T>(getUrl, { headers: requestParameters.headers, responseType: requestParameters.responseType as 'json' });
  }

  post<T>(requestParameters: Partial<HttpRequestParameters>, body: Partial<T>): Observable<T> {
    let postUrl = this.IsFullEndPoint(requestParameters);

    return this.httpClientServisim.post<T>(postUrl, body,
      { headers: requestParameters.headers, responseType: requestParameters.responseType as 'json' });
  }

  put<T>(requestParameters: Partial<HttpRequestParameters>, body: Partial<T>): Observable<T> {
    let putUrl = this.IsFullEndPoint(requestParameters);

    return this.httpClientServisim.get<T>(putUrl,
      { headers: requestParameters.headers, responseType: requestParameters.responseType as 'json' });
  }

  delete<T>(requestParameters: Partial<HttpRequestParameters>, id: string): Observable<T> {
    let deleteUrl = this.IsFullEndPoint(requestParameters);

    return this.httpClientServisim.delete<T>(deleteUrl,
      { headers: requestParameters.headers, responseType: requestParameters.responseType as 'json' });
  }
}

export class HttpRequestParameters {
  controller?: string;
  action?: string;
  queryString?: string;
  headers?: HttpHeaders;
  baseUrl?: string;
  fullEndPoint?: string;
  responseType?: string = 'json';
}
