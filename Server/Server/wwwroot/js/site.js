﻿// Write your JavaScript code.
var loadState = 0;
function loadPush() {
    loadState++;
    loadUpdateViews();
}
function loadPop() {
    loadState--;
    loadUpdateViews();
}
function loadUpdateViews() {
    if(loadState > 0) {
        $("#busyIndicator").show();
        $("#scaffolding").hide();
    }
    else {
        $("#busyIndicator").hide();
        $("#scaffolding").show();
    }
}