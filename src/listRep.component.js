angular.module("checkport")

.component("listRep", {
  template: `
  <div class="border" ng-repeat="list in $ctrl.list  track by $index" >

  <uib-accordion close-others="true"   >
    <div uib-accordion-group ng-class="{'selected': list.selected}" is-open="false" is-disabled="!list.checks || list.checks.length < 1">

  <uib-accordion-heading >
  {{$ctrl.parents}}/{{list.name}}
  <small ng-if="list.checks && list.checks.length">sub-items: {{list.checks.length}}</small>


    <span class="pull-right">
  <add-to-list list="list.checks"></add-to-list>
selected: <input type="checkbox" ng-model="list.selected" ng-click="$ctrl.select($event, list)" ng-change="$ctrl.select($event, list)">
    </span>
    <small class="blocky">{{list.description}}</small>
  </uib-accordion-heading>


    <list-rep ng-if="list.checks && list.checks.length > 0" list="list.checks" parents="$ctrl.parents +'/'+ list.name"></list-rep>
  </div>
</uib-accordion>


  </div>
  `
  ,bindings:{
    list: "<",
    parents: "<"
  },
  controller: function($timeout){
    var ctrl = this;
    ctrl.select = function(ev, list){
      ev.preventDefault()
      ev.stopPropagation()
      //using timeout, force the prop change
      $timeout(()=>{
       list.selected = !list.selected
        ctrl.selectChildren(list, list.selected)
      })
      console.log("list:", list)
    }

    ctrl.selectChildren = function(upperlist, val){
      if(upperlist && upperlist.checks && upperlist.checks.length > 0){
        upperlist.checks.forEach(list=>{
        list.selected = val
        if(list.checks && list.checks.length > 0){
          ctrl.selectChildren(list, val)
        }
      })
      }

    }
  }
})
