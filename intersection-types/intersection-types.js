"use strict";
var addressHandler = function (address) {
    return address.lot + " " + address.block + " " + address.street + ", " + address.city + " " + address.province;
};
