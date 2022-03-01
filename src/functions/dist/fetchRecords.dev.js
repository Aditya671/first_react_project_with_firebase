"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactToastify = require("react-toastify");

var _firebaseConfig = require("../api/firebaseConfig");

var _strings = require("../components/common/strings/strings");

// import history from '../history'
var fetchRecords = function fetchRecords() {
  var books, BookListRef;
  return regeneratorRuntime.async(function fetchRecords$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          books = [];
          BookListRef = []; // setTimeout(() => {

          _context.next = 4;
          return regeneratorRuntime.awrap(_firebaseConfig.Firedb.ref("books/").on("value", function (snapshot) {
            snapshot.forEach(function (snap) {
              // eslint-disable-next-line react-hooks/exhaustive-deps
              BookListRef = snap.val();
              books.push({
                key: snap.key,
                BookAuthor: BookListRef.BookAuthor,
                BookTitle: BookListRef.BookTitle,
                BookDesc: BookListRef.BookDesc,
                BookPublished: BookListRef.BookPublished,
                BookLike: BookListRef.BookLike,
                id: BookListRef.id
              });
            });
            console.log(books); // history.push('/books/')  
          }));

        case 4:
          return _context.abrupt("return", books);

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
};

var doUpdateRecord = function doUpdateRecord(getValue, getKey, setError, setValue) {
  return regeneratorRuntime.async(function doUpdateRecord$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _firebaseConfig.Firedb.ref("books/").child("".concat(getKey)).update({
            getValue: !getValue
          }).then(function (_) {
            setValue(!getValue);

            _reactToastify.toast.success(_strings.AppStrings.SuccessOperations.LikeSuccess, {
              autoClose: 2000
            });
          })["catch"](function (error) {
            setError(error);

            _reactToastify.toast.error(_strings.AppStrings.ErrorOccured.noLike, {
              autoClose: 2000
            });

            console.log(error.message);
          });

        case 1:
        case "end":
          return _context2.stop();
      }
    }
  });
};

var fetchFunction = {
  getBooks: fetchRecords,
  updateInRecord: doUpdateRecord
};
var _default = fetchFunction;
exports["default"] = _default;