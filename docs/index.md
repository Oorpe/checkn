<html>
    <head>
        <link rel="stylesheet" type="text/css" href="https://netdna.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
        <link rel="stylesheet" type="text/css" href="https://rawgit.com/Oorpe/checkn/master/assets/app.css">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.7.2/angular.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/angular-ui-bootstrap/2.5.0/ui-bootstrap-tpls.min.js"></script>
        <script src="https://cdn.rawgit.com/IonicaBizau/json2md/a6e3eb78/dist/json2md.min.js"></script>
        <script src="https://rawgit.com/Oorpe/checkn/master/src/app.js"></script>
        <script src="https://rawgit.com/Oorpe/checkn/master/src/addToList.component.js"></script>
        <script src="https://rawgit.com/Oorpe/checkn/master/src/listRep.component.js"></script>
        <script src="https://rawgit.com/Oorpe/checkn/master/src/lists.service.js"></script>
    </head>

    <body>
        <div style="margin: 20px;" ng-app="checkport" ng-controller="listCtrl" class="container">

            <button class="btn btn-small" ng-click="serv.export()">report</button>

            <list-rep list="lists" parents=""></list-rep>

        </div>

    </body>
</html>
