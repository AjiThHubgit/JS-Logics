const app = angular.module('myApp', []);

app.controller('MyController', ($scope) => {

    $scope.sliderObj = {
        displaySlide: 1,
        active: '#009A61',
        inactive: '#D9D9D9'
    }

    $scope.displaySlider = (displaySlide = 1) => {

        if (displaySlide === 1 || displaySlide === 2) {
            $scope.sliderObj.displaySlide = displaySlide;
        }
    };

    $scope.previousSlide = () => {
        $scope.sliderObj.displaySlide = $scope.sliderObj.displaySlide === 1 ? 2 : 1;
    }

    $scope.nextSlide = () => {
        $scope.sliderObj.displaySlide = $scope.sliderObj.displaySlide === 1 ? 2 : 1;
    }

});
