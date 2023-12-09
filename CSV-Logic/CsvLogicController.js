var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {

  $scope.resJson = {

    "csvHeader" : [
      {
        "id" : 0,
        "name" : "Student First Name",
        "checked" : false
      },
      {
        "id" : 1,
        "name" : "Student Last Name",
        "checked" : false
      },
      {
        "id" : 2,
        "name" : "Owner First Name",
        "checked" : false
      },
      {
        "id" : 3,
        "name" : "Owner Last Name",
        "checked" : false
      },
      {
        "id" : 4,
        "name" : "Student Phone Number",
        "checked" : false
      },
      {
        "id" : 5,
        "name" : "Student Email Id",
        "checked" : false
      }
    ],

    mystudioHeader : [

      {
        "id" : 0,
        "name" : "Participant First Name",
        "selected" : false
      },
      {
        "id" : 1,
        "name" : "Participant Last Name",
        "selected" : false
      },
      {
        "id" : 2,
        "name" : "Buyer First Name",
        "selected" : false
      },
      {
        "id" : 3,
        "name" : "Buyer Last Name",
        "selected" : false
      },
      {
        "id" : 4,
        "name" : "Participant Phone Number",
        "selected" : false
      },
      {
        "id" : 5,
        "name" : "Participant Email Id",
        "selected" : false
      }

    ]

  }

  $scope.migrationDefaultObj = {
    "csv_result": {},
    "csv_headers": {},
    "mystudio_headers": [],
    "common_fields": [
      {
        "id": "P1",
        "title": "Please select",
        "is_required": false,
        "is_selected": true
      },
      {
        "id": "P2",
        "title": "Do not map",
        "is_required": false
      }
    ],
    "mapping_field": [],
    "mapping_info": [],
    "mapping_view_info": []
  };

  $scope.textColor = 'black';

  $scope.setMigrationObj = function () {

    $scope.migrationDefaultObj.csv_result = $scope.resJson;
    $scope.migrationDefaultObj.csv_headers = $scope.resJson.csvHeader;
    $scope.migrationDefaultObj.mystudio_headers = $scope.resJson.mystudioHeader;

  }
  
  $scope.setMigrationObj();

  $scope.setMappingViewInfo = function() {

    $scope.migrationDefaultObj.csv_headers.forEach((csvInfo, csvInd) => {
        $scope.migrationDefaultObj.mapping_view_info[csvInfo.name] = 'Please select';
    });

    console.log($scope.migrationDefaultObj, 'check mappingInfo');
  }

  $scope.setMappingViewInfo();

  $scope.selectMystudioDropdown = function (csvCheckBoxObj, mystudioselectedDropdownObj) {

    if (mystudioselectedDropdownObj.selected === false) {
      mystudioselectedDropdownObj.selected = true;

      $scope.migrationDefaultObj.mapping_view_info[csvCheckBoxObj.name] = mystudioselectedDropdownObj.name;
    } else {
      mystudioselectedDropdownObj.selected = false;
    }


  }


  $scope.getStyles = function() {
    return {
      color: $scope.textColor,
    };
  };


});