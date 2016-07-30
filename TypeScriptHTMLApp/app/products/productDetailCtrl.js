var app;
(function (app) {
    var productDetail;
    (function (productDetail) {
        var ProductDetailModel = (function () {
            function ProductDetailModel($routeParams, dataAccessService) {
                var _this = this;
                this.$routeParams = $routeParams;
                this.dataAccessService = dataAccessService;
                this.title = "Product Detail";
                this.title = "Product Detail";
                var productResource = dataAccessService.getProductResource();
                productResource.get({ productId: $routeParams.productId }, function (data) {
                    _this.product = data;
                });
            }
            ProductDetailModel.$inject = ["$routeParams", "dataAccessService"];
            return ProductDetailModel;
        }());
        angular
            .module("productManagement")
            .controller("ProductDetailCtrl", ProductDetailModel);
    })(productDetail = app.productDetail || (app.productDetail = {}));
})(app || (app = {}));
//# sourceMappingURL=productDetailCtrl.js.map