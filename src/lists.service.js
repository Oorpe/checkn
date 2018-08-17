angular.module("checkport")
.service("lists", function(){
    var serv = this;

    serv.lists = []

    serv.rootList = [{
        name: "rootList",
        checks: [
        ],
        selected: false
    }]

    serv.rootListString = JSON.stringify(serv.rootList)

    serv.get = function(){
        var str = localStorage.getItem("checkn_lists") || serv.rootListString
        serv.lists = JSON.parse(str)
        return serv.lists
    }

    serv.set = function(lists){
        if(!lists){
            lists = serv.lists
        }
        console.log("aving:", serv.lists)
        localStorage.setItem("checkn_lists", JSON.stringify(lists))
        return serv.lists
    }

    serv.add = function(list){
        serv.lists.push(list)
        serv.set(serv.lists)
    }

    serv.export = function(){

        var list = mdifyList(serv.lists[0], "")

        console.log(list)

        list.push({link: ["Icon pack by Icons8", "https://icons8.com"]})

        download("export.md", json2md(list))

    }

    // json2md.converters.checked = function (input, json2md) {
    //    return "- [x] " + input
    // }
    //
    // json2md.converters.unchecked = function (input, json2md) {
    //    return "- [ ] " + input
    // }

    json2md.converters.checked = function (input, json2md) {
       return '<img width="20" src="https://png.icons8.com/metro/50/000000/checkmark.png">' + input
    }

    json2md.converters.unchecked = function (input, json2md) {
       return '' + input
    }

    json2md.converters.link = function (input, json2md) {
       return `\n[${input[0]}](${input[1]})`
    }

    function mdifyList(list, parentName){
        console.log("mdifying ", list)
        var len = 0
        if(list.checks){
            len = list.checks.length || 0
            console.log("list has checks, length: ", len)
        }

        var headerLevel = "h"

        var sublevel = parentName.split("/").length

        console.log("on sublevel ", sublevel)

        if(sublevel > 6){sublevel = 6} //lowest header level
        headerLevel += sublevel

        var header = {}
        header[headerLevel] = list.name? parentName +"/"+ list.name: "no name given"

        var number = list.checks.reduce((acc, c)=>{
            if(c.selected){
                acc++
            }
            return acc
        }, 0)

        var arr = [
            header,

        ]

        if(len > 0){
            arr.push({blockquote: `sub items checked: ${number}/${len}`})
        }

        var status = list.selected? "checked":"unchecked"
        var bodything = {}
        bodything[status] = list.description? list.description: "no description"
        arr.push(bodything)
        console.log("arr contains:", arr)

        if(list.checks && len > 0){
            console.log("list.checks exists and len is > 0")
            list.checks.forEach(checklist=>{

                arr = arr.concat(mdifyList(checklist, parentName +"/"+ list.name))
            })
        }

        return arr
    }

    function download(filename, text) {
          var element = document.createElement('a');
          element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
          element.setAttribute('download', filename);

          element.style.display = 'none';
          document.body.appendChild(element);

          element.click();

          document.body.removeChild(element);
        }

    return serv;
})
