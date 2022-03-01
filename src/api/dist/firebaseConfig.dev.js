"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Firedb = exports.FireAuth = void 0;

var _firebase = _interopRequireDefault(require("firebase"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var firebaseConfig = {
  apiKey: "AIzaSyABhe9mczoofvVCpPZhxGd8sgAHNxK1Zsg",
  authDomain: "bookscontainer-afa9b.firebaseapp.com",
  databaseURL: "https://bookscontainer-afa9b-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "bookscontainer-afa9b"
};

_firebase["default"].initializeApp(firebaseConfig);

var FireAuth = _firebase["default"].auth;
exports.FireAuth = FireAuth;

var Firedb = _firebase["default"].database();

exports.Firedb = Firedb;