(function () {
    window.$dog = function (dogName) {
        return new DOGS(dogName);
    }

    var DOGS = function (dogName) {
        this.name = dogName
    }

    DOGS.prototype.age = function (dogAge) {
        this.age = dogAge;
        return this;
    }

    DOGS.prototype.pic = function (imgPath) {
        var dogImg = document.createElement("img");
        dogImg.setAttribute("src", imgPath);
        document.getElementsByTagName("body")[0].appendChild(dogImg);
        return this;
    }

    DOGS.prototype.printName = function () {
        var namePrint = document.createElement("div");
        namePrint.innerHTML = this.name;
        document.getElementsByTagName("body")[0].appendChild(namePrint);
        return this;
    }

    DOGS.prototype.addFriends = function(friendName){
        if (!this.hasOwnProperty("friends")){
            this.friends = []
        }
        this.friends.push(friendName);
        return this;
    }

})();