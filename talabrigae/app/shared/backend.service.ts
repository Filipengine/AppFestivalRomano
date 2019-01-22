// The following is a sample implementation of a backend service using Progress Kinvey (https://www.progress.com/kinvey).
// Feel free to swap in your own service / APIs / etc here for your own apps.

import { Injectable } from "@angular/core";
import { Kinvey } from "kinvey-nativescript-sdk";

Kinvey.init({
    appKey: 'kid_SJ-F7XEmE',
    appSecret: '779334c60439492084ff429819b63b99'
  })

export class BackendService {
    static isUserLoggedIn() {
        return !!Kinvey.User.getActiveUser();
    }
}