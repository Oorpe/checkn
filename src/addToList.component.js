const modalTemplate = `
        <div>
            <div class="modal-header">
                <h3 class="modal-title">
                    My Modal Title
                </h3>
            </div>
            <div class="modal-body">
              name: <input type="text" ng-model="$ctrl.item.name">
              description: <input type="text" ng-model="$ctrl.item.description">
            </div>
                <div class="modal-footer">
                    <button class="btn btn-primary" type="button" ng-click="$ctrl.save()">Save</button>
                </div>
        </div>
    `;


angular.module("checkport")
.component("addToList", {
  bindings: {
    list: "<"
  },
  template: `
    <button class="btn btn-sm btn-primary" ng-click="$ctrl.modal($ctrl.list)">
      +
    </button>
  `,
  controller: function($uibModal){
    var ctrl = this;

    ctrl.modal = function(list){
      $uibModal.open({
        template: modalTemplate,
        controllerAs: "$ctrl",
        controller: function($uibModalInstance, list, lists){
          this.item = {}
          this.list = list;

          this.save = function(){
            this.item.checks = []
            list.push(this.item)
            lists.set()
            $uibModalInstance.close(this.list)
          }
        },
        resolve: {
          list: function(){
            return list;
          }
        }
      })
    }
  }
})
