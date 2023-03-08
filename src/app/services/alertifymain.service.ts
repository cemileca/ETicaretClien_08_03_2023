import { Injectable } from '@angular/core';
import * as alertifyMy from 'alertifyjs';

@Injectable({
  providedIn: 'root'
})
export class AlertifymainService {

  constructor() { }

  ShowMessage(message: string, option: Partial<AlertifyRequestParameters>) {
    alertifyMy.set('notifier', 'delay', option.delay);
    alertifyMy.set('notifier', 'position', option.position);
    const msj = alertifyMy[option.messageType](message);
    if (option.dissmissOther)
      msj.dissmissOther();

  }
}

export class AlertifyRequestParameters {
  messageType: AlertifyMessageType = AlertifyMessageType.Message;
  delay: number = 3;
  dissmissOther: boolean = false;
  position: AlertifyPositions = AlertifyPositions.TopRight;
}

export enum AlertifyMessageType {
  Success = 'succes',
  Error = 'error',
  Message = 'message',
  Notify = 'notify',
  Warning = 'warning'

}

export enum AlertifyPositions {
  BottomRight = 'bottom-right',
  BottomLeft = 'bottom-left',
  BottomCenter = 'bottom-center',
  TopRight = 'top-right',
  TopLeft = 'top-left',
  TopCenter = 'top-center'
}