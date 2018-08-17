

angular.module("checkport", ["ui.bootstrap"])



.controller("listCtrl", ($scope, lists)=>{
  $scope.lists = lists.get()
  console.log($scope.lists)

  $scope.serv = lists

  // var unitTestsList = {
  //   name: "unit testing",
  //   checks: [
  //     {checks: [], name: "controller", description: "should be covered 90%", selected: true}
  //   ],
  //   selected: false
  // }
  //
  // var groceryList = {
  //   name: "groceries",
  //   checks: [
  //     {checks: [], name: "sausages", selected: true}
  //   ],
  //   selected: true
  // }
  //
  // var list = {
  //   name: "ToDos For Customer Project",
  //   checks: [
  //     unitTestsList,
  //     groceryList
  //   ],
  //   description: "flor blorp, some stuff about what we have to do next...",
  //   selected: false
  // }
  //
  // $scope.lists.push(list)

})
